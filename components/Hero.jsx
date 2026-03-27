export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 max-w-5xl mx-auto">

      {/* Badge */}
      <div className="fade-up delay-1 flex items-center gap-3 mb-10">
        <span className="h-px w-10 bg-accent" />
        <span className="text-xs font-semibold tracking-[0.18em] text-accent uppercase font-body">
          Open to Internship · Summer 2026
        </span>
      </div>

      {/* Name */}
      <h1 className="fade-up delay-2 font-display font-normal leading-[0.95] tracking-tight text-navy"
          style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}>
        Mohamed<br />
        <span className="italic text-muted">Halloud.</span>
      </h1>

      {/* Subtitle */}
      <p className="fade-up delay-3 mt-7 max-w-lg text-base md:text-lg font-body font-light text-muted leading-relaxed">
        3rd-year <span className="text-navy font-medium">Data Science &amp; AI</span> engineering
        student at ENSA Agadir — building predictive models, querying data, and learning every day.
      </p>

      {/* Buttons */}
      <div className="fade-up delay-4 mt-10 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-navy text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-navy-soft transition-colors"
        >
          View Projects
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-halloud-10321a2a2"
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 border border-border text-navy text-sm font-medium px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/MohamedHD-debug"
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 border border-border text-navy text-sm font-medium px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors"
        >
          GitHub
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="fade-up delay-5 mt-20 flex items-center gap-3 text-muted">
        <div className="w-px h-10 bg-border" />
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
