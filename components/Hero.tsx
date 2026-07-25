"use client";
import { motion } from "framer-motion";
import { profile, heroMetrics } from "@/data/site-data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:48px_48px] opacity-30 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />

      <div className="container-x relative">
        <div className="mb-8 flex items-center gap-3 text-xs text-muted">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(201,255,61,0.8)]" />
          Available for selected projects
          <span className="h-px w-10 bg-line" />
          {profile.title}
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow mb-5">
              {profile.title}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="font-display text-5xl font-bold leading-[0.98] tracking-[-0.04em] md:text-7xl"
            >
              {profile.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="mt-6 max-w-3xl font-display text-3xl font-semibold leading-tight text-white md:text-5xl"
            >
              I build, test and scale <span className="text-accent">paid acquisition</span> systems.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg"
            >
              {profile.subHeadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary">Let&apos;s Work Together <span aria-hidden>↗</span></a>
              <a href="#case-studies" className="btn-secondary">View Case Studies</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32 }}
              className="mt-12 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {heroMetrics.map((m, i) => (
                <div key={i} className="metric-hero card p-5">
                  <p className="font-display text-3xl font-bold tracking-tight text-accent">
                    {m.value}<span className="ms-1 text-xs font-medium text-muted">{m.unit}</span>
                  </p>
                  <p className="mt-2 text-xs font-semibold text-white">{m.label}</p>
                  <p className="mt-2 text-[10px] leading-5 text-muted">{m.context}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-accent/5 blur-2xl" />
            <div className="card relative overflow-hidden p-5 md:p-7">
              <div className="flex items-center justify-between border-b border-line pb-5">
                <div>
                  <p className="font-display text-sm font-semibold">Performance Snapshot</p>
                  <p className="mt-1 text-[10px] text-muted">Verified data only · context shown per metric</p>
                </div>
                <span className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-[10px] font-semibold text-accent">
                  CASE STUDY
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <DashboardStat label="Revenue Managed" value="785K+ EGP" />
                <DashboardStat label="Net Profit" value="685K+ EGP" />
                <DashboardStat label="TikTok Conversions" value="10,957" />
                <DashboardStat label="Cost / Conversion" value="4.85 EGP" />
              </div>

              <div className="mt-5 rounded-2xl border border-line bg-black/25 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-white">What I optimize for</p>
                  <span className="text-[10px] text-accent">BUSINESS OUTCOME</span>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {["Creative", "Efficiency", "Scale"].map((x) => (
                    <div key={x} className="rounded-xl border border-line bg-panel/70 p-3 text-center">
                      <div className="mx-auto mb-2 h-1.5 w-8 rounded-full bg-accent" />
                      <p className="text-[11px] font-semibold">{x}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-line p-4">
                  <p className="text-[10px] uppercase tracking-wider text-muted">Platforms</p>
                  <p className="mt-2 font-display text-sm font-semibold">Meta + TikTok</p>
                </div>
                <div className="rounded-xl border border-line p-4">
                  <p className="text-[10px] uppercase tracking-wider text-muted">Approach</p>
                  <p className="mt-2 font-display text-sm font-semibold">Test → Optimize → Scale</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-line bg-black/25 p-4">
      <p className="font-display text-xl font-bold text-white md:text-2xl">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wide text-accent">{label}</p>
    </div>
  );
}
