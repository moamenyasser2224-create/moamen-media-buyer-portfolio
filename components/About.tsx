import Image from "next/image";
import { profile } from "@/data/site-data";

export default function About() {
  const hasPhoto = profile.photo && !profile.photo.startsWith("[");
  return (
    <section id="about" className="section-pad border-t border-line">
      <div className="container-x grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div className="card relative aspect-[4/5] overflow-hidden bg-panel/60">
          {hasPhoto ? (
            <Image src={profile.photo} alt={profile.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
          ) : (
            <div className="flex h-full flex-col items-center justify-center bg-grid bg-[size:28px_28px] p-8 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/30 bg-accent/5 font-display text-2xl font-bold text-accent">
                MY
              </div>
              <p className="mt-5 font-display text-lg font-semibold">{profile.name}</p>
              <p className="mt-2 text-xs leading-5 text-muted">Add your professional photo to /public/profile.jpg</p>
            </div>
          )}
        </div>

        <div>
          <p className="eyebrow">About the operator</p>
          <h2 className="font-display mt-3 text-3xl font-bold leading-tight md:text-5xl">
            I don&apos;t just manage ads. I manage the path from spend to business outcome.
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-muted">
            <p>
              أتعامل مع كل حملة إعلانية كمشروع تجاري له رقم مستهدف، وليس كمهمة تشغيلية فقط. أبدأ من تكلفة الطلب، معدل التحويل وصافي الربح قبل الحديث عن الكرياتيف أو الاستهداف.
            </p>
            <p>
              أعمل على Meta وTikTok وأربط الأداء الإعلاني ببيانات المبيعات عندما تكون متاحة، حتى يكون القرار مبنيًا على النتيجة التجارية وليس على مؤشرات المنصة وحدها.
            </p>
            <p>
              فلسفتي بسيطة: <span className="text-white">Research → Test → Read the data → Optimize → Scale.</span>
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ["01", "Think in funnels", "أفهم الرحلة من أول Hook حتى الشراء."],
              ["02", "Test systematically", "أختبر الفكرة قبل أن أضاعف الميزانية."],
              ["03", "Scale with control", "أوسّع ما يثبت نفسه بالأرقام."],
            ].map(([n, t, d]) => (
              <div key={n} className="rounded-2xl border border-line bg-panel/40 p-4">
                <span className="text-xs text-accent">{n}</span>
                <p className="mt-3 text-sm font-semibold text-white">{t}</p>
                <p className="mt-2 text-[11px] leading-5 text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
