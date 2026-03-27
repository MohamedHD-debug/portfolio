const certs = [
  {
    emoji: "🐍",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM — Coursera",
    description:
      "Covers Python fundamentals, data structures, NumPy, Pandas, APIs, and practical applications in data science and AI pipelines.",
    skills: ["Python", "Pandas", "NumPy", "APIs", "Data Wrangling"],
  },
  {
    emoji: "🤖",
    title: "Machine Learning with Python",
    issuer: "IBM — Coursera",
    description:
      "Covers the full ML workflow: supervised and unsupervised learning, regression, classification, clustering, and model evaluation using Scikit-Learn.",
    skills: ["Scikit-Learn", "Regression", "Classification", "Clustering", "Model Evaluation"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-white border-y border-border">
      <div className="max-w-5xl mx-auto">
        <p className="section-tag">Certifications</p>
        <h2 className="section-heading">Credentials &amp; <em>learning</em></h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {certs.map((c) => (
            <div
              key={c.title}
              className="card border-accent-light bg-accent-light/30 hover:bg-white"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <span className="text-3xl">{c.emoji}</span>
                <span className="text-xs font-bold font-body tracking-widest bg-navy text-white px-3 py-1 rounded-full uppercase">
                  IBM
                </span>
              </div>

              {/* Title */}
              <h3 className="font-body font-semibold text-navy text-base mb-1">
                {c.title}
              </h3>
              <p className="text-xs font-body text-accent font-medium mb-4">{c.issuer}</p>

              {/* Description */}
              <p className="text-sm font-body text-muted leading-relaxed mb-5">
                {c.description}
              </p>

              {/* Skills covered */}
              <div className="flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm font-body text-muted mt-8 italic">
          Verified through IBM SkillsBuild &amp; Coursera.
        </p>
      </div>
    </section>
  );
}
