const items = [
  {
    degree: "Engineering Degree — SDBDIA",
    field: "Data Science, Big Data & Artificial Intelligence",
    school: "ENSA Agadir — École Nationale des Sciences Appliquées",
    location: "Agadir, Morocco",
    period: "2022 – Present",
    current: true,
    courses: ["Machine Learning", "Deep Learning", "Big Data", "Databases", "Algorithms", "Statistics", "Signal Processing"],
  },
  {
    degree: "Baccalaureate — Sciences Physiques",
    field: "Physical Sciences",
    school: "Tabari High School",
    location: "Morocco",
    period: "2023",
    current: false,
    courses: [],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-tag">Education</p>
        <h2 className="section-heading">My academic <em>background</em></h2>

        <div className="mt-10 relative pl-8 md:pl-10">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

          <div className="flex flex-col gap-8">
            {items.map((item, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <div
                  className={`absolute -left-8 md:-left-10 top-6 w-3 h-3 rounded-full border-2 ${
                    item.current
                      ? "border-accent bg-accent-light"
                      : "border-border bg-white"
                  }`}
                />

                <div className="card">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-body font-semibold text-navy text-base">
                        {item.degree}
                      </h3>
                      <p className="text-sm text-muted font-body mt-0.5">{item.field}</p>
                    </div>
                    <span
                      className={`text-xs font-medium font-body px-3 py-1 rounded-full ${
                        item.current
                          ? "bg-accent-light text-accent"
                          : "border border-border text-muted"
                      }`}
                    >
                      {item.current ? "Current · 3rd Year" : "Completed"}
                    </span>
                  </div>

                  <p className="text-sm font-body text-muted mb-1">{item.school}</p>
                  <p className="text-xs font-body text-muted mb-4">
                    {item.location} · {item.period}
                  </p>

                  {item.courses.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((c) => (
                        <span key={c} className="skill-pill">{c}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
