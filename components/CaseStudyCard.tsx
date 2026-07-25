"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

type Metrics = Record<string, string | undefined>;

interface ProofItem {
  type: string;
  label: string;
  image: string | null;
  available: boolean;
}

interface Props {
  cs: {
    id: string;
    title: string;
    client: string;
    industry: string;
    duration: string;
    sections: Record<string, string>;
    metrics: Metrics;
    beforeAfter: { before: Record<string, string>; after: Record<string, string> } | null;
    proofOfWork: ProofItem[];
    learnings: string[];
    chartData: any[];
  };
}

const metricLabels: Record<string, string> = {
  spend: "Ad Spend", revenue: "Revenue", netProfit: "Net Profit", visits: "Visits", orders: "Orders",
  conversionRate: "Conversion Rate", avgOrderValue: "Avg Order Value", missedRate: "Missed Rate",
  roas: "ROAS", cpa: "CPA", impressions: "Impressions", clicks: "Clicks", ctr: "CTR", cpc: "CPC",
  cpm: "CPM", conversions: "Conversions",
};

const sectionOrder = [
  ["overview", "01", "Overview"], ["challenge", "02", "Challenge"], ["objective", "03", "Objective"],
  ["strategy", "04", "Strategy"], ["campaignStructure", "05", "Campaign Structure"],
  ["targeting", "06", "Targeting"], ["creativeStrategy", "07", "Creative Strategy"],
  ["testing", "08", "Testing"], ["optimization", "09", "Optimization"], ["results", "10", "Results"],
];

const isReal = (value?: string) => Boolean(value && !value.startsWith("["));

export default function CaseStudyCard({ cs }: Props) {
  const [open, setOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const metricEntries = Object.entries(cs.metrics).filter(([, v]) => isReal(v));
  const barKey = cs.chartData[0]?.revenue !== undefined ? "revenue" : cs.chartData[0]?.spend !== undefined ? "spend" : null;
  const barKey2 = cs.chartData[0]?.profit !== undefined ? "profit" : cs.chartData[0]?.conversions !== undefined ? "conversions" : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="card overflow-hidden"
    >
      <div className="p-6 md:p-9">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs text-accent">{cs.industry}</span>
          <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">{cs.client}</span>
          <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">{cs.duration}</span>
        </div>

        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">{cs.title}</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{cs.sections.objective}</p>
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Case Study</span>
        </div>

        {metricEntries.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {metricEntries.map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-line bg-black/25 p-4">
                <p className="font-display text-xl font-bold text-white">{v}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wide text-accent">{metricLabels[k] ?? k}</p>
              </div>
            ))}
          </div>
        )}

        {cs.chartData?.length > 0 && barKey && (
          <div className="mt-7 rounded-2xl border border-line bg-black/25 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold">Performance trend</p>
              <span className="text-[10px] text-muted">Source data from this case study</span>
            </div>
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cs.chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#232327" />
                  <XAxis dataKey="period" stroke="#9A9AA2" fontSize={10} />
                  <YAxis stroke="#9A9AA2" fontSize={10} />
                  <Tooltip contentStyle={{ background: "#121214", border: "1px solid #232327", borderRadius: 12, fontSize: 12 }} />
                  <Bar dataKey={barKey} fill="#C9FF3D" radius={[6, 6, 0, 0]} />
                  {barKey2 && <Bar dataKey={barKey2} fill="#7CF6D9" radius={[6, 6, 0, 0]} />}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {cs.beforeAfter && (
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              ["Before", cs.beforeAfter.before, false],
              ["After", cs.beforeAfter.after, true],
            ].map(([label, values, highlight]) => (
              <div key={String(label)} className={`rounded-2xl border p-5 ${highlight ? "border-accent/30 bg-accent/5" : "border-line bg-black/25"}`}>
                <p className={`text-xs ${highlight ? "text-accent" : "text-muted"}`}>{label}</p>
                {Object.entries(values as Record<string, string>).map(([k, v]) => (
                  <p key={k} className="mt-2 font-display text-lg font-bold">{v} <span className="text-xs font-normal text-muted">{k}</span></p>
                ))}
              </div>
            ))}
          </div>
        )}

        <button onClick={() => setOpen((o) => !o)} className="btn-secondary mt-8 text-xs">
          {open ? "Hide full case study" : "Explore full case study"}
          <span aria-hidden>{open ? "↑" : "↓"}</span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }} className="overflow-hidden"
            >
              <div className="mt-7 grid gap-6 border-t border-line pt-7 md:grid-cols-2">
                {sectionOrder.map(([key, num, title]) => (
                  <div key={key}>
                    <h4 className="font-display flex items-center gap-2 text-sm font-semibold text-accent">
                      <span className="text-white/40">{num}</span>{title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-muted">{cs.sections[key]}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-line pt-7">
                <h4 className="font-display text-sm font-semibold text-accent">11 · Key Learnings</h4>
                <ul className="mt-4 grid gap-3 md:grid-cols-2">
                  {cs.learnings.map((l, i) => (
                    <li key={i} className="rounded-xl border border-line bg-black/20 p-4 text-sm leading-6 text-muted">
                      <span className="me-2 text-accent">—</span>{l}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 border-t border-line pt-7">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h4 className="font-display text-sm font-semibold text-accent">Proof of Work</h4>
                    <p className="mt-1 text-xs text-muted">Real screenshots make the case study stronger. Add them when available.</p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {cs.proofOfWork.map((p, i) => (
                    <button
                      key={i}
                      disabled={!p.available || !p.image}
                      onClick={() => p.available && p.image && setLightbox(p.image)}
                      className={`rounded-2xl border p-5 text-start transition-colors ${
                        p.available ? "border-accent/30 bg-accent/5 hover:border-accent" : "border-dashed border-line bg-black/20"
                      }`}
                    >
                      <span className="text-[10px] uppercase tracking-wide text-accent">{p.type}</span>
                      <p className="mt-2 text-xs leading-5 text-muted">{p.label}</p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5"
          >
            <img src={lightbox} alt="Proof of work" className="max-h-[90vh] max-w-full rounded-2xl border border-line" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
