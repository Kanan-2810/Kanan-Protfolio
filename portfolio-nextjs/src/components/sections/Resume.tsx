const education = [
  {
    date: "June 2018 – March 2020",
    title: "Higher Secondary School",
    org: "Gyanmanjari Vidhyapith",
  },
  {
    date: "July 2020 – April 2024",
    title: "Information Technology",
    org: "Dharmsinh Desai University",
  },
];

const experience = [
  {
    date: "December 2023 – November 2024",
    title: "Junior Software Developer",
    org: "Edelta Enterprise Solutions Pvt. Ltd.",
  },
  {
    date: "December 2024 – May 2025",
    title: "Freelancing",
    org: "Independent",
  },
  {
    date: "June 2025 – Present",
    title: "Software Developer",
    org: "TechnoFuzn Products Pvt. Ltd.",
  },
];

function TimelineItem({
  date,
  title,
  org,
}: {
  date: string;
  title: string;
  org: string;
}) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-sky-500 ring-4 ring-slate-800" />
      <div className="absolute left-[5px] top-6 bottom-0 w-px bg-slate-700 last:bg-transparent" />
      <span className="text-xs font-medium text-sky-400/90 uppercase tracking-wider">
        {date}
      </span>
      <h3 className="text-lg font-semibold text-white mt-1">{title}</h3>
      <p className="text-slate-400 text-sm mt-0.5">{org}</p>
    </div>
  );
}

export function Resume() {
  return (
    <section id="section-resume" className="section-padding bg-slate-900/50">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          My <span className="gradient-text">Resume</span>
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">
          Education and professional experience.
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-sky-500 rounded" />
              Education
            </h3>
            {education.map((item) => (
              <TimelineItem key={item.title} {...item} />
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-sky-500 rounded" />
              Experience
            </h3>
            {experience.map((item) => (
              <TimelineItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
