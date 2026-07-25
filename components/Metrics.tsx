"use client";
import { motion } from "framer-motion";
import { keyMetrics } from "@/data/site-data";

export default function Metrics() {
  return (
    <section id="metrics" className="section-pad border-t border-line">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Performance Proof</p>
            <h2 className="font-display mt-3 max-w-3xl text-3xl font-bold md:text-5xl">
              Numbers with context. Decisions with a reason.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted">
            كل رقم معروض هنا مرتبط بالمصدر والمنصة والفترة المتاحة. لا توجد نتائج مصطنعة أو بيانات تجريبية مقدمة على أنها حقيقية.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {keyMetrics.map((m, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="card group relative overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <p className="font-display text-4xl font-bold tracking-tight text-white">
                {m.value}
                <span className="ms-1 text-sm font-medium text-accent">{m.unit}</span>
              </p>
              <p className="mt-3 text-sm font-semibold text-white/90">{m.label}</p>

              <div className="mt-5 space-y-2 border-t border-line pt-4 text-[11px] leading-5 text-muted">
                <p><span className="text-white/60">Source</span> · {m.source}</p>
                <p><span className="text-white/60">Period</span> · {m.period}</p>
                <p><span className="text-white/60">Platform</span> · {m.platform}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
