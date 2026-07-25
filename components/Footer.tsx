import { profile } from "@/data/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-xs text-muted md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name.startsWith("[") ? "Your Name" : profile.name}. All rights reserved.</p>
        <p>Built with Next.js · TypeScript · Tailwind CSS</p>
      </div>
    </footer>
  );
}
