const education = [
  {
    date: "May 2024",
    title: "Information Technology",
    org: "Dharmsinh Desai University, Nadiad",
    details: ["GPA: 7.61"],
  },
];

const experience = [
  {
    date: "Jun 2025 – Present",
    title: "Product Engineer (Engineer, A1)",
    org: "Technofuzn Products Pvt. Ltd.",
    details: [
      "Enhanced CliOps, a healthcare SaaS platform, by making 70% of Super Admin workflows dynamic, reducing manual configuration.",
      "Architected and implemented a multi-tenant architecture, enabling secure onboarding and centralized management of multiple clinics.",
      "Automated WhatsApp notifications, OTPs, and alerts using Meta APIs and MSG91, improving patient engagement and communication reliability.",
      "Migrated the database from PostgreSQL to MongoDB, enabling a scalable document-based architecture.",
      "Automated CI/CD deployments and implemented AWS S3 storage for user files on CliOps, cutting release effort and ensuring secure, isolated access across clinics.",
    ],
  },
  {
    date: "Dec 2023 – May 2025",
    title: "Jr. Software Developer",
    org: "eDelta Enterprise Pvt. Ltd.",
    details: [
      "Built AI-powered chatbot workflows using OpenAI and LangChain, reducing average time by 40% through automated customer interactions.",
      "Improved chatbot response quality by 25% and increased answer accuracy by 19% by optimizing prompts, knowledge retrieval, and AI workflows.",
      "Architected and integrated RESTful and GraphQL APIs, cutting third-party integration effort by 31%.",
    ],
  },
  {
    date: "May 2023 – Jun 2023",
    title: "Full-stack Intern",
    org: "Microtech Outsourcing Services LLP",
    details: [
      "Developed responsive web applications using React.js and reusable component-based architecture to enhance maintainability and user experience.",
      "Integrated RESTful APIs and leveraged React Hooks to build dynamic, data-driven user interfaces with efficient state management.",
    ],
  },
];

function TimelineItem({
  date,
  title,
  org,
  details,
}: {
  date: string;
  title: string;
  org: string;
  details?: string[];
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
      {details && details.length > 0 && (
        <ul className="mt-3 space-y-2">
          {details.map((detail) => (
            <li
              key={detail}
              className="text-slate-400 text-sm leading-relaxed flex gap-2"
            >
              <span className="text-sky-500 mt-1.5 shrink-0 w-1 h-1 rounded-full bg-sky-500" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
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

        <div className="space-y-14 max-w-3xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-sky-500 rounded" />
              Experience
            </h3>
            {experience.map((item) => (
              <TimelineItem key={`${item.org}-${item.title}`} {...item} />
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-sky-500 rounded" />
              Education
            </h3>
            {education.map((item) => (
              <TimelineItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
