import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { 
  Building2, 
  MapPin, 
  Globe2, 
  Wrench, 
  Factory,
  Mail,
  PhoneCall,
  Upload,
  Send
} from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Custom Rubber Moulded Parts Manufacturer India",
  description: "Contact Hi-Tech Rubber Industries in Mohali, India. Send us your drawing, sample, part requirement, or export enquiry for rubber washers, gaskets, and O-rings.",
  keywords: "contact rubber moulded factory in India, rubber washers, rubber gaskets, rubber grommets, rubber orings, custom silicone washers, compression rubber moulded parts",
};

export default function ContactPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hi-Tech Rubber Industries",
    "image": "https://hitechrubberindia.com/logo.png",
    "url": "https://hitechrubberindia.com/contact",
    "telephone": "+91 XXXXX XXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mohali",
      "addressRegion": "Punjab",
      "addressCountry": "IN"
    },
    "description": "Rubber moulded factory in India exporting lathe cut rubber washers and custom silicone rubber moulded parts."
  };

  const trustPoints = [
    { icon: <Building2 className="w-5 h-5 text-primary" />, text: "Founded in 1990" },
    { icon: <MapPin className="w-5 h-5 text-primary" />, text: "Mohali, India manufacturing base" },
    { icon: <Globe2 className="w-5 h-5 text-primary" />, text: "Export to USA, Canada, Gulf countries, Europe, Africa" },
    { icon: <Wrench className="w-5 h-5 text-primary" />, text: "In-house tool room and lab" },
    { icon: <Factory className="w-5 h-5 text-primary" />, text: "Custom rubber moulded parts manufacturer" }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <Header />
      <main className="flex-grow bg-background text-charcoal pt-24">
        
        {/* 1. Hero Section */}
        <section className="relative py-20 bg-charcoal text-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <AnimatedSection>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Contact Hi-Tech Rubber Industries
              </h1>
              <div className="w-24 h-1.5 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-primary-light font-light leading-relaxed">
                Send us your drawing, sample, part requirement, or <Link href="/export" className="underline text-white">export enquiry</Link>.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* 2. Contact Form & Sidebar */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              
              {/* Form Column */}
              <div className="lg:col-span-2">
                <AnimatedSection className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
                  <h2 className="font-display text-3xl font-bold text-charcoal mb-8">Submit Your Enquiry</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-charcoal uppercase tracking-wider">Name *</label>
                        <input type="text" className="w-full bg-surface border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-charcoal uppercase tracking-wider">Company</label>
                        <input type="text" className="w-full bg-surface border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-charcoal uppercase tracking-wider">Email Address *</label>
                        <input type="email" className="w-full bg-surface border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-charcoal uppercase tracking-wider">Phone / WhatsApp *</label>
                        <input type="tel" className="w-full bg-surface border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-charcoal uppercase tracking-wider">Country</label>
                        <input type="text" className="w-full bg-surface border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-charcoal uppercase tracking-wider">Material Preference</label>
                        <select className="w-full bg-surface border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-charcoal appearance-none">
                          <option value="">Select Material</option>
                          <option value="EPDM">EPDM</option>
                          <option value="Silicone">Silicone for Custom Silicone Washers</option>
                          <option value="Nitrile">Nitrile (NBR)</option>
                          <option value="Neoprene">Neoprene</option>
                          <option value="Natural Rubber">Natural Rubber</option>
                          <option value="Unsure">Unsure / Need Advice</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-charcoal uppercase tracking-wider">Product Requirement</label>
                      <input type="text" placeholder="e.g., Custom O-Rings, Rubber Grommets, Wristbands..." className="w-full bg-surface border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-charcoal uppercase tracking-wider">Message Details *</label>
                      <textarea rows={5} className="w-full bg-surface border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Provide operational conditions, quantities for your rubber moulded parts, or specific compliance needs..." required></textarea>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-charcoal uppercase tracking-wider">Drawing or Sample Reference (Upload)</label>
                      <div className="border-2 border-dashed border-gray-300 bg-surface/50 p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-surface hover:border-primary transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 mb-3 text-primary/70" />
                        <span className="text-sm font-medium">Click to upload CAD drawing or reference images</span>
                        <span className="text-xs mt-1">PDF, JPG, PNG, STEP (Max 10MB)</span>
                        <input type="file" className="hidden" />
                      </div>
                    </div>

                    <button type="button" className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 text-center font-bold tracking-widest uppercase text-sm transition-all shadow-premium hover:shadow-premium-hover flex items-center justify-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send Enquiry
                    </button>
                  </form>
                </AnimatedSection>
              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-1 space-y-8">
                <AnimatedSection delay={0.2} className="bg-charcoal text-white p-8">
                  <h3 className="font-display text-2xl font-bold mb-6 text-primary-light">Why Partner With Us?</h3>
                  <ul className="space-y-6">
                    {trustPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-white/10 p-2 shrink-0 mr-4 rounded-full">
                          {point.icon}
                        </div>
                        <span className="text-gray-300 font-medium leading-relaxed mt-1">{point.text}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>

                <AnimatedSection delay={0.3} className="bg-white border border-gray-100 p-8 shadow-sm">
                  <h3 className="font-display text-xl font-bold text-charcoal mb-4">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-text-muted">
                      <Mail className="w-5 h-5 text-primary mr-3" />
                      <a href="mailto:info@hitechrubberindia.com" className="hover:text-primary transition-colors">info@hitechrubberindia.com</a>
                    </div>
                    <div className="flex items-center text-text-muted">
                      <PhoneCall className="w-5 h-5 text-primary mr-3" />
                      <span>+91 XXXXX XXXXX</span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Bottom CTA Strip */}
        <section className="py-16 bg-primary text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-sm">
                Need a fast quotation for <Link href="/products" className="underline hover:text-charcoal transition-colors">rubber washers, gaskets, grommets, O-rings, or silicone moulded parts</Link>?
              </h2>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
