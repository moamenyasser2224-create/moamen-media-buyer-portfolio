import { platforms } from "@/data/site-data";

export default function Platforms() {
  return (
    <section className="border-y border-line bg-panel/40 py-10">
      <div className="container-x">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {platforms.map((p, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="font-display text-sm font-semibold text-white md:text-base">{p.name}</span>
              <span className="text-[11px] text-muted">{p.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
