const projects = [
  {
    emoji: "🏠",
    type: "Machine Learning",
    title: "House Price Prediction",
    description:
      "A supervised regression model that predicts residential property prices based on features such as surface area, number of rooms, location, and condition. Includes data cleaning, feature engineering, model training with Scikit-Learn, and performance evaluation with visualizations.",
    tags: ["Python", "Scikit-Learn", "Pandas", "Regression", "Matplotlib"],
    github: "https://github.com/mohamed-halloud",
  },
  {
    emoji: "🏥",
    type: "Database Design",
    title: "Hospital Management System",
    description:
      "A fully normalized relational database to manage hospital operations — covering patients, doctors, appointments, medical records, and billing. Designed with an ERD, implemented in SQL with complex queries for reporting and data retrieval.",
    tags: ["SQL", "Database Design", "ERD", "Normalization", "Queries"],
    github: "https://github.com/mohamed-halloud",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white border-y border-border">
      <div className="max-w-5xl mx-auto">
        <p className="section-tag">Projects</p>
        <h2 className="section-heading">Things I&apos;ve <em>built</em></h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {projects.map((p) => (
            <div key={p.title} className="card flex flex-col group">

              {/* Top */}
              <div className="flex items-start justify-between mb-5">
                <span className="text-4xl">{p.emoji}</span>
                <span className="pill">{p.type}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-normal text-navy mb-3">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-body text-muted leading-relaxed mb-6 flex-1">
                {p.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span key={t} className="skill-pill">{t}</span>
                ))}
              </div>

              {/* Link */}
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:underline underline-offset-4"
              >
                View on GitHub
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
