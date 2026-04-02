import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { 
  Globe2, 
  FileCheck, 
  PackageCheck, 
  Truck, 
  Factory, 
  MessageSquare,
  MapPin
} from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Global Custom Rubber Gaskets Exporter | Hi-Tech Rubber",
  description: "Exporting precision custom rubber moulded parts, rubber washers, and silicone wristbands from Mohali, India to OEMs in USA, Canada, Europe, Gulf countries, and Africa.",
  keywords: "custom rubber gaskets exporter, rubber washers, custom silicone rubber moulded parts, rubber wristbands, silicone rubber wristbands, rubber moulded parts",
};

export default function ExportPage() {
  const regions = [
    { title: "North America", sub: "USA & Canada", desc: "Serving automotive, plumbing, and industrial OEMs with precision lathe cut rubber washers and seals." },
    { title: "Europe", sub: "UK, Germany, France", desc: "Delivering ISO-compliant custom silicone rubber moulded parts for stringent machinery and manufacturing sectors." },
    { title: "Middle East", sub: "UAE, Saudi Arabia, Qatar", desc: "Supplying heavy-duty manhole rubber washers and O-rings for infrastructure and oil/gas applications." },
    { title: "Africa", sub: "Pan-African Markets", desc: "Supporting rapidly expanding industrial initiatives with robust rubber gaskets and flat washers." }
  ];

  const strengths = [
    { icon: <FileCheck className="w-10 h-10 text-primary mb-4" />, title: "Documentation Support", desc: "Flawless export documentation, Certificates of Origin, and material compliance reports to ensure smooth customs clearance." },
    { icon: <PackageCheck className="w-10 h-10 text-primary mb-4" />, title: "Packaging Discipline", desc: "Export-grade seaworthy packaging ensuring components like rubber wristbands and custom silicone washers arrive pristine." },
    { icon: <Truck className="w-10 h-10 text-primary mb-4" />, title: "Timely Dispatch Planning", desc: "Agile production scheduling combined with reliable freight forwarding guarantees on-time departures." },
    { icon: <Factory className="w-10 h-10 text-primary mb-4" />, title: "Manufacturing Reliability", desc: "Operating from our 38,000 sq ft facility in Mohali, India, we maintain strict process controls for ultimate repeat consistency." },
    { icon: <MessageSquare className="w-10 h-10 text-primary mb-4" />, title: "Proactive Communication", desc: "Dedicated account management tailored for international B2B buyers ensuring transparent updates across time zones." }
  ];

  return (
    <>
      <Header />
      <main className="flex-grow bg-background text-charcoal pt-24">
        
        {/* 1. Hero Section Standard Static Image Overlay */}
        <section className="relative py-24 md:py-32 bg-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 z-0">
             <Image src="/Images/DSC_9330.JPG" alt="Export shipments of custom rubber moulded parts" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-charcoal/70 z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <AnimatedSection>
              <Globe2 className="w-16 h-16 text-primary-light mx-auto mb-6 drop-shadow-md" />
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
                Exporting Custom Rubber Moulded Parts from India
              </h1>
              <div className="w-24 h-1.5 bg-primary mx-auto mb-8 shadow-sm"></div>
              <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed drop-shadow">
                Trusted by industrial buyers worldwide for dimensional accuracy, material integrity, and frictionless international shipping.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* 2. Overview & Mohali Focus */}
        <section className="py-24 bg-surface relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
            <AnimatedSection>
              <div className="flex justify-center mb-6">
                <span className="bg-primary/10 text-primary rounded-full p-4 border border-primary/20">
                  <MapPin className="w-8 h-8" />
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
                Your Trusted Manufacturing Hub in Mohali, India
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                We manufacture and export <Link href="/products" className="text-primary hover:underline">custom rubber moulded parts</Link>, including specialized silicone rubber wristbands, directly from our robust facility in <strong>Mohali, India</strong>. Our operational philosophy is built on an unwavering focus on <strong>repeat consistency</strong> and total <strong>buyer satisfaction</strong>.
              </p>
              <p className="text-lg text-text-muted leading-relaxed font-medium">
                We are proud to serve some of the most demanding industrial clients and act as a reliable rubber gaskets exporter across the <strong>USA, Canada, Gulf countries, Europe, and Africa</strong>.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* 3. Regions Grid directly over native factory image */}
        <section className="relative py-24 bg-charcoal text-white border-y border-gray-700 overflow-hidden">
          <div className="absolute inset-0 opacity-15">
             <Image src="/Images/DSC_9323.JPG" alt="Export shipments of custom rubber moulded parts" fill className="object-cover" />
          </div>
          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
            <AnimatedSection className="text-center mb-16">
               <h2 className="font-display text-4xl font-bold text-white mb-4">Our Global Footprint</h2>
               <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regions.map((region, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1} className="bg-gray-900/80 backdrop-blur-md text-white p-8 border border-white/10 hover:border-primary hover:bg-primary/90 transition-all duration-300 group">
                  <Globe2 className="w-10 h-10 text-primary-light mb-6 opacity-70 group-hover:text-white group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-display text-2xl font-bold mb-1">{region.title}</h3>
                  <p className="text-sm font-semibold text-primary-light mb-4 group-hover:text-white uppercase tracking-wider">{region.sub}</p>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/90">{region.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Export Strengths */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <AnimatedSection className="text-center mb-16">
               <h2 className="font-display text-4xl font-bold text-charcoal mb-4">Why Export Buyers Trust Us</h2>
               <p className="text-lg text-text-muted max-w-2xl mx-auto">We eliminate the friction of international sourcing for your <Link href="/quality" className="text-primary hover:underline">rubber moulded parts</Link> through disciplined processes and proactive management.</p>
               <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {strengths.map((str, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-premium transition-shadow">
                  {str.icon}
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">{str.title}</h3>
                  <p className="text-text-muted leading-relaxed">{str.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Final CTA Section */}
        <section className="py-24 bg-primary text-center">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-white">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-sm">Building Long-Term B2B Partnerships</h2>
              <p className="text-lg md:text-xl text-primary-light font-medium mb-10 drop-shadow">
                Whether you need specific compliance documentation, custom packaging, or a rapid sampling schedule, our team is equipped to execute seamlessly.
              </p>
              <div className="flex justify-center">
                <Link href="/contact" className="bg-charcoal hover:bg-charcoal-dark text-white px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all shadow-xl inline-flex items-center">
                  Discuss Your Export Requirement
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
