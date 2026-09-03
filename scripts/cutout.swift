import CoreImage
import Foundation
import Vision

// Lifts the foreground subject out of a photo using Vision's instance mask and
// writes a transparent PNG. One-off asset tooling, not part of the site build.

let args = CommandLine.arguments
guard args.count >= 3 else {
    FileHandle.standardError.write("usage: cutout <input> <output.png>\n".data(using: .utf8)!)
    exit(64)
}

let inputURL = URL(fileURLWithPath: args[1])
let outputURL = URL(fileURLWithPath: args[2])

guard let image = CIImage(contentsOf: inputURL) else {
    FileHandle.standardError.write("could not read input\n".data(using: .utf8)!)
    exit(65)
}

let handler = VNImageRequestHandler(ciImage: image, options: [:])
let request = VNGenerateForegroundInstanceMaskRequest()

do {
    try handler.perform([request])
    guard let observation = request.results?.first else {
        FileHandle.standardError.write("no subject found\n".data(using: .utf8)!)
        exit(66)
    }

    // Cropping to the instance extent trims the transparent margin, so the
    // subject can be positioned precisely against the layout.
    let buffer = try observation.generateMaskedImage(
        ofInstances: observation.allInstances,
        from: handler,
        croppedToInstancesExtent: true
    )

    let output = CIImage(cvPixelBuffer: buffer)
    let context = CIContext()
    try context.writePNGRepresentation(
        of: output,
        to: outputURL,
        format: .RGBA8,
        colorSpace: CGColorSpace(name: CGColorSpace.sRGB)!
    )
    print("wrote \(outputURL.path) - instances: \(observation.allInstances.count)")
} catch {
    FileHandle.standardError.write("failed: \(error)\n".data(using: .utf8)!)
    exit(70)
}
