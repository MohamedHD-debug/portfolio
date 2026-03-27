const stats = [
  { value: "3rd",  label: "Year of Engineering" },
  { value: "5+",   label: "Languages Known" },
  { value: "2",    label: "IBM Certificates" },
  { value: "2",    label: "Completed Projects" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white border-y border-border">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <p className="section-tag">About Me</p>
          <h2 className="section-heading">
            Turning data into <em>meaningful insights</em>
          </h2>
          <p className="font-body text-muted leading-relaxed mb-5">
            I am a 3rd-year engineering student at{" "}
            <strong className="text-navy">ENSA Agadir</strong>, majoring in Data
            Science, Big Data and Artificial Intelligence (SDBDIA). I enjoy
            working on real data problems — from cleaning datasets to training
            machine learning models and communicating results visually.
          </p>
          <p className="font-body text-muted leading-relaxed mb-8">
            I hold IBM certifications in Python and Machine Learning and have
            intermediate proficiency in Python, Java, C, MATLAB, SQL, and
            8086 Assembly. I am currently seeking a summer internship where I
            can contribute and grow.
          </p>
          <a
            href="mailto:mohamedhalloud97@gmail.com"
            className="text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            mohamedhalloud97@gmail.com ↗
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-cream border border-border rounded-2xl p-6">
              <span className="font-display text-4xl text-accent font-normal block mb-1">
                {s.value}
              </span>
              <span className="text-sm font-body text-muted">{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
