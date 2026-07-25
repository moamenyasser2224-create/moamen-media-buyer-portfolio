# TIGER ELITE — Media Buyer Portfolio

موقع Portfolio احترافي لـ Media Buyer / Performance Marketer، مبني بـ Next.js 14 + TypeScript + Tailwind CSS + Framer Motion + Recharts.

## 1. التشغيل محليًا

```bash
npm install
npm run dev
```

افتح: http://localhost:3000

## 2. البناء للإنتاج (Production Build)

```bash
npm run build
npm run start
```

تم اختبار هذا البناء بنجاح (Build ناجح، بدون أخطاء) وقت تسليم المشروع.

## 3. طريقة تعديل المحتوى (بدون لمس التصميم)

كل بيانات الموقع (الاسم، الأرقام، دراسات الحالة، المهارات، الخدمات، بيانات التواصل...)
موجودة في ملف واحد فقط:

```
data/site-data.ts
```

أي حقل مكتوب بداخله `[ADD YOUR DATA]` هو حقل ينتظر بياناتك الحقيقية — استبدله وسيتحدث
الموقع بالكامل تلقائيًا (لا حاجة لتعديل أي كومبوننت).

لإضافة دراسة حالة جديدة: انسخ عنصرًا من مصفوفة `caseStudies` في نفس الملف وعدّل قيمه.

## 4. النشر على الإنترنت (Deploy)

أسهل طريقة (مجانية) هي Vercel (الشركة المالكة لـ Next.js):

1. ارفع المشروع إلى مستودع GitHub.
2. ادخل إلى vercel.com → New Project → اختر المستودع.
3. اضغط Deploy — Vercel يتعرف على Next.js تلقائيًا ولا يحتاج أي إعدادات إضافية.

بدائل أخرى: Netlify، أو أي استضافة تدعم Node.js.

## 5. ملاحظة عن الخطوط (Fonts)

تم إعداد المشروع للعمل بدون اتصال إنترنت وقت البناء (لأن بيئة الإنشاء الحالية بلا اتصال
بـ Google Fonts)، لذلك يستخدم الموقع خطوط النظام (System UI). إن كانت بيئة التطوير أو
النشر لديك متصلة بالإنترنت، يمكنك تفعيل خطوط Google (Inter + Space Grotesk) عبر تعديل
`app/layout.tsx`:

```tsx
import { Inter, Space_Grotesk } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
// ثم أضف ${inter.variable} ${spaceGrotesk.variable} إلى className في <html>
```

## 6. هيكل المشروع

```
app/
  layout.tsx        ← SEO + العنوان + الوصف
  page.tsx           ← تجميع كل الأقسام بالترتيب
  globals.css         ← الألوان والثيم (Dark Premium)
components/           ← كل قسم من الموقع كومبوننت منفصل
data/site-data.ts      ← كل المحتوى القابل للتعديل (المصدر الوحيد للحقيقة)
```

## 7. البيانات المستخدمة حاليًا

بعض الأرقام في قسم "الأداء" ودراسات الحالة مأخوذة فعليًا من لقطات الشاشة التي
رفعتها (Facebook/Meta Ads Manager، TikTok Ads Manager، لوحة Easy Orders). أي حقل
غير متوفر تم تركه كـ `[ADD YOUR DATA]` كما طلبت، دون اختراع أي رقم أو اسم عميل.


## Final Elite Upgrade Applied

This version was upgraded directly on the existing project:
- Stronger, conversion-focused Hero section.
- Cleaner performance snapshot with no fake "LIVE DATA" label.
- Hero metrics reduced to three key proof points.
- Performance metrics now hide unverified placeholder values.
- Case studies redesigned for clearer storytelling and proof-of-work areas.
- Empty placeholder case study removed from the live portfolio.
- Creative showcase supports real local images without pretending placeholders are real work.
- About section upgraded with personal-brand positioning and photo support.
- Proof-of-work slots are clearly marked until real screenshots are added.
- Mobile and desktop layouts were tightened across key sections.

### Add your real proof
Place real campaign assets in:
- `/public/creatives/`
- `/public/proof/`
- `/public/profile.jpg`

Then update `data/site-data.ts` with the real paths and verified context.

### Important
The project was edited directly, but a full production build could not be completed in this environment because the Next.js dependency was not available locally and package installation timed out. Run `npm install` and then `npm run build` in your own environment before deployment.
