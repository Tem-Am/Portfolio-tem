const experiences = [
  {
    id: 1,
    title: "Full Stack Software Engineer",
    company: "Seattle Mongolian Youth Center",
    period: "Sep 2025 — Present",
    achievements: [
      "Architected and delivered a full-stack nonprofit web platform using React, Node.js, and PostgreSQL, overseeing the project from design through production deployment.",
      "Built a secure admin dashboard featuring role-based access control (RBAC) and JWT user authentication, enabling staff to manage site content, users, and permissions efficiently.",
      "Designed and deployed both public-facing and admin portals on a self-managed VPS server, handling server configuration, environment setup, and production hosting end to end.",
    ],
  },
  {
    id: 2,
    title: "Full Stack Software Engineer",
    company: "Surface Experts",
    period: "Jan 2025 — June 2025",
    achievements: [
      "Developed a secure franchise management section of an internal React and Node.js app, enabling HQ and employees with proper credentials to easily create, update, and manage franchise data and operations.",
      "Collaborated with a senior engineer to test and debug pre-deployment features by identifying edge cases, validating user flows, and resolving issues across backend and frontend, resulting in a more stable and maintainable system.",
      "Built a separate full-stack image processing app using Node.js and React, allowing employees to upload before-and-after repair photos, automatically generate combined images, and displaying for marketing and internal use.",
      "Integrated automatic WebP conversion to reduce image load times by 30% and file sizes by 60% during testing, while retaining original files for download.",
    ],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Pinecone Studio",
    period: "Jan 2023 — Dec 2024",
    achievements: [
      "Developed backend integration modules for onboarding microservices (Java, Node.js), connecting Gmail, Slack, and GitHub APIs to automate manual workflows.",
      "Supported the development of a fault-tolerant CI/CD pipeline using GitHub Actions and Docker, contributing to zero-downtime deployments on AWS and reducing release cycles from 3 hours to 10 minutes.",
      "Owned end-to-end development of a full-stack web application from PostgreSQL schema design and Node.js REST API to a React/Next.js frontend delivering a secure admin dashboard for a production nonprofit client.",
      "Designed normalized relational schemas and REST APIs using PostgreSQL and Prisma ORM, implementing role-based access controls, input validation, and error handling for production environments.",
      "Worked cross-functionally with clients and stakeholders in an Agile/Scrum environment, participating in sprint planning and iterative delivery to ship features based on real user feedback.",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0a0b10] border-t border-[#1a1d2e] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-cyan-400 text-xs tracking-widest uppercase mb-3">
            Career
          </p>
          <h2
            className="text-white leading-tight"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              fontWeight: 700,
            }}
          >
            Professional Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="relative flex flex-col md:flex-row gap-6 pb-12 last:pb-0"
            >
              {/* Left: vertical line + dot */}
              <div className="hidden md:flex flex-col items-center w-8 flex-shrink-0 pt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 flex-shrink-0 ring-4 ring-cyan-400/10" />
                {idx < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-[#1a1d2e] mt-2" />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 bg-[#0f1017] border border-[#1a1d2e] rounded-xl p-6 hover:border-cyan-500/20 transition-colors">
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3
                      className="text-white leading-snug mb-0.5"
                      style={{ fontWeight: 600 }}
                    >
                      {exp.title}
                    </h3>
                    <p className="text-cyan-400 text-sm">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-xs sm:text-sm whitespace-nowrap pt-0.5 flex-shrink-0">
                    {exp.period}
                  </span>
                </div>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span
                        className="text-gray-400 text-sm"
                        style={{ lineHeight: 1.65 }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
