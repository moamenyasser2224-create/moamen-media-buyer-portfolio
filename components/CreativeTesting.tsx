"use client";
import { motion } from "framer-motion";
import { creativeTesting } from "@/data/site-data";

export default function CreativeTesting() {
  return (
    <section className="section-pad border-t border-line">
      <div className="container-x">
        <p className="eyebrow">كيف أختبر الإعلانات</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold md:text-4xl">How I Test Creatives</h2>
        <p className="mt-4 max-w-2xl text-muted">{creativeTesting.intro}</p>

        <div className="mt-10 space-y-8">
          {creativeTesting.comparisons.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              <CompareCard label={c.labelA} metrics={c.metricsA} />
              <CompareCard label={c.labelB} metrics={c.metricsB} highlight />
              <div className="card p-5 md:col-span-2">
                <p className="text-xs font-semibold text-accent">القرار</p>
                <p className="mt-2 text-sm text-muted">{c.decision}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted">{creativeTesting.note}</p>
      </div>
    </section>
  );
}

function CompareCard({ label, metrics, highlight }: { label: string; metrics: Record<string, string>; highlight?: boolean }) {
  return (
    <div className={`card p-5 ${highlight ? "border-accent/30" : ""}`}>
      <p className="font-display text-sm font-semibold">{label}</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {Object.entries(metrics).map(([k, v]) => (
          <div key={k}>
            <p className="font-display text-lg font-bold text-accent">{v}</p>
            <p className="text-[10px] uppercase text-muted">{k}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
