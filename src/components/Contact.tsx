import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/Tem-Am" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/tem-amaraa/",
  },
  { name: "Email", icon: Mail, href: "mailto:tem.amarjargal@google.com" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0a0b10] border-t border-[#1a1d2e] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* CTA block */}
        <div className="bg-[#0f1017] border border-[#1a1d2e] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <p className="text-cyan-400 text-xs tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2
              className="text-white leading-tight mb-4"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700 }}
            >
              Excited to learn more about new opportunities or build something meaningful together.
            </h2>
            <p className="text-gray-400 text-sm" style={{ lineHeight: 1.7 }}>
              Whether it's a greenfield architecture project, scaling an
              existing system, or a quick code review — I'm open to connecting.
            </p>
          </div>

          <div className="flex flex-col gap-3 flex-shrink-0">
            <a
              href="mailto:tem.amarjargal@google.com"
              className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-[#0a0b10] rounded transition-colors text-sm text-center"
              style={{ fontWeight: 600 }}
            >
              Send a Message
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-[#2a2d3e] text-gray-300 hover:border-cyan-500 hover:text-cyan-400 rounded transition-colors text-sm text-center"
            >
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social links */}
          <div className="flex items-end gap-5">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
