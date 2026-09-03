import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#EEF1F7",
        ink: {
          DEFAULT: "#111111",
          soft: "#1C2027",
        },
        // Nudged darker than the #667085 in the brief so secondary text clears
        // WCAG AA (4.5:1) against both the canvas and white cards.
        muted: "#5A6478",
        navy: {
          950: "#04205C",
          900: "#062A70",
          800: "#082D78",
          700: "#0A317E",
          600: "#0F3E9C",
          500: "#1449B8",
        },
        accent: {
          700: "#3352E8",
          600: "#4260F5",
          500: "#4C6FFF",
          400: "#5B6FFF",
          300: "#6378FF",
          200: "#A9B8FF",
          100: "#DDE4FF",
          50: "#EFF3FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "12px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
      },
      maxWidth: {
        shell: "1280px",
      },
      fontSize: {
        label: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.14em" }],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 40, 0.04), 0 12px 32px -12px rgba(16, 24, 40, 0.10)",
        lift: "0 2px 4px rgba(16, 24, 40, 0.04), 0 28px 56px -20px rgba(16, 24, 40, 0.20)",
        glow: "0 30px 90px -30px rgba(76, 111, 255, 0.65)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 11s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite alternate",
        marquee: "marquee 40s linear infinite",
        "fade-up": "fadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        "portrait-in": "portraitIn 1.15s cubic-bezier(0.22, 1, 0.36, 1) 0.28s both",
        blink: "blink 1s steps(1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        portraitIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-50%) translateY(72px) scale(0.96)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(-50%) translateY(0) scale(1)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "100%": { transform: "translate3d(3%, -4%, 0) scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
