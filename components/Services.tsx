"use client";
import { motion } from "framer-motion";
import { services } from "@/data/site-data";

export default function Services() {
  return (
    <section id="services" className="section-pad border-t border-line">
      <div className="container-x">
        <p className="eyebrow">ماذا أقدّم</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold md:text-4xl">الخدمات</h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              className="card group p-6 transition-colors hover:border-accent/60"
            >
              <span className="font-display text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
