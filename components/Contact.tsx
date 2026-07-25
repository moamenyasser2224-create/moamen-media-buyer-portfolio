import { profile } from "@/data/site-data";

function isReal(v?: string) {
  return v && !v.startsWith("[");
}

export default function Contact() {
  const links = [
    { label: "WhatsApp", value: profile.whatsapp, href: isReal(profile.whatsapp) ? `https://wa.me/${profile.whatsapp}` : "#" },
    { label: "Email", value: profile.email, href: isReal(profile.email) ? `mailto:${profile.email}` : "#" },
    { label: "LinkedIn", value: profile.linkedin, href: profile.linkedin },
    { label: "Facebook", value: profile.facebook, href: profile.facebook },
    { label: "Instagram", value: profile.instagram, href: profile.instagram },
  ];

  return (
    <section id="contact" className="section-pad border-t border-line">
      <div className="container-x">
        <div className="card relative overflow-hidden p-10 text-center md:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
          <p className="eyebrow">تواصل معي</p>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-bold md:text-5xl">
            Have a Product to Scale? Let&apos;s Talk.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            لديك متجر أو حملة تريد توسيعها؟ أرسل لي تفاصيل مشروعك وسأرد عليك بخطة أولية.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#case-studies" className="btn-secondary">View My Case Studies</a>
            {isReal(profile.whatsapp) && (
              <a href={`https://wa.me/${profile.whatsapp}`} className="btn-primary">
                Let&apos;s Work Together
              </a>
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-line pt-8">
            {links
              .filter((l) => isReal(l.value))
              .map((l, i) => (
                <a key={i} href={l.href} className="text-sm text-muted hover:text-accent">
                  {l.label}
                </a>
              ))}
            {links.every((l) => !isReal(l.value)) && (
              <p className="text-sm text-muted">[ADD YOUR DATA — أضف روابط التواصل في site-data.ts]</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
