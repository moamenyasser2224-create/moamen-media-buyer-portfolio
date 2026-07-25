"use client";
import { motion } from "framer-motion";
import { process } from "@/data/site-data";

export default function Process() {
  return (
    <section id="process" className="section-pad border-t border-line">
      <div className="container-x">
        <p className="eyebrow">طريقة العمل</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold md:text-4xl">My Process</h2>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="card p-5"
            >
              <span className="font-display text-2xl font-bold text-accent">{p.step}</span>
              <h3 className="font-display mt-2 text-sm font-semibold">{p.title}</h3>
              <p className="mt-1 text-xs text-muted">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
