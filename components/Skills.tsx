import { skills } from "@/data/site-data";

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-line">
      <div className="container-x">
        <p className="eyebrow">المهارات</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Skills</h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="card p-6">
              <h3 className="font-display text-sm font-semibold text-accent">{category}</h3>
              <ul className="mt-4 space-y-2">
                {items.map((it, i) => (
                  <li key={i} className="text-sm text-muted">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
