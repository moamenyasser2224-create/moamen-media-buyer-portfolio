"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { creatives } from "@/data/site-data";

export default function CreativeShowcase() {
  const [active, setActive] = useState<number | null>(null);

  const activeCreative =
    active !== null ? creatives[active] : null;

  return (
    <section
      id="creatives"
      className="section-pad border-t border-line"
    >
      <div className="container-x">
        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">
              Creative Work
            </p>

            <h2 className="font-display mt-3 max-w-3xl text-3xl font-bold md:text-5xl">
              Creative is not decoration. It&apos;s a testing variable.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted">
            عيّنات من زوايا إعلانية مختلفة، مع توضيح الـHook والهدف والنتيجة عندما تكون البيانات متاحة.
          </p>
        </div>

        {/* =========================
            CREATIVE GRID
        ========================== */}

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {creatives.map((creative, index) => {
            const imageUrl =
              typeof creative.image === "string"
                ? creative.image
                : "";

            const hasRealImage =
              imageUrl.length > 0 &&
              !imageUrl.startsWith("[");

            return (
              <button
                type="button"
                key={index}
                onClick={() => setActive(index)}
                className="card group overflow-hidden text-start transition-all hover:-translate-y-1 hover:border-accent/40"
              >
                {/* IMAGE */}

                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden border-b border-line bg-black/40">
                  {hasRealImage ? (
                    <Image
                      src={imageUrl}
                      alt={creative.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="p-8 text-center">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
                        {creative.type}
                      </span>

                      <p className="mt-3 text-xs leading-5 text-muted">
                        Add the real creative image here
                      </p>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                {/* CARD CONTENT */}

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-accent">
                      {creative.platform}
                    </span>

                    <span className="text-muted">
                      · {creative.type}
                    </span>
                  </div>

                  <h3 className="font-display mt-2 font-semibold">
                    {creative.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================
          CREATIVE MODAL
      ========================== */}

      <AnimatePresence>
        {activeCreative && (
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
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
          >
            <motion.div
              initial={{
                scale: 0.96,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.96,
                opacity: 0,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="card grid max-h-[90vh] w-full max-w-4xl grid-cols-1 overflow-hidden md:grid-cols-2"
            >
              {/* MODAL IMAGE */}

              <div className="relative flex min-h-[320px] items-center justify-center bg-black/40">
                {typeof activeCreative.image ===
                  "string" &&
                activeCreative.image.length > 0 &&
                !activeCreative.image.startsWith(
                  "["
                ) ? (
                  <Image
                    src={activeCreative.image}
                    alt={activeCreative.title}
                    fill
                    className="object-contain"
                    sizes="50vw"
                  />
                ) : (
                  <div className="p-8 text-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
                      {activeCreative.type}
                    </span>

                    <p className="mt-3 text-sm text-muted">
                      Add the real creative image
                    </p>
                  </div>
                )}
              </div>

              {/* MODAL DETAILS */}

              <div className="overflow-y-auto p-7">
                <span className="text-xs text-accent">
                  {activeCreative.platform} ·{" "}
                  {activeCreative.type}
                </span>

                <h3 className="font-display mt-2 text-2xl font-bold">
                  {activeCreative.title}
                </h3>

                <div className="mt-7 space-y-5 text-sm">
                  <Detail
                    label="Hook"
                    value={activeCreative.hook}
                  />

                  <Detail
                    label="Angle"
                    value={activeCreative.angle}
                  />

                  <Detail
                    label="Objective"
                    value={
                      activeCreative.objective
                    }
                  />

                  <Detail
                    label="Result"
                    value={activeCreative.result}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="btn-secondary mt-8 text-xs"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* =========================
   DETAIL COMPONENT
========================== */

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <p>
      <span className="font-semibold text-white">
        {label}
      </span>

      <span className="mx-2 text-line">
        /
      </span>

      <span className="text-muted">
        {value}
      </span>
    </p>
  );
}
