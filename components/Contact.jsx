const links = [
  {
    label: "Email",
    value: "mohamedhalloud97@gmail.com",
    href: "mailto:mohamedhalloud97@gmail.com",
    external: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mohamed-halloud-10321a2a2",
    href: "https://www.linkedin.com/in/mohamed-halloud-10321a2a2",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/mohamed-halloud",
    href: "https://github.com/MohamedHD-debug",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div>
          <p className="section-tag">Contact</p>
          <h2 className="section-heading">Let&apos;s <em>connect</em></h2>
          <p className="font-body text-muted leading-relaxed mb-8">
            I am actively looking for a summer 2026 internship in Data Science,
            Machine Learning, or AI. If you have an opportunity or simply want
            to connect, I would love to hear from you.
          </p>
          <a
            href="mailto:mohamedhalloud97@gmail.com"
            className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Send an Email
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Right — link cards */}
        <div className="flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : "_self"}
              rel={l.external ? "noreferrer" : undefined}
              className="card flex items-center gap-4 hover:border-accent group"
            >
              <span className="text-muted group-hover:text-accent transition-colors shrink-0">
                {l.icon}
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold font-body text-muted uppercase tracking-widest mb-0.5">
                  {l.label}
                </p>
                <p className="text-sm font-body text-navy truncate">{l.value}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}