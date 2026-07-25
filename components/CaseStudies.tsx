import { caseStudies } from "@/data/site-data";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-pad border-t border-line">
      <div className="container-x">
        <p className="eyebrow">دراسات حالة</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold md:text-4xl">
          نتائج حقيقية من حسابات إعلانية فعلية
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          كل دراسة حالة أدناه مبنية على بيانات فعلية من حسابات إعلانات ولوحات مبيعات — أسماء بعض
          العملاء مخفاة للخصوصية، ويمكن استبدالها ببياناتك الفعلية في أي وقت.
        </p>

        <div className="mt-12 space-y-8">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} cs={cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
