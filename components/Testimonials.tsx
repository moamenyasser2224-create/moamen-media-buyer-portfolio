import { testimonials } from "@/data/site-data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad border-t border-line">
      <div className="container-x">
        <p className="eyebrow">آراء العملاء</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Testimonials</h2>

        {testimonials.length === 0 ? (
          <div className="card mt-10 p-8 text-center text-muted">
            Testimonials Coming Soon — أضف شهادات عملائك الحقيقية من ملف site-data.ts
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="card p-6">
                <p className="text-sm text-muted">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 font-display text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted">{t.position} · {t.company}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
