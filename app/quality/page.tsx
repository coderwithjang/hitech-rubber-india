import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { 
  Wrench, 
  FlaskConical, 
  Ruler, 
  ShieldCheck, 
  Clock, 
  Factory,
  PenTool,
  CheckCircle2,
  Settings,
  Shield
} from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Quality Assurance & Manufacturing | Rubber Moulded Factory In India",
  description: "Explore our in-house tool room, laboratory testing, and 38,000 sq ft manufacturing infrastructure for compression rubber moulded parts in Mohali.",
  keywords: "rubber moulded factory in India, custom rubber moulded parts, rubber flat washers, compression rubber moulded parts, rubber gaskets",
};

export default function QualityPage() {
  const pillars = [
    { icon: <FlaskConical className="w-10 h-10 text-primary mb-4" />, title: "Compound Consistency", desc: "Rigorous batch-to-batch mixing controls ensuring exact material properties for custom silicone washers and rubber grommets." },
    { icon: <Ruler className="w-10 h-10 text-primary mb-4" />, title: "Dimensional Accuracy", desc: "Precision tooling yielding flash-free, exact-tolerance lathe cut rubber washers and moulded parts." },
    { icon: <ShieldCheck className="w-10 h-10 text-primary mb-4" />, title: "Material Verification", desc: "Pre-production lab testing of all elastomers to guarantee chemical and thermal resilience for rubber orings." },
    { icon: <Settings className="w-10 h-10 text-primary mb-4" />, title: "Process Discipline", desc: "Standard operating procedures strictly enforced across formulation, moulding, and finishing of compression rubber moulded parts." },
    { icon: <Clock className="w-10 h-10 text-primary mb-4" />, title: "Timely Inspection & Dispatch", desc: "Streamlined QA workflows preventing bottlenecks and enabling rapid global shipping." }
  ];

  const infrastructure = [
    { icon: <Factory className="w-6 h-6 shrink-0 text-primary mt-1 mr-4" />, text: "38,000 sq. ft. manufacturing factory in Mohali, India engineered for high-volume scale." },
    { icon: <PenTool className="w-6 h-6 shrink-0 text-primary mt-1 mr-4" />, text: "Dedicated in-house tool room for faster mould development and modifications." },
    { icon: <FlaskConical className="w-6 h-6 shrink-0 text-primary mt-1 mr-4" />, text: "Advanced laboratory for testing and validating diverse custom rubber moulded parts." },
    { icon: <CheckCircle2 className="w-6 h-6 shrink-0 text-primary mt-1 mr-4" />, text: "Expansive capability for rubber washers, gaskets, grommets, O-rings, rubber spacers, and silicone products." }
  ];

  return (
    <>
      <Header />
      <main className="flex-grow bg-background text-charcoal pt-24">
        
        {/* 1 & 2. Hero & Intro Section */}
        <section className="relative py-24 bg-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/Images/DSC_8941.JPG" alt="Testing Lab for custom rubber moulded parts" fill className="object-cover" priority />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <AnimatedSection>
              <div className="flex justify-center mb-6">
                <span className="bg-primary/20 p-4 rounded-full border border-primary/30">
                  <ShieldCheck className="w-12 h-12 text-primary-light" />
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
                Quality, Tooling, and Testing Built In-House
              </h1>
              <div className="w-24 h-1.5 bg-primary mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                By maintaining a deeply integrated production environment—including an in-house tool room and a dedicated 
                laboratory for testing rubber compounds—we eliminate external dependencies to guarantee uncompromising quality control for all our <Link href="/products" className="text-primary-light hover:underline">rubber flat washers</Link> and moulded output.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* 3. Quality Pillars */}
        <section className="py-24 bg-surface border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <AnimatedSection className="text-center mb-16">
               <h2 className="font-display text-4xl font-bold text-charcoal mb-4">The Pillars of Our Quality Assurance</h2>
               <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {pillars.map((pillar, idx) => (
                <AnimatedSection 
                  key={idx} 
                  delay={idx * 0.1} 
                  className={`bg-white p-8 border border-gray-100 shadow-sm hover:shadow-premium transition-shadow ${idx === 4 ? "lg:col-start-2" : ""}`}
                >
                  <div className="bg-primary/5 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">{pillar.title}</h3>
                  <p className="text-text-muted leading-relaxed">{pillar.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Infrastructure */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection className="relative h-[400px] md:h-[500px] w-full shadow-2xl">
                 <Image src="/Images/DSC_9294.JPG" alt="Rubber Factory Floor Infrastructure" fill className="object-cover" />
              </AnimatedSection>
              
              <AnimatedSection>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-8 leading-tight">
                  Comprehensive Manufacturing Infrastructure
                </h2>
                <div className="space-y-6">
                  {infrastructure.map((item, idx) => (
                    <div key={idx} className="flex p-4 bg-surface/80 border border-gray-100 backdrop-blur-sm rounded-lg items-center shadow-sm">
                      {item.icon}
                      <p className="text-lg text-text-muted font-medium leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* 5. Buyer Reassurance */}
        <section className="relative py-24 bg-charcoal text-white text-center overflow-hidden">
          <div className="absolute inset-0 opacity-15">
             <Image src="/Images/DSC_9331.JPG" alt="Rubber quality checking" fill className="object-cover" />
          </div>
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
             <AnimatedSection>
                <Shield className="w-16 h-16 text-primary-light mx-auto mb-6 opacity-90" />
                <h2 className="font-display text-4xl font-bold mb-6">Engineered for Quality-Conscious Buyers</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                <p className="text-xl text-gray-300 font-light leading-relaxed mb-6">
                   Our entire operational framework is deliberately designed to be highly suitable for <strong>OEM, industrial, <Link href="/export" className="text-primary-light hover:underline">export</Link>, and repeat production orders</strong>. 
                </p>
                <p className="text-gray-400 text-lg">
                   When precision is non-negotiable, Tier-1 buyers trust Hi-Tech Rubber Industries to deliver consistency at scale for everything from manhole rubber washers to custom silicone units.
                </p>
             </AnimatedSection>
          </div>
        </section>

        {/* 6. Contact CTA */}
        <section className="py-24 bg-primary text-center">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-white">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-sm">Verify Our Capabilities</h2>
              <p className="text-lg md:text-xl text-primary-light font-medium mb-10 drop-shadow">
                Invite us to quote on your current RFQs or share your technical drawings. Experience our in-house tooling speed firsthand.
              </p>
              <div className="flex justify-center">
                <Link href="/contact" className="bg-charcoal hover:bg-charcoal-dark text-white px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all shadow-xl inline-flex items-center">
                  Submit RFQ / Drawings
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
