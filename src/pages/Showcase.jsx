import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { COMPONENT_LIST, DEMOS } from "../data/components";

export default function Showcase() {
  const { id } = useParams();
  const activeId = id || COMPONENT_LIST[0].id;
  const active = COMPONENT_LIST.find((c) => c.id === activeId) || COMPONENT_LIST[0];
  const [dialogOpen, setDialogOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [rating, setRating] = useState(4);
  const [sw, setSw] = useState(true);

  const demoProps = { dialogOpen, setDialogOpen, page, setPage, rating, setRating, sw, setSw };

  const Preview = DEMOS[active.id] || (() => <p>Preview coming soon.</p>);

  return (
    <div className="showcase">
      <aside className="sidebar">
        <h2>Components</h2>
        <p className="count">{COMPONENT_LIST.length} components</p>
        <ul>
          {COMPONENT_LIST.map((c) => (
            <li key={c.id}>
              <Link to={`/components/${c.id}`} className={c.id === active.id ? "active" : ""}>
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div className="content">
        <header>
          <p className="category">{active.category}</p>
          <h1>{active.name}</h1>
          <p className="desc">{active.description}</p>
        </header>

        <section className="preview-box">
          <h3>Preview</h3>
          <div className="preview-surface">
            <Preview {...demoProps} />
          </div>
        </section>

        <section className="code-box">
          <h3>Usage</h3>
          <pre><code>{active.usage}</code></pre>
        </section>
      </div>

      <style>{`
        .showcase { display: grid; grid-template-columns: 240px 1fr; gap: 0; max-width: 1200px; margin: 0 auto; min-height: calc(100vh - 120px); }
        .sidebar { border-right: 1px solid var(--border); padding: 32px 16px; position: sticky; top: 80px; height: calc(100vh - 100px); overflow-y: auto; }
        .sidebar h2 { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); margin-bottom: 4px; }
        .count { font-size: 0.8rem; color: var(--muted); margin-bottom: 16px; }
        .sidebar ul { list-style: none; }
        .sidebar a { display: block; padding: 8px 12px; border-radius: 8px; color: var(--muted); font-size: 0.875rem; text-decoration: none; }
        .sidebar a:hover, .sidebar a.active { background: rgba(99,102,241,0.12); color: var(--primary-hover); text-decoration: none; }
        .content { padding: 32px 32px 64px; }
        .category { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent); margin-bottom: 8px; }
        .content h1 { font-size: 2rem; margin-bottom: 8px; }
        .desc { color: var(--muted); margin-bottom: 32px; max-width: 560px; }
        .preview-box, .code-box { margin-bottom: 32px; }
        .preview-box h3, .code-box h3 { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); margin-bottom: 12px; }
        .preview-surface { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 32px; min-height: 120px; display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
        pre { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 20px; overflow-x: auto; }
        code { font-family: monospace; font-size: 0.85rem; color: var(--primary-hover); white-space: pre-wrap; }
        @media (max-width: 800px) {
          .showcase { grid-template-columns: 1fr; }
          .sidebar { position: static; height: auto; border-right: none; border-bottom: 1px solid var(--border); }
          .sidebar ul { display: flex; flex-wrap: wrap; gap: 4px; }
        }
      `}</style>
    </div>
  );
}
