import { Server, Cloud, Monitor } from 'lucide-react';

type Proficiency = 'Fluent' | 'Advanced' | 'Proficient' | 'Production';

const skillCategories = [
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', value: 92 },
      { name: 'Python', value: 86 },
      { name: 'Java', value: 75 },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Dev',
    icon: Cloud,
    skills: [
      { name: 'AWS Architecture', level: 'Expert' as Proficiency },
      { name: 'Docker / K8s', level: 'Production' as Proficiency },
      { name: 'CI/CD Logic', level: 'Advanced' as Proficiency },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Monitor,
    skills: [
      { name: 'React', level: 'Advanced' as Proficiency },
      { name: 'React Native', level: 'Mid+' as Proficiency },
      { name: 'Tailwind CSS', level: 'Fluent' as Proficiency },
    ],
  },
];

const levelColors: Record<string, string> = {
  Expert: 'text-cyan-400',
  Production: 'text-cyan-400',
  Advanced: 'text-cyan-300',
  'Mid+': 'text-cyan-300',
  Fluent: 'text-cyan-400',
};

export function Skills() {
  return (
    <section id="skills" className="bg-[#0a0b10] border-t border-[#1a1d2e] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-cyan-400 text-xs tracking-widest uppercase mb-3">Capabilities</p>
          <h2
            className="text-white leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700 }}
          >
            Technical Stack
          </h2>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-[#0f1017] border border-[#1a1d2e] rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded bg-cyan-500/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span
                    className="text-white"
                    style={{ fontWeight: 600 }}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => {
                    if ('value' in skill) {
                      // Bar-based
                      return (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-gray-300 text-sm">{skill.name}</span>
                            <span className="text-cyan-400 text-xs">{skill.value}%</span>
                          </div>
                          <div className="h-1 bg-[#1a1d2e] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                              style={{ width: `${skill.value}%` }}
                            />
                          </div>
                        </div>
                      );
                    } else {
                      // Level-based
                      return (
                        <div key={skill.name} className="flex justify-between items-center py-2 border-b border-[#1a1d2e] last:border-0">
                          <span className="text-gray-300 text-sm">{skill.name}</span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded border border-current ${levelColors[skill.level] || 'text-gray-400'}`}
                            style={{ opacity: 0.85 }}
                          >
                            {skill.level}
                          </span>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-3 gap-4">
          {[
            { label: 'Contributed Projects', value: '20+' },
            { label: 'Years of Experience', value: '2+' },
            { label: 'Owned end to end project', value: '3+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0f1017] border border-[#1a1d2e] rounded-xl p-6 text-center hover:border-cyan-500/20 transition-colors"
            >
              <div
                className="text-cyan-400 mb-1"
                style={{ fontSize: '1.8rem', fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
