const groups = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["Python", "Java", "C", "MATLAB", "SQL", "8086 Assembly"],
  },
  {
    title: "ML & Data Libraries",
    icon: "🧠",
    skills: ["Scikit-Learn", "Pandas", "TensorFlow", "PyTorch", "Matplotlib", "Seaborn"],
  },
  {
    title: "Tools & Environment",
    icon: "🛠️",
    skills: ["VS Code", "Jupyter Notebook", "Git / GitHub", "Google Colab"],
  },
];

const levels = [
  { label: "Python",       pct: 65 },
  { label: "SQL",          pct: 65 },
  { label: "Java",         pct: 60 },
  { label: "Scikit-Learn", pct: 65 },
  { label: "Pandas",       pct: 70 },
  { label: "TensorFlow",   pct: 55 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-tag">Technical Skills</p>
        <h2 className="section-heading">What I work <em>with</em></h2>

        {/* Skill cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 mb-16">
          {groups.map((g) => (
            <div key={g.title} className="card">
              <span className="text-2xl mb-4 block">{g.icon}</span>
              <h3 className="text-xs font-semibold font-body tracking-widest uppercase text-muted mb-5">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="bg-white border border-border rounded-2xl p-8">
          <h3 className="text-xs font-semibold font-body tracking-widest uppercase text-muted mb-8">
            Proficiency Overview (Intermediate Level)
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {levels.map((l) => (
              <div key={l.label}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium font-body text-navy">{l.label}</span>
                  <span className="text-xs font-body text-muted">{l.pct}%</span>
                </div>
                <div className="h-1.5 bg-border rounded-full">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
