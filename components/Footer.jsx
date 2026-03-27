export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

        <span className="font-display text-navy text-lg">
          MH<span className="text-accent">.</span>
        </span>

        <p className="font-body text-xs text-muted">
          © {new Date().getFullYear()} Mohamed Halloud · ENSA Agadir · SDBDIA
        </p>

        <div className="flex gap-6">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-halloud-10321a2a2" },
            { label: "GitHub",   href: "https://github.com/mohamed-halloud" },
            { label: "Email",    href: "mailto:mohamedhalloud97@gmail.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-body text-muted hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
