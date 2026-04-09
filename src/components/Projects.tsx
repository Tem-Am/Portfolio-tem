import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, ExternalLink } from "lucide-react";
import careerImage from '../images/career.jpg';

const projects = [
  {
    id: 1,
    title: "Career Helper",
    description:
      "AI-powered platform that helps students and new graduates discover personalized career paths and relevant local resources based on their interests and skills.",
    image: careerImage,
    tags: ["React", "Node.js", "Express","MongoDB", "MySQL", "Generative AI"],
    status: "Live",
    link: "https://career-coach-nine-sable.vercel.app",
    linkLabel: "View Project",
  },
  {
    id: 2,
    title: "Network Traffic Classifcation",
    description:
      "This research introduces a custom optimization algorithm to find the best neural network configurations for classifying network traffic.",
    image:
      "https://images.unsplash.com/photo-1678845536613-5cf0ec5245cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZGF0YSUyMHBpcGVsaW5lJTIwbmV0d29yayUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzc1MjQ2Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: [
      "Deep Learning",
      "Neural Networks",
      "Hyperparameter Optimization",
      "Cybersecurity",
    ],
    status: "Research",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-89063-5_25",
    linkLabel: "Read The Paper",
  },
  {
    id: 3,
    title: "Metrics Flow UI",
    description:
      "A comprehensive React application for real-time server task status and flat monitoring with SLO dashboards.",
    image:
      "https://images.unsplash.com/photo-1753998943619-b9cd910887e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY29kZSUyMG1vbml0b3IlMjB0ZXJtaW5hbCUyMHNjcmVlbnxlbnwxfHx8fDE3NzUyNDY3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "Redux IT", "Alert SLO"],
    status: null,
    link: "#",
    linkLabel: "Core Study",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-[#0a0b10] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2
              className="text-white mb-3 leading-tight"
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
              }}
            >
              Personal Project & Research
            </h2>
            <p className="text-gray-500 text-sm">
              Exploring the synergy between complex data structures and seamless
              user experiences.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-cyan-400 text-xs tracking-widest uppercase">
              31 Projects
            </span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#0f1017] border border-[#1a1d2e] rounded-xl overflow-hidden hover:border-cyan-500/30 transition-colors flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1017] via-[#0f1017]/40 to-transparent" />
                {project.status && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded border border-cyan-500/30 tracking-wide uppercase">
                      {project.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="text-white mb-2 leading-snug"
                  style={{ fontWeight: 600 }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-gray-500 text-sm mb-4 flex-1"
                  style={{ lineHeight: 1.65 }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs text-gray-400 border border-[#2a2d3e] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  style={{ fontWeight: 500 }}
                >
                  {project.linkLabel}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-end">
          <a
            href="#"
            className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            View all archived projects
          </a>
        </div>
      </div>
    </section>
  );
}
