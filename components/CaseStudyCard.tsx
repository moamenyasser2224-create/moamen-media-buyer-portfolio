"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type PrimitiveValue = string | number | boolean | null | undefined;

type Metrics = Record<string, PrimitiveValue>;

interface ProofItem {
  type: string;
  label: string;
  image: string | null;
  available: boolean;
}

interface BeforeAfterValues {
  [key: string]: PrimitiveValue;
}

interface BeforeAfter {
  before: BeforeAfterValues;
  after: BeforeAfterValues;
}

interface ChartItem {
  period?: string;
  revenue?: number;
  spend?: number;
  profit?: number;
  conversions?: number;
  [key: string]: string | number | undefined;
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
    beforeAfter: BeforeAfter | null;
    proofOfWork: ProofItem[];
    learnings: string[];
    chartData: ChartItem[];
  };
}

const metricLabels: Record<string, string> = {
  spend: "Ad Spend",
  revenue: "Revenue",
  netProfit: "Net Profit",
  visits: "Visits",
  orders: "Orders",
  conversionRate: "Conversion Rate",
  avgOrderValue: "Avg Order Value",
  missedRate: "Missed Rate",
  roas: "ROAS",
  cpa: "CPA",
  impressions: "Impressions",
  clicks: "Clicks",
  ctr: "CTR",
  cpc: "CPC",
  cpm: "CPM",
  conversions: "Conversions",
};

const sectionOrder: [string, string, string][] = [
  ["overview", "01", "Overview"],
  ["challenge", "02", "Challenge"],
  ["objective", "03", "Objective"],
  ["strategy", "04", "Strategy"],
  ["campaignStructure", "05", "Campaign Structure"],
  ["targeting", "06", "Targeting"],
  ["creativeStrategy", "07", "Creative Strategy"],
  ["testing", "08", "Testing"],
  ["optimization", "09", "Optimization"],
  ["results", "10", "Results"],
];

const isReal = (value: PrimitiveValue): boolean => {
  if (value === null || value === undefined) {
    return false;
  }

  if (typeof value === "string") {
    const cleanValue = value.trim();

    return (
      cleanValue.length > 0 &&
      !cleanValue.startsWith("[")
    );
  }

  return true;
};

