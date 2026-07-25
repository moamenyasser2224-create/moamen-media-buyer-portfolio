import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import Metrics from "@/components/Metrics";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import CreativeShowcase from "@/components/CreativeShowcase";
import CreativeTesting from "@/components/CreativeTesting";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-base">
      <Navbar />
      <Hero />
      <Platforms />
      <Metrics />
      <WhyWorkWithMe />
      <About />
      <Services />
      <CaseStudies />
      <CreativeShowcase />
      <CreativeTesting />
      <Process />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
