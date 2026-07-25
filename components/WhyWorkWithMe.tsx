"use client";
import { motion } from "framer-motion";
import { whyWorkWithMe } from "@/data/site-data";

export default function WhyWorkWithMe() {
  return (
    <section className="section-pad border-t border-line">
      <div className="container-x">
        <p className="eyebrow">لماذا أنا</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Why Work With Me</h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyWorkWithMe.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="card p-6"
            >
              <span className="font-display text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-3 text-base font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
