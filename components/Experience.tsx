import { experience, certifications } from "@/data/site-data";

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-line">
      <div className="container-x grid gap-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="eyebrow">المسيرة المهنية</p>
          <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">Experience</h2>

          <div className="mt-10 space-y-8 border-s border-line ps-8">
            {experience.map((e, i) => (
              <div key={i} className="relative">
                <span className="absolute -start-[38px] top-1 h-3 w-3 rounded-full bg-accent" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{e.position}</h3>
                  <span className="text-xs text-muted">{e.duration}</span>
                </div>
                <p className="text-sm text-accent">{e.company}</p>
                <ul className="mt-3 space-y-1">
                  {e.points.map((p, j) => (
                    <li key={j} className="text-sm text-muted">— {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">الشهادات</p>
          <h2 className="font-display mt-3 text-2xl font-bold">Certifications</h2>
          <div className="mt-8 space-y-4">
            {certifications.map((c, i) => (
              <div key={i} className="card p-4">
                <p className="font-display text-sm font-semibold">{c.name}</p>
                <p className="text-xs text-muted">{c.issuer} · {c.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
