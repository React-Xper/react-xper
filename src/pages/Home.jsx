import { Link } from "react-router-dom";

const FEATURES = [
  { title: "30+ Components", desc: "Production-ready primitives from Button to DataTable." },
  { title: "Live Showcase", desc: "Browse, preview, and copy patterns in this studio." },
  { title: "CSS Modules", desc: "Scoped styles with shared design tokens — themeable." },
  { title: "TypeScript", desc: "Typed exports for every component in the suite." },
  { title: "Accessible", desc: "Semantic HTML, ARIA, keyboard-friendly controls." },
  { title: "Open Source", desc: "MIT licensed under @techlestial on npm." },
];

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <span className="badge"><span className="dot" /> Techlestial Labs</span>
        <h1>
          The complete UI suite for <span className="accent">React</span>
        </h1>
        <p>
          Uilerial Studio is the live component browser for @techlestial/uilerial —
          professional, modern, and ready to industrialize your interfaces.
        </p>
        <div className="actions">
          <Link to="/components" className="btn primary">Browse components</Link>
          <a href="https://uilerial.vercel.app" className="btn ghost" rel="noopener">Package docs</a>
        </div>
        <code className="install">npm i @techlestial/uilerial</code>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="grid">
          {FEATURES.map((f) => (
            <article key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Start building</h2>
        <p>Explore 30+ components with live previews and copy-paste examples.</p>
        <Link to="/components" className="btn primary">Open component browser →</Link>
      </section>

      <style>{`
        .home { max-width: 1000px; margin: 0 auto; padding: 48px 24px 80px; }
        .hero { text-align: center; padding: 48px 0 64px; }
        .badge { display: inline-flex; align-items: center; gap: 8px; font-size: 0.8rem; border: 1px solid var(--border); border-radius: 999px; padding: 6px 14px; margin-bottom: 24px; }
        .dot { width: 8px; height: 8px; border-radius: 50%; background: #3dd68c; box-shadow: 0 0 8px #3dd68c; }
        .hero h1 { font-size: clamp(2rem, 5vw, 3rem); font-weight: 700; line-height: 1.15; margin-bottom: 16px; }
        .accent { color: var(--primary-hover); }
        .hero p { color: var(--muted); max-width: 560px; margin: 0 auto 28px; }
        .actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 24px; }
        .btn { display: inline-flex; padding: 12px 22px; border-radius: 10px; font-weight: 600; font-size: 0.95rem; text-decoration: none; }
        .btn:hover { text-decoration: none; }
        .primary { background: var(--text); color: var(--bg); }
        .ghost { border: 1px solid var(--border); color: var(--text); }
        .install { display: inline-block; font-family: monospace; font-size: 0.85rem; padding: 12px 18px; background: var(--surface); border: 1px solid var(--border); border-radius: 10px; }
        .features h2, .cta h2 { text-align: center; font-size: 1.75rem; margin-bottom: 32px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 64px; }
        .grid article { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 24px; }
        .grid h3 { font-size: 1rem; margin-bottom: 8px; color: var(--primary-hover); }
        .grid p { color: var(--muted); font-size: 0.9rem; }
        .cta { text-align: center; padding: 48px 0; border-top: 1px solid var(--border); }
        .cta p { color: var(--muted); margin-bottom: 20px; }
      `}</style>
    </div>
  );
}
