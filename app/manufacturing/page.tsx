import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { Factory, Settings, FlaskConical, PenTool, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";
import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rubber Moulding Factory In India | Manufacturing Facility | Hi-Tech Rubber",
  description: "Examine our 38,000 sq. ft. precision rubber moulding factory located in Mohali, India. We feature an in-house tool room and compound testing laboratory.",
  keywords: "rubber moulded factory in India, custom rubber moulding, compression rubber moulded parts, Mohali, India, in-house lab, technical tool room",
};

export default function ManufacturingPage() {
  const facilityStats = [
    { icon: <Factory size={24} />, title: "38,000 Sq. Ft.", label: "Operational Area" },
    { icon: <Settings size={24} />, title: "30+ Years", label: "Technical Heritage" },
    { icon: <Globe2 size={24} />, title: "Tier-1 Partner", label: "Global Exporter" },
  ];

  return (
    <>
      <Header />
      <main className="flex-grow bg-background text-charcoal pt-[80px] md:pt-[120px]">
        
        {/* Page Hero */}
        <section className="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden bg-charcoal">
           <div className="absolute inset-0 opacity-30">
              <Image src="/Images/DSC_8951.JPG" alt="High-precision rubber moulding factory floor" fill className="object-cover" priority />
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent z-10"></div>
           <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-20 text-center max-w-4xl">
              <AnimatedSection>
                <div className="inline-flex items-center text-primary-light font-bold tracking-[0.2em] uppercase text-xs mb-6 px-3 py-1 bg-white/5 border border-white/10 rounded-sm">
                  Industrial Hub: Mohali, India
                </div>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight text-white drop-shadow-md">
                  Precision <span className="text-primary-light">Manufacturing</span> at Scale
                </h1>
                <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
                  Leveraging 38,000 square feet of high-capacity production infrastructure and three decades of technical expertise since 1990.
                </p>
              </AnimatedSection>
           </div>
        </section>

        {/* Facility Overview & Stats */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-center max-w-6xl mx-auto">
               {facilityStats.map((stat, i) => (
                 <AnimatedSection key={i} delay={i * 0.1} className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-16 h-16 bg-surface flex items-center justify-center text-primary border border-gray-100 shadow-sm shrink-0">
                      {stat.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-black text-2xl text-charcoal mb-1">{stat.title}</h3>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                    </div>
                 </AnimatedSection>
               ))}
            </div>
          </div>
        </section>

        {/* Deep Dive: Mohali Factory Highlights */}
        <section className="py-24 bg-surface">
           <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
              
              {/* Tool Room Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                 <AnimatedSection>
                    <div className="flex items-center text-primary font-bold text-sm tracking-widest uppercase mb-4">
                       <PenTool size={18} className="mr-2" /> Engineered Tooling
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-black text-charcoal mb-8 leading-tight">
                       In-House <br/><span className="text-primary">Tool Room</span> Facility
                    </h2>
                    <p className="text-lg text-text-muted leading-relaxed mb-8">
                       Our specialized tool room enables seamless transition from client blueprints to production-ready moulds. We don&apos;t just sell parts; we manufacture high-precision solutions directly from your <strong>CAD designs or physical samples</strong>. This internal control ensures faster prototyping and absolute dimensional fidelity.
                    </p>
                    <ul className="space-y-4">
                       {["Rapid Sampling", "Custom Mould Design", "Complex Geometries", "Short Lead Times"].map((item, i) => (
                         <li key={i} className="flex items-center text-charcoal font-bold">
                            <CheckCircle2 size={18} className="mr-3 text-primary" /> {item}
                         </li>
                       ))}
                    </ul>
                 </AnimatedSection>
                 <AnimatedSection delay={0.2} className="relative h-[450px] w-full shadow-premium overflow-hidden group">
                    <Image src="/Images/DSC_8968.JPG" alt="Advanced tool room setup in Mohali facility" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                 </AnimatedSection>
              </div>

              {/* Lab & Compounding Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <AnimatedSection className="order-2 lg:order-1 relative h-[450px] w-full shadow-premium overflow-hidden group">
                    <Image src="/Images/DSC_8966.JPG" alt="Rubber compound testing laboratory" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                 </AnimatedSection>
                 <AnimatedSection className="order-1 lg:order-2">
                    <div className="flex items-center text-primary font-bold text-sm tracking-widest uppercase mb-4">
                       <FlaskConical size={18} className="mr-2" /> Consistency First
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-black text-charcoal mb-8 leading-tight">
                       Technical <br/><span className="text-primary">Testing Laboratory</span>
                    </h2>
                    <p className="text-lg text-text-muted leading-relaxed mb-8">
                       Uniformity is our core metric. Every batch of rubber compound is routed through our in-house laboratory to verify physical performance characteristics, tensile strength, and material ageing prior to full production.
                    </p>
                    <Link href="/testing" className="inline-flex items-center font-bold text-primary hover:text-primary-dark transition-colors border-b-2 border-primary tracking-widest uppercase text-sm pb-1">
                       View Testing Equipment Details
                    </Link>
                 </AnimatedSection>
              </div>

           </div>
        </section>

        {/* Production Capability: Compression Moulding */}
        <section className="py-24 bg-white border-y border-gray-100">
           <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
              <AnimatedSection className="text-center mb-16">
                 <h2 className="font-display text-4xl font-bold text-charcoal mb-6">Moulding Capability & Batch Precision</h2>
                 <p className="text-lg text-text-muted max-w-2xl mx-auto">Scaling production for Tier-1 industrial partnerships, specializing in high-tolerance <Link href="/products" className="text-primary hover:underline">compression rubber moulded parts</Link>.</p>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { title: "Compression Moulding", text: "High-volume precision moulding infrastructure." },
                   { title: "Lathe Cutting", text: "Specialized for mass production of flat washers." },
                   { title: "Custom Extrusion", text: "Specific manufacturing of rubber profiles and tubes." },
                   { title: "Material Mixing", text: "Expert compounding of EPDM, Silicone, and Nitrile." }
                 ].map((cap, i) => (
                   <AnimatedSection key={i} delay={i * 0.1} className="bg-surface p-8 border border-gray-100 shadow-sm hover:shadow-premium transition-all">
                      <ShieldCheck className="text-primary mb-6" size={32} />
                      <h4 className="font-display font-bold text-lg mb-2 text-charcoal">{cap.title}</h4>
                      <p className="text-sm text-text-muted leading-relaxed">{cap.text}</p>
                   </AnimatedSection>
                 ))}
              </div>
           </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 bg-charcoal text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-primary opacity-5"></div>
           <div className="container mx-auto px-4 relative z-10">
              <AnimatedSection>
                <h2 className="font-display text-4xl font-bold mb-6 text-white">Require a custom manufacturing solution?</h2>
                <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Submit your technical drawings or physical samples to our technical team in Mohali for a comprehensive feasibility audit and production quote.
                </p>
                <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all shadow-xl inline-block">
                   Submit Manufacturing Enquiry
                </Link>
              </AnimatedSection>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
