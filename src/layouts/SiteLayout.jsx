import { Outlet, Link, NavLink } from "react-router-dom";

export default function SiteLayout() {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="logo">
            <span className="logo-mark" />
            UILERIAL <strong>STUDIO</strong>
          </Link>
          <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/components">Components</NavLink>
            <a href="https://uilerial.vercel.app" rel="noopener">Package</a>
            <a href="https://github.com/techlestial/uilerial" rel="noopener">GitHub</a>
          </nav>
          <a className="cta" href="https://www.npmjs.com/package/@techlestial/uilerial" rel="noopener">
            npm install
          </a>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>
          <a href="https://techlestial.vercel.app">Techlestial Labs</a>
          · MIT · Kevin Moe Myint Myat
        </p>
      </footer>
      <style>{`
        .header { position: sticky; top: 16px; z-index: 50; padding: 0 16px; }
        .header-inner {
          max-width: 1100px; margin: 0 auto; display: flex; align-items: center;
          justify-content: space-between; gap: 16px; padding: 10px 20px;
          background: rgba(5,5,5,0.9); backdrop-filter: blur(16px);
          border: 1px solid var(--border); border-radius: 999px;
        }
        .logo { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 0.8rem; letter-spacing: 0.06em; color: var(--text); text-decoration: none; }
        .logo:hover { text-decoration: none; }
        .logo strong { color: var(--accent); }
        .logo-mark { width: 20px; height: 20px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--accent)); }
        nav { display: flex; gap: 8px; flex-wrap: wrap; }
        nav a { color: var(--muted); font-size: 0.85rem; padding: 6px 12px; border-radius: 999px; text-decoration: none; }
        nav a:hover, nav a.active { color: var(--text); background: rgba(255,255,255,0.06); text-decoration: none; }
        .cta { font-size: 0.8rem; font-weight: 600; padding: 8px 14px; border: 1px solid var(--border); border-radius: 999px; color: var(--text); text-decoration: none; white-space: nowrap; }
        .cta:hover { border-color: var(--primary); text-decoration: none; }
        .main { position: relative; z-index: 1; min-height: calc(100vh - 140px); }
        .footer { position: relative; z-index: 1; text-align: center; padding: 40px; color: var(--muted); font-size: 0.85rem; border-top: 1px solid var(--border); }
        @media (max-width: 700px) { nav { display: none; } }
      `}</style>
    </>
  );
}