const formatValue = (
  value: PrimitiveValue
): string => {
  if (value === null || value === undefined) {
    return "—";
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  return String(value);
};

export default function CaseStudyCard({
  cs,
}: Props) {
  const [open, setOpen] = useState(false);
  const [lightbox, setLightbox] =
    useState<string | null>(null);

  const metricEntries = Object.entries(
    cs.metrics ?? {}
  ).filter(([, value]) => isReal(value));

  const chartData = Array.isArray(cs.chartData)
    ? cs.chartData
    : [];

  const barKey =
    chartData.length > 0 &&
    chartData[0]?.revenue !== undefined
      ? "revenue"
      : chartData.length > 0 &&
          chartData[0]?.spend !== undefined
        ? "spend"
        : null;

  const barKey2 =
    chartData.length > 0 &&
    chartData[0]?.profit !== undefined
      ? "profit"
      : chartData.length > 0 &&
          chartData[0]?.conversions !== undefined
        ? "conversions"
        : null;

  const sections = cs.sections ?? {};

  const proofOfWork = Array.isArray(
    cs.proofOfWork
  )
    ? cs.proofOfWork
    : [];

  const learnings = Array.isArray(cs.learnings)
    ? cs.learnings
    : [];

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="card overflow-hidden"
    >
      <div className="p-6 md:p-9">

        {/* =========================
            HEADER TAGS
        ========================== */}

        <div className="flex flex-wrap items-center gap-2">
          {cs.industry && (
            <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs text-accent">
              {cs.industry}
            </span>
          )}

          {cs.client && (
            <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
              {cs.client}
            </span>
          )}

          {cs.duration && (
            <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
              {cs.duration}
            </span>
          )}
        </div>

        {/* =========================
            TITLE
        ========================== */}

        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              {cs.title}
            </h3>

            {sections.objective && (
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                {sections.objective}
              </p>
            )}
          </div>

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Case Study
          </span>
        </div>

        {/* =========================
            METRICS
        ========================== */}

        {metricEntries.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {metricEntries.map(
              ([key, value]) => (
                <div
                  key={key}
                  className="rounded-2xl border border-line bg-black/25 p-4"
                >
                  <p className="font-display text-xl font-bold text-white">
                    {formatValue(value)}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wide text-accent">
                    {metricLabels[key] ?? key}
                  </p>
                </div>
              )
            )}
          </div>
        )}

        {/* =========================
            PERFORMANCE CHART
        ========================== */}

        {chartData.length > 0 &&
          barKey && (
            <div className="mt-7 rounded-2xl border border-line bg-black/25 p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold">
                  Performance trend
                </p>

                <span className="text-[10px] text-muted">
                  Source data from this case study
                </span>
              </div>

              <div className="h-56 w-full">
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >
                  <BarChart data={chartData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#232327"
                    />

                    <XAxis
                      dataKey="period"
                      stroke="#9A9AA2"
                      fontSize={10}
                    />

                    <YAxis
                      stroke="#9A9AA2"
                      fontSize={10}
                    />

                    <Tooltip
                      contentStyle={{
                        background: "#121214",
                        border:
                          "1px solid #232327",
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                    />

                    <Bar
                      dataKey={barKey}
                      fill="#C9FF3D"
                      radius={[
                        6,
                        6,
                        0,
                        0,
                      ]}
                    />

                    {barKey2 && (
                      <Bar
                        dataKey={barKey2}
                        fill="#7CF6D9"
                        radius={[
                          6,
                          6,
                          0,
                          0,
                        ]}
                      />
                    )}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

        {/* =========================
            BEFORE / AFTER
        ========================== */}

        {cs.beforeAfter && (
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

            {/* BEFORE */}

            <div className="rounded-2xl border border-line bg-black/25 p-5">
              <p className="text-xs text-muted">
                Before
              </p>

              {Object.entries(
                cs.beforeAfter.before ?? {}
              ).map(
                ([key, value]) => (
                  <p
                    key={key}
                    className="mt-2 font-display text-lg font-bold"
                  >
                    {formatValue(value)}

                    <span className="text-xs font-normal text-muted">
                      {" "}
                      {key}
                    </span>
                  </p>
                )
              )}
            </div>

            {/* AFTER */}

            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
              <p className="text-xs text-accent">
                After
              </p>

              {Object.entries(
                cs.beforeAfter.after ?? {}
              ).map(
                ([key, value]) => (
                  <p
                    key={key}
                    className="mt-2 font-display text-lg font-bold"
                  >
                    {formatValue(value)}

                    <span className="text-xs font-normal text-muted">
                      {" "}
                      {key}
                    </span>
                  </p>
                )
              )}
            </div>

          </div>
        )}

        {/* =========================
            EXPAND BUTTON
        ========================== */}

        <button
          type="button"
          onClick={() =>
            setOpen(
              (current) => !current
            )
          }
          className="btn-secondary mt-8 text-xs"
        >
          {open
            ? "Hide full case study"
            : "Explore full case study"}

          <span aria-hidden="true">
            {open ? "↑" : "↓"}
          </span>
        </button>

        {/* =========================
            FULL CASE STUDY
        ========================== */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="overflow-hidden"
            >

              {/* CASE STUDY SECTIONS */}

              <div className="mt-7 grid gap-6 border-t border-line pt-7 md:grid-cols-2">
                {sectionOrder.map(
                  ([
                    key,
                    number,
                    title,
                  ]) => {
                    const content =
                      sections[key];

                    if (
                      !content ||
                      content.startsWith("[")
                    ) {
                      return null;
                    }

                    return (
                      <div key={key}>
                        <h4 className="font-display flex items-center gap-2 text-sm font-semibold text-accent">
                          <span className="text-white/40">
                            {number}
                          </span>

                          {title}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-muted">
                          {content}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>

              {/* KEY LEARNINGS */}

              {learnings.length > 0 && (
                <div className="mt-7 border-t border-line pt-7">
                  <h4 className="font-display text-sm font-semibold text-accent">
                    11 · Key Learnings
                  </h4>

                  <ul className="mt-4 grid gap-3 md:grid-cols-2">
                    {learnings.map(
                      (
                        learning,
                        index
                      ) => (
                        <li
                          key={`${learning}-${index}`}
                          className="rounded-xl border border-line bg-black/20 p-4 text-sm leading-6 text-muted"
                        >
                          <span className="me-2 text-accent">
                            —
                          </span>

                          {learning}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {/* PROOF OF WORK */}

              {proofOfWork.length > 0 && (
                <div className="mt-7 border-t border-line pt-7">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h4 className="font-display text-sm font-semibold text-accent">
                        Proof of Work
                      </h4>

                      <p className="mt-1 text-xs text-muted">
                        Real screenshots make the case study stronger. Add them when available.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {proofOfWork.map(
                      (
                        proof,
                        index
                      ) => {
                        const canOpen =
                          Boolean(
                            proof.available &&
                              proof.image
                          );

                        return (
                          <button
                            type="button"
                            key={`${proof.type}-${index}`}
                            disabled={
                              !canOpen
                            }
                            onClick={() => {
                              if (
                                proof.available &&
                                proof.image
                              ) {
                                setLightbox(
                                  proof.image
                                );
                              }
                            }}
                            className={`rounded-2xl border p-5 text-start transition-colors ${
                              canOpen
                                ? "border-accent/30 bg-accent/5 hover:border-accent"
                                : "cursor-not-allowed border-dashed border-line bg-black/20"
                            }`}
                          >
                            <span className="text-[10px] uppercase tracking-wide text-accent">
                              {proof.type}
                            </span>

                            <p className="mt-2 text-xs leading-5 text-muted">
                              {proof.label}
                            </p>

                            {canOpen && (
                              <span className="mt-3 inline-block text-[10px] font-semibold uppercase tracking-wide text-accent">
                                View proof →
                              </span>
                            )}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>
              )}

            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* =========================
          LIGHTBOX
      ========================== */}

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setLightbox(null)
            }
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5"
          >
            <img
              src={lightbox}
              alt="Proof of work"
              onClick={(event) =>
                event.stopPropagation()
              }
              className="max-h-[90vh] max-w-full rounded-2xl border border-line object-contain"
            />

            <button
              type="button"
              aria-label="Close image"
              onClick={() =>
                setLightbox(null)
              }
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-xl text-white transition hover:bg-white/10"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.article>
  );
}
