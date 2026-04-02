import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroSliderBackground from "@/components/ui/HeroSliderBackground";
import { CheckCircle2, Factory, Globe2, PenTool, Clock, FlaskConical, ArrowRight, Target, Briefcase, PlayCircle } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Rubber Moulded Parts Manufacturer India | Custom Rubber Gaskets Exporter",
  description: "Hi-Tech Rubber Industries is a premier rubber moulded factory in India. We export custom silicone rubber moulded parts, lathe cut rubber washers, and rubber grommets globally from Mohali.",
  keywords: "custom rubber moulded parts, rubber washers, rubber gaskets, rubber grommets, rubber orings, rubber moulded factory in India, compression rubber moulded parts",
};

export default function Home() {
  const heroImages = [
    "/Images/DSC_8951.JPG",
    "/Images/DSC_8966.JPG",
    "/Images/DSC_9254.JPG"
  ];

  const products = [
    { title: "Lathe Cut Rubber Washers", description: "High-precision flat sealing solutions for plumbing, automotive, and industrial assemblies.", imageUrl: "/Images/Rubber Washers.JPG" },
    { title: "Rubber Washers", description: "Durable and versatile sealing parts for industrial and general engineering use.", imageUrl: "/Images/Rubber Washer.JPG" },
    { title: "Rubber Flat Washers", description: "Precision-cut flat washers for load distribution and leak prevention.", imageUrl: "/Images/Washer.JPG" },
    { title: "Rubber Gaskets", description: "Custom sealing components for pressure, vibration, and fluid-handling systems.", imageUrl: "/Images/Flange Gasket.JPG" },
    { title: "Manhole Rubber Washers", description: "Heavy-duty, weather-resistant sealing products for infrastructure and municipal applications.", imageUrl: "/Images/Manhole Gasket.JPG" },
    { title: "Rubber Grommets", description: "Protective moulded parts for wiring, cable routing, and through-hole protection.", imageUrl: "/Images/Gripper Seal.JPG" },
    { title: "Rubber O-Rings", description: "Reliable sealing components for dynamic and static applications.", imageUrl: "/Images/O-Ring.JPG" },
    { title: "Rubber Spacers", description: "Engineered support components for spacing, cushioning, and alignment.", imageUrl: "/Images/DSC_9357.JPG" }
  ];

  const capabilities = [
    { icon: <PenTool className="w-6 h-6" />, title: "Custom Tooling", text: "We don't just sell parts; we manufacture custom rubber moulded parts based on your specific CAD designs or samples." },
    { icon: <Factory className="w-6 h-6" />, title: "Material Versatility", text: "Expertise in EPDM, Silicone, Nitrile, Neoprene, and Natural Rubber." },
    { icon: <Globe2 className="w-6 h-6" />, title: "Global Export Standards", text: "Experienced in navigating shipping and compliance for the USA, EU, and Gulf markets." },
    { icon: <Clock className="w-6 h-6" />, title: "Competitive Lead Times", text: "Efficient manufacturing processes that ensure your supply chain never stops." },
    { icon: <FlaskConical className="w-6 h-6" />, title: "In-house Laboratory", text: "Rubber compounds are tested in-house for consistency, durability, and performance." },
    { icon: <Briefcase className="w-6 h-6" />, title: "Tool Room Capabilities", text: "Faster sampling and precise control over development for compression rubber moulded parts." }
  ];

  const trustBadges = [
    "Since 1990", "38,000 sq. ft. facility", "In-house tool room", "In-house lab testing", "Export-ready manufacturing"
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Hi-Tech Rubber Industries",
        "url": "https://hitechrubberindia.com",
        "description": "Premier rubber moulded factory in India located in Mohali, specializing in custom rubber moulded parts, rubber washers, and rubber gaskets.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mohali",
          "addressRegion": "Punjab",
          "addressCountry": "IN"
        }
      }) }} />
      <Header />
      <main className="flex-grow bg-background text-charcoal">
        
        {/* --- 1. HERO SECTION WITH IMAGE SLIDER --- */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden" aria-label="Introduction">
          <HeroSliderBackground images={heroImages} />
          
          <div className="absolute inset-0 bg-charcoal/80 z-10 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-20 text-center max-w-5xl">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/50 bg-primary/20 text-white text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm backdrop-blur-sm">
                Precision Rubber Moulding Solutions Since 1990
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-md">
                Trusted Global Manufacturer of High-Performance Rubber Components
              </h1>
              <p className="text-xl md:text-2xl text-primary-light font-medium mb-8 drop-shadow">
                Engineering excellence delivered from India to the USA, Europe, Africa, and the Gulf.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-4xl mx-auto drop-shadow-sm">
                Founded in 1990, Hi-Tech Rubber Industries is spread over 38,000 square feet in the industrial town of Mohali in the foothills of the Himalayas, in India and has evolved from a local manufacturing unit into a premier international exporter. With over three decades of technical expertise, we specialize in high-precision <Link href="/products" className="text-primary-light hover:underline font-semibold">custom rubber moulded parts</Link>.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-5 mb-14">
                <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-10 py-5 text-center font-bold tracking-widest uppercase text-sm transition-all shadow-premium hover:shadow-premium-hover flex items-center justify-center">
                  Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link href="/products" className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-charcoal text-white px-10 py-5 text-center font-bold tracking-widest uppercase text-sm transition-all flex items-center justify-center">
                  Explore Products
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {trustBadges.map((badge, i) => (
                  <span key={i} className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-sm">
                     <CheckCircle2 size={12} className="text-primary-light mr-1.5" /> {badge}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* --- 2. CREDIBILITY STRIP --- */}
        <section className="bg-charcoal py-8 border-y-4 border-primary">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-wrap flex-col md:flex-row justify-center lg:justify-between items-center gap-8 md:gap-12 text-center text-white">
              <AnimatedSection delay={0.1} className="flex-1">
                <p className="font-semibold text-sm uppercase tracking-widest text-primary-light mb-1">Global Reach</p>
                <p className="text-sm">Exporting to USA, Canada, Europe, Gulf Countries, and Africa</p>
              </AnimatedSection>
              <div className="hidden lg:block w-px h-12 bg-gray-700"></div>
              <AnimatedSection delay={0.2} className="flex-1">
                <p className="font-semibold text-sm uppercase tracking-widest text-primary-light mb-1">Tier-1 Partner</p>
                <p className="text-sm">Trusted by global industrial buyers for rubber gaskets and grommets</p>
              </AnimatedSection>
              <div className="hidden lg:block w-px h-12 bg-gray-700"></div>
              <AnimatedSection delay={0.3} className="flex-1">
                <p className="font-semibold text-sm uppercase tracking-widest text-primary-light mb-1">Precision Engineering</p>
                <p className="text-sm">Custom manufacturing based on CAD drawings or physical samples</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* --- 3. FACTORY TOUR VIDEO SECTION (Moved up) --- */}
        <section className="py-24 bg-surface border-y border-gray-200">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <AnimatedSection className="mb-12">
               <PlayCircle className="w-16 h-16 text-primary mx-auto mb-6 opacity-90" />
               <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">Inside Our Manufacturing Facility</h2>
               <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
               <p className="text-text-muted text-lg max-w-3xl mx-auto">
                 Experience our technical capabilities. Watch how we engineer and deploy high-precision <Link href="/quality" className="text-primary hover:underline">compression rubber moulded parts</Link> directly from our 38,000 sq ft base in Mohali, India.
               </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="relative w-full aspect-video shadow-premium overflow-hidden bg-charcoal border-8 border-white rounded-lg group">
                 <video 
                   src="/bgvideo1.mp4" 
                   autoPlay 
                   loop 
                   muted 
                   playsInline 
                   controls
                   className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" 
                 />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* --- 4. FEATURED PRODUCTS (Moved down) --- */}
        <section id="products" className="py-24 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
               <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">Our Featured Products</h2>
               <p className="text-text-muted text-lg">A comprehensive portfolio of high-performance sealing & <Link href="/products" className="text-primary hover:underline">rubber moulded solutions</Link>.</p>
               <div className="w-20 h-1 bg-primary mx-auto mt-8"></div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, idx) => (
                <AnimatedSection key={idx} delay={(idx % 4) * 0.1}>
                  <ProductCard {...product} />
                </AnimatedSection>
              ))}
            </div>
            
            <div className="mt-12 text-center">
               <Link href="/products" className="inline-block border-b-2 border-primary text-primary font-bold tracking-widest uppercase pb-1 hover:text-primary-dark transition-colors">
                  View Full Catalogue
               </Link>
            </div>
          </div>
        </section>

        {/* --- 5. CAPABILITIES --- */}
        <section className="py-24 bg-surface border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
               <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">Industries & Capabilities</h2>
               <div className="w-20 h-1 bg-primary mx-auto mt-8"></div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, idx) => (
                <AnimatedSection key={idx} delay={(idx % 3) * 0.1} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-premium transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center mb-6">
                    {cap.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{cap.title}</h3>
                  <p className="text-text-muted leading-relaxed">{cap.text}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* --- 6. EXPORT MARKETS --- */}
        <section id="export" className="relative py-24 bg-charcoal text-white text-center overflow-hidden">
           <div className="absolute inset-0 opacity-10">
              <Image src="/Images/DSC_8968.JPG" alt="Export shipments of custom silicone washers" fill className="object-cover" />
           </div>
           <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
             <AnimatedSection className="mb-16 max-w-3xl mx-auto">
                <Globe2 className="w-16 h-16 text-primary-light mx-auto mb-6 opacity-80" />
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Export Markets</h2>
                <div className="w-20 h-1 bg-primary mx-auto mt-8"></div>
             </AnimatedSection>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <AnimatedSection delay={0.1} className="p-6 border border-gray-700 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800 transition-colors">
                   <h3 className="font-display text-2xl font-bold text-primary-light mb-2">North America</h3>
                   <p className="text-sm text-gray-300">USA & Canada</p>
                </AnimatedSection>
                <AnimatedSection delay={0.2} className="p-6 border border-gray-700 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800 transition-colors">
                   <h3 className="font-display text-2xl font-bold text-primary-light mb-2">Europe</h3>
                   <p className="text-sm text-gray-300">UK, Germany, and France</p>
                </AnimatedSection>
                <AnimatedSection delay={0.3} className="p-6 border border-gray-700 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800 transition-colors">
                   <h3 className="font-display text-2xl font-bold text-primary-light mb-2">Middle East</h3>
                   <p className="text-sm text-gray-300">UAE (Sharjah/Dubai), Saudi Arabia, and Qatar</p>
                </AnimatedSection>
                <AnimatedSection delay={0.4} className="p-6 border border-gray-700 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800 transition-colors">
                   <h3 className="font-display text-2xl font-bold text-primary-light mb-2">Africa</h3>
                   <p className="text-sm text-gray-300">Growing industrial markets across the continent</p>
                </AnimatedSection>
             </div>
           </div>
        </section>

        {/* --- 7. ABOUT PREVIEW --- */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
            <AnimatedSection>
              <Target className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
                Decades of Experience in Rubber Moulded Parts
              </h2>
              <p className="text-lg md:text-xl text-text-muted leading-relaxed font-light">
                Hi-Tech Rubber Industries operates dynamically from Mohali, India, with decades of experience acting as a premium <Link href="/about" className="text-primary hover:underline">rubber moulded factory in India</Link>. From <Link href="/products" className="text-primary hover:underline">rubber flat washers</Link> and <Link href="/products" className="text-primary hover:underline">rubber orings</Link> to <Link href="/products" className="text-primary hover:underline">custom silicone rubber moulded parts</Link>, the company combines technical know-how, manufacturing discipline, and export readiness to serve demanding industrial buyers worldwide.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* --- 8. QUALITY TRUST --- */}
        <section className="py-24 bg-surface border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <h2 className="font-display text-4xl font-bold text-charcoal mb-6">Built on Quality & Buyer Confidence</h2>
                <p className="text-lg text-text-muted mb-8 leading-relaxed">
                  Our reputation is forged through strict adherence to international standards across all our <Link href="/quality" className="text-primary hover:underline">compression rubber moulded parts</Link> and sealing products.
                </p>
                <ul className="space-y-4">
                  {[
                    "Over three decades of experience",
                    "ISO-standard quality approach",
                    "Timely delivery commitment",
                    "Tier-1 industry partner positioning",
                    "Export documentation and packaging readiness"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-charcoal font-medium">
                      <CheckCircle2 className="text-primary mr-3 shrink-0" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection className="relative h-[400px] w-full group">
                 <Image src="/Images/DSC_8954.JPG" alt="Rubber flat washers quality inspection in Mohali" fill className="object-cover shadow-2xl group-hover:scale-[1.02] transition-transform duration-500" />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* --- 9. BOTTOM CTA --- */}
        <section className="py-24 bg-primary text-center">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-white">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-sm">Need Custom Rubber Moulded Parts?</h2>
              <p className="text-lg md:text-xl text-primary-light font-medium mb-10 drop-shadow">
                Share your drawing, sample, or technical requirement for any <Link href="/products" className="underline text-white">silicone custom washers</Link> or standard parts and our team will quote the right rubber solution.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="bg-charcoal hover:bg-charcoal-dark text-white px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all shadow-xl">
                  Send Enquiry
                </Link>
                <Link href="/products" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all shadow-xl">
                  Download Catalogue
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
