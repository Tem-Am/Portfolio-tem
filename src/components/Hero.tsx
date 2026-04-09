import { ImageWithFallback } from "./figma/ImageWithFallback";
import imageMe from "../images/temuulen.png";
export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0a0b10] flex items-center pt-14 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 py-20">
          {/* Left content */}
          <div className="flex-1 flex flex-col items-start">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse inline-block" />
              <span className="text-cyan-400 text-xs tracking-widest uppercase">
                Available for New Opportunities and Challenges
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-white mb-6 leading-tight"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.12,
              }}
            >
              Full Stack &amp; <br />
              <span className="text-cyan-400">AI Engineer</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-gray-400 mb-10 max-w-lg"
              style={{ lineHeight: 1.7 }}
            >
              A software engineer based in Seattle with 2+ years of experience
              building backend systems, APIs, and full-stack web applications. I
              enjoy designing scalable and reliable solutions, optimizing
              performance, and creating seamless user experiences. I work across
              technologies like Node.js, TypeScript, Python, PostgreSQL, and
              AWS, and I thrive on taking projects from concept to production
              while collaborating closely with teams.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#projects")}
                className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-[#0a0b10] rounded transition-colors text-sm"
                style={{ fontWeight: 600 }}
              >
                Review Projects
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="px-6 py-2.5 border border-[#2a2d3e] text-gray-300 hover:border-cyan-500 hover:text-cyan-400 rounded transition-colors text-sm"
              >
                View GitHub
              </button>
            </div>
          </div>

          {/* Right — profile image */}
          <div className="flex-shrink-0 relative">
            <div
              className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-[#1a1d2e] relative"
              style={{ boxShadow: "0 0 60px rgba(0,200,200,0.08)" }}
            >
              <ImageWithFallback
                src={imageMe}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {/* subtle teal overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 via-transparent to-transparent" />
            </div>
            {/* decorative corner accent */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-cyan-500/40 rounded-br-2xl" />
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-cyan-500/20 rounded-tl-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
