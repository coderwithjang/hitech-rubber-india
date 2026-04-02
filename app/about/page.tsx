import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Building2, Globe2, FlaskConical, Award, Settings, ShieldCheck, CheckCircle2, Factory } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Rubber Moulded Factory In India | Hi-Tech Rubber",
  description: "Operating from Mohali, India, Hi-Tech Rubber Industries is a leading rubber moulded factory exporting custom silicone rubber moulded parts and rubber washers.",
  keywords: "rubber moulded factory in India, custom rubber moulded parts, rubber washers, rubber gaskets, custom silicone washers, compression rubber moulded parts",
};

export default function About() {
  const highlights = [
    { icon: <Building2 className="w-8 h-8"/>, value: "1990", label: "Established" },
    { icon: <Factory className="w-8 h-8"/>, value: "38,000", label: "Sq. Ft. Facility" },
    { icon: <Globe2 className="w-8 h-8"/>, value: "Global", label: "Export Markets" },
    { icon: <FlaskConical className="w-8 h-8"/>, value: "In-House", label: "Tooling & Lab" },
  ];

  const strengths = [
    "Custom rubber moulding & engineering",
    "Compression rubber moulded parts at scale",
    "Precision custom silicone washers & moulding",
    "Rubber washers, gaskets, grommets, and O-ring production"
  ];

  const materials = [
    { name: "EPDM", desc: "Excellent weather, ozone, and UV resistance perfectly suited for outdoor & automotive gaskets." },
    { name: "Silicone", desc: "High temperature stability, FDA-grade options, ideal for custom silicone rubber moulded parts." },
    { name: "Nitrile (NBR)", desc: "Superior resistance to oils, fuels, and petroleum-based fluids for industrial rubber orings." },
    { name: "Neoprene", desc: "Balanced properties with moderate oil, weather, and flame resistance." },
    { name: "Natural Rubber", desc: "High tensile strength, elasticity, and excellent dynamic properties for vibration control parts." }
  ];

  const whyChooseUs = [
    { title: "Technical Support", text: "Expert engineering consultation from concept through full production of rubber flat washers and components." },
    { title: "Tooling Capability", text: "In-house tool room enabling faster modifications and precision custom development." },
    { title: "Consistent Quality", text: "Strict quality control parameters ensuring dimensional accuracy in every batch." },
    { title: "Export Experience", text: "Decades of expertise handling international shipping and compliance out of Mohali, India." },
    { title: "Responsive Sampling", text: "Agile prototyping leading to rapid turnaround for custom silicone rubber moulded parts." }
  ];

  return (
    <>
      <Header />
      <main className="flex-grow bg-background text-charcoal pt-24">
        
        {/* 1. Intro Hero Section */}
        <section className="relative py-24 bg-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/Images/DSC_8951.JPG" alt="Rubber moulded factory in India manufacturing machinery" fill className="object-cover" priority />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/20 text-primary-light text-sm font-bold tracking-[0.2em] uppercase mb-6">
                Our Heritage
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                About Hi-Tech Rubber Industries
              </h1>
              <div className="w-24 h-1.5 bg-primary mx-auto"></div>
            </AnimatedSection>
          </div>
        </section>

        {/* 2. Company Story & 3. Experience/Scale */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection className="prose prose-lg text-text-muted">
                <h2 className="font-display text-3xl font-bold text-charcoal mb-6">A Legacy of Engineering Excellence</h2>
                <p className="leading-relaxed mb-6">
                  Founded in 1990, Hi-Tech Rubber Industries began as a local manufacturing unit and has deeply grown into a respected exporter of <strong>custom rubber moulded parts</strong> and robust sealing solutions. 
                </p>
                <p className="leading-relaxed">
                  Operating from a 38,000 square foot factory in <strong>Mohali, India</strong>, the company has heavily built its reputation on consistency, technical expertise, and dependable delivery. We are committed to serving industrial buyers globally, providing customized <Link href="/products" className="text-primary hover:underline">lathe cut rubber washers</Link> and moulded solutions tailored to precise specifications as a top-tier rubber moulded factory in India.
                </p>
              </AnimatedSection>
              
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.1} className="bg-surface p-6 border border-gray-100 flex flex-col items-center text-center shadow-sm">
                    <div className="text-primary mb-4">{item.icon}</div>
                    <div className="font-display text-2xl font-bold text-charcoal mb-1">{item.value}</div>
                    <div className="text-sm text-text-muted uppercase tracking-wider font-semibold">{item.label}</div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Manufacturing Strengths */}
        <section className="py-24 bg-surface border-y border-gray-200">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <AnimatedSection className="mb-12">
                  <h2 className="font-display text-4xl font-bold text-charcoal mb-6">Core Manufacturing Strengths</h2>
                  <p className="text-lg text-text-muted">Dedicated infrastructure to support diverse high-volume <Link href="/quality" className="text-primary hover:underline">compression rubber moulded parts</Link> production.</p>
                  <div className="w-20 h-1 bg-primary mt-6"></div>
                </AnimatedSection>

                <div className="space-y-4">
                  {strengths.map((str, idx) => (
                    <AnimatedSection key={idx} delay={idx * 0.1} className="flex items-center bg-white p-6 shadow-sm border border-gray-100">
                      <div className="bg-primary/10 p-3 shrink-0 mr-4">
                        <Settings className="text-primary w-6 h-6" />
                      </div>
                      <span className="font-semibold text-lg text-charcoal">{str}</span>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              <AnimatedSection className="relative h-[500px] w-full shadow-premium">
                <Image src="/Images/DSC_8966.JPG" alt="Rubber moulded factory compression testing" fill className="object-cover" />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* 5. Materials Expertise */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-charcoal mb-6">Materials Expertise</h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">We master a comprehensive range of rubber polymers, engineered specifically to perform under challenging environmental and mechanical conditions.</p>
              <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((mat, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1} className="p-8 border border-gray-200 hover:border-primary transition-colors hover:shadow-premium group">
                  <h3 className="font-display text-2xl font-bold text-primary mb-3 group-hover:text-primary-dark">{mat.name}</h3>
                  <p className="text-text-muted leading-relaxed">{mat.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Why Global Buyers Choose Us */}
        <section className="relative py-24 bg-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="/Images/DSC_9280.JPG" alt="Factory interior displaying capabilities" fill className="object-cover" />
          </div>
          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <AnimatedSection className="lg:col-span-1">
                <ShieldCheck className="w-16 h-16 text-primary-light mb-6 opacity-90" />
                <h2 className="font-display text-4xl font-bold mb-6">Why Global Buyers Choose Us</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  A seamless blend of cost-effective manufacturing, stringent quality assurance, and unyielding <Link href="/export" className="text-primary-light hover:underline">export commitment</Link> to our global partners.
                </p>
                <div className="w-16 h-1 bg-primary"></div>
              </AnimatedSection>
              
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChooseUs.map((reason, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.1} className="flex">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mr-4 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-primary-light">{reason.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{reason.text}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Closing CTA Section */}
        <section className="py-24 bg-primary text-center">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-white">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-sm">Ready to Start Your Project?</h2>
              <p className="text-lg md:text-xl text-primary-light font-medium mb-10 drop-shadow">
                Share your technical drawings or material specifications with our team to receive a tailored quotation for custom rubber moulded parts.
              </p>
              <div className="flex justify-center">
                <Link href="/contact" className="bg-charcoal hover:bg-charcoal-dark text-white px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all shadow-xl inline-flex items-center">
                  Submit an Enquiry
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
