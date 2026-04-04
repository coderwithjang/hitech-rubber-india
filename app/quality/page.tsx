import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ShieldCheck, FileText, Download } from "lucide-react";
import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "ISO Certification & GST Compliance | Hi-Tech Rubber",
  description: "View our official ISO 9001 quality certificates and GST registration documents. Hi-Tech Rubber is a fully accredited global manufacturing exporter.",
};

export default function QualityPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-surface text-charcoal pt-[104px]">
        
        {/* Page Header */}
        <section className="bg-charcoal text-white py-24 border-b-4 border-primary relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('/Images/DSC_8966.JPG')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
           <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 text-center max-w-4xl">
              <AnimatedSection>
                <div className="inline-flex items-center text-primary-light font-bold tracking-[0.2em] uppercase text-xs mb-6 px-3 py-1 bg-white/5 border border-white/10 rounded-sm">
                  <ShieldCheck size={14} className="mr-2" /> Verified Accreditation
                </div>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight drop-shadow-md">
                  Official Certifications <span className="text-primary-light">& Quality Compliance</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
                  Transparency and auditable quality are the core of our technical partnerships. View our active ISO certification and official incorporation documents below.
                </p>
                <a 
                  href="/HI TECH CHD.pdf" 
                  download
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all shadow-premium inline-flex items-center"
                >
                  <Download size={18} className="mr-2" /> Download Company Profile
                </a>
              </AnimatedSection>
           </div>
        </section>

        {/* Certificates Grid */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* ISO Certificate */}
              <AnimatedSection delay={0.1} className="flex flex-col h-full items-center">
                <div className="w-full text-center mb-6">
                  <h2 className="font-display text-2xl font-bold flex items-center justify-center text-charcoal mb-2">
                    <ShieldCheck className="text-primary mr-2" /> Global ISO Certification
                  </h2>
                  <p className="text-text-muted text-sm">International quality system standards</p>
                </div>
                <div className="w-full bg-white p-2 border border-gray-200 shadow-sm flex-grow min-h-[600px] lg:min-h-[800px] flex">
                  <iframe 
                    src="/ISO Certificate.pdf#view=FitH" 
                    title="ISO Certificate" 
                    className="w-full h-full border-0 self-stretch"
                    allowFullScreen
                  />
                </div>
              </AnimatedSection>
              
              {/* GST Certificate */}
              <AnimatedSection delay={0.2} className="flex flex-col h-full items-center">
                <div className="w-full text-center mb-6">
                  <h2 className="font-display text-2xl font-bold flex items-center justify-center text-charcoal mb-2">
                    <FileText className="text-primary mr-2" /> GST Registration
                  </h2>
                  <p className="text-text-muted text-sm">Official government tax & incorporation authority</p>
                </div>
                <div className="w-full bg-white p-2 border border-gray-200 shadow-sm flex-grow min-h-[600px] lg:min-h-[800px] flex">
                  <iframe 
                    src="/GST Certificate.pdf#view=FitH" 
                    title="GST Certificate" 
                    className="w-full h-full border-0 self-stretch"
                    allowFullScreen
                  />
                </div>
              </AnimatedSection>

            </div>

          </div>
        </section>

        {/* Call to Action Footer */}
        <section className="py-20 bg-white border-t border-gray-100 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <AnimatedSection>
               <h3 className="font-display text-2xl font-bold text-charcoal mb-4">Require additional audit documentation?</h3>
               <p className="text-text-muted mb-8">
                 We are prepared for rigorous supplier qualification audits. Contact our technical team for specific capability documentation or material compliance records.
               </p>
               <Link href="/contact" className="inline-block border-b-2 border-primary text-primary font-bold tracking-widest uppercase pb-1 hover:text-primary-dark transition-colors">
                  Contact Compliance Team
               </Link>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
