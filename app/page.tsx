import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroSliderBackground from "@/components/ui/HeroSliderBackground";
import HeroForm from "@/components/HeroForm";
import { CheckCircle2, Factory, Globe2, PenTool, Clock, FlaskConical, ArrowRight, Target, Briefcase, PlayCircle, ShieldCheck, Settings, Shield } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Rubber Moulded Parts Manufacturer India | Custom Rubber Gaskets Exporter",
  description: "Global manufacturer of high-performance custom rubber moulded parts, specializing in Lathe cut rubber washers, rubber gaskets, custom silicone moulded parts, and grommets.",
  keywords: "Lathe cut rubber washers, rubber washers, custom silicone rubber moulded parts, Rubber wristbands, silicone rubber wristbands, rubber grommets, rubber gaskets, Manhole rubber washers, rubber moulded parts, rubber moulded factory in India, Compression rubber moulded parts, custom silicone washers, rubber orings, rubber spacers, rubber flat washers",
};

export default function Home() {
  const heroImages = [
    "/images1/ind1.JPG",
    "/images1/ind2.JPG",
    "/images1/ind3.JPG"
  ];

  const products = [
    { title: "Finger Exercise Gripper", imageUrl: "/Images1/Finger Exercise Gripper.JPG" },
    { title: "Flange Gasket (2)", imageUrl: "/Images1/Flange Gasket (2).JPG" },
    { title: "Flange Gasket", imageUrl: "/Images1/Flange Gasket.JPG" },
    { title: "Gripper Seal", imageUrl: "/Images1/Gripper Seal.JPG" },
    { title: "Manhole Gasket", imageUrl: "/Images1/Manhole Gasket.JPG" },
    { title: "Manhole Gaskets Betts", imageUrl: "/Images1/Manhole Gaskets Betts 10 Inch-25 Inch.JPG" },
    { title: "O-Ring", imageUrl: "/Images1/O-Ring.JPG" },
    { title: "Rubber Gun Butt", imageUrl: "/Images1/Rubber Gun Butt.png" },
    { title: "Rubber Washer", imageUrl: "/Images1/Rubber Washer.JPG" },
    { title: "Rubber Washers", imageUrl: "/Images1/Rubber Washers.JPG" },
    { title: "Silicone Mobile Holder", imageUrl: "/Images1/Silicone Mobile Holder.JPG" },
    { title: "Silicone O Ring", imageUrl: "/Images1/Silicone O Ring.JPG" },
    { title: "Silicone Rubber Items (A)", imageUrl: "/Images1/Silicone Rubber Items (2).JPG" },
    { title: "Silicone Rubber Items (B)", imageUrl: "/Images1/Silicone Rubber Items (3).JPG" },
    { title: "Silicone Rubber Items", imageUrl: "/Images1/Silicone Rubber Items.JPG" },
    { title: "Silicone Washers", imageUrl: "/Images1/Silicone Washers.JPG" },
    { title: "Teflon", imageUrl: "/Images1/Teflon.png" },
    { title: "Valve Gasket", imageUrl: "/Images1/Valve Gasket.JPG" },
    { title: "Washer", imageUrl: "/Images1/Washer.JPG" }
  ];

  const row1 = products.slice(0, 10);
  const row2 = [...products.slice(10, 19), products[10]];

  const capabilities = [
    { icon: <Settings className="w-6 h-6" />, title: "Rubber Washers & Lathe Cut Flat Washers", text: "High-precision sealing solutions for plumbing, automotive, and industrial assemblies." },
    { icon: <Shield className="w-6 h-6" />, title: "Manhole Rubber Gaskets", text: "Heavy-duty, weather-resistant gaskets designed for infrastructure and municipal requirements." },
    { icon: <CheckCircle2 className="w-6 h-6" />, title: "EPDM O-Rings", text: "Superior chemical and heat-resistant O-rings for demanding environments." },
    { icon: <FlaskConical className="w-6 h-6" />, title: "Custom Silicone Moulded Parts", text: "FDA-grade and high-temp silicone solutions tailored to your specific blueprints." },
    { icon: <Briefcase className="w-6 h-6" />, title: "Rubber Grommets", text: "Durable protection for wiring and through-hole applications." },
    { icon: <Globe2 className="w-6 h-6" />, title: "Global Export Standards", text: "Experienced in navigating shipping and compliance for the USA, EU, and Gulf markets." },
    { icon: <Factory className="w-6 h-6" />, title: "Material Versatility", text: "Expertise in EPDM, Silicone, Nitrile, Neoprene, and Natural Rubber." },
    { icon: <PenTool className="w-6 h-6" />, title: "Custom Tooling", text: "We don't just sell parts; we manufacture solutions based on your specific CAD designs or samples." },
    { icon: <Clock className="w-6 h-6" />, title: "Competitive Lead Times", text: "Efficient manufacturing processes that ensure your supply chain never stops." }
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
      <main className="flex-grow bg-background text-charcoal pt-[80px] md:pt-[120px]">
        
        {/* --- 1. HERO SECTION WITH IMAGE SLIDER (Centred Rubaloy Box Style) --- */}
        <section className="relative min-h-screen md:min-h-[85vh] flex items-center overflow-hidden py-20" aria-label="Introduction">
          <HeroSliderBackground images={heroImages} />
          
          <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text Side */}
              <div className="lg:col-span-7">
                <AnimatedSection className="max-w-4xl text-left bg-black/45 backdrop-blur-md p-8 md:p-12 rounded-xl border border-white/10 shadow-2xl">
                  <span className="inline-block px-4 py-1.5 rounded-sm bg-primary text-white text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
                    Precision Rubber Moulding Solutions Since 1990
                  </span>
                  <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 leading-[1.15] tracking-tight drop-shadow-lg">
                    Trusted global manufacturer and exporter of high-performance rubber components.
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 font-medium mb-10 drop-shadow-md">
                    Engineering excellence delivered from India to the USA, Europe, Africa, and the Gulf.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 mb-10">
                    <Link href="/contact" className="bg-primary hover:bg-primary-light text-white px-10 py-4 text-sm font-bold tracking-widest uppercase transition-all shadow-xl hover:-translate-y-0.5 text-center">
                      Request a Quote
                    </Link>
                    <Link href="/products" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-10 py-4 text-sm font-bold tracking-widest uppercase transition-all text-center">
                       Explore Products
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {trustBadges.map((badge, i) => (
                      <span key={i} className="inline-flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-sm">
                         <CheckCircle2 size={12} className="text-primary-light mr-2 shrink-0" /> {badge}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              {/* Form Side */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <AnimatedSection delay={0.2} className="w-full max-w-md">
                   <div className="bg-white/10 backdrop-blur-xl p-1 rounded-xl border border-white/20 shadow-2xl">
                      <HeroForm />
                   </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. GLOBAL EXPORT NETWORK --- */}
        <section className="bg-charcoal text-white py-20 border-t-4 border-primary relative z-30 overflow-hidden">
          {/* Subtle World Map Overlay */}
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0">
             <Image 
               src="https://www.transparenttextures.com/patterns/world-map.png" 
               alt="World Map Background" 
               fill 
               className="object-cover scale-150 grayscale invert"
             />
          </div>
          
          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 text-center">
            <AnimatedSection>
              <div className="mb-12">
                <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Global Export Network</h2>
                <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">From our manufacturing hub in Mohali, India, we proudly engineered and export to industrial markets worldwide.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { 
                     region: "North America", 
                     countries: "USA & Canada", 
                     icon: <Globe2 className="text-primary-light" size={28} /> 
                   },
                   { 
                     region: "Europe", 
                     countries: "UK, Germany, and France", 
                     icon: <Globe2 className="text-primary-light" size={28} /> 
                   },
                   { 
                     region: "Middle East", 
                     countries: "UAE (Sharjah/Dubai), Saudi Arabia, and Qatar", 
                     icon: <Globe2 className="text-primary-light" size={28} /> 
                   },
                   { 
                     region: "Africa", 
                     countries: "Growing industrial markets across the continent.", 
                     icon: <Globe2 className="text-primary-light" size={28} /> 
                   }
                 ].map((dest, i) => (
                   <AnimatedSection key={i} delay={i * 0.1}>
                      <div className="group relative bg-white/5 backdrop-blur-md p-8 border border-white/10 hover:border-primary transition-all duration-500 rounded-sm hover:-translate-y-1">
                         <div className="mb-6 flex justify-center">
                            <div className="relative">
                               <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                               <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm border border-white/10 group-hover:bg-primary transition-colors">
                                  {dest.icon}
                                </div>
                            </div>
                         </div>
                         <h3 className="font-display font-black text-xl mb-3 tracking-wide">{dest.region}</h3>
                         <p className="text-gray-400 text-sm font-medium leading-relaxed group-hover:text-white transition-colors">{dest.countries}</p>
                      </div>
                   </AnimatedSection>
                 ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* --- Trust Accreditation Strip --- */}
        <a href="/quality" className="block bg-surface py-5 border-b border-gray-200 transition-colors hover:bg-white group cursor-pointer relative z-30 shadow-sm">
           <div className="container mx-auto px-4 flex justify-center items-center text-center">
              <span className="flex items-center text-charcoal font-bold text-xs sm:text-sm tracking-wider uppercase">
                <ShieldCheck className="text-primary mr-3 w-5 h-5 flex-shrink-0" />
                Officially ISO 9001 Certified & Government GST Registered Company
                <span className="hidden md:flex ml-4 text-primary group-hover:translate-x-1 border-b border-primary/30 group-hover:border-primary transition-all items-center">
                  View Official Documents <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </span>
           </div>
        </a>

        {/* --- 3. FEATURED PRODUCTS (Slider) --- */}
        <section id="products" className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <AnimatedSection className="mb-12 text-center max-w-3xl mx-auto">
               <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">Our Featured Products</h2>
               <p className="text-text-muted text-lg">A comprehensive portfolio of high-performance sealing & <Link href="/products" className="text-primary hover:underline">rubber moulded solutions</Link>.</p>
               <div className="w-20 h-1 bg-primary mx-auto mt-8"></div>
            </AnimatedSection>
            
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.33333%); }
              }
              .animate-marquee {
                animation: marquee 10s linear infinite;
              }
            `}</style>
            
            <div className="flex flex-col gap-6 w-full overflow-hidden pb-4">
              <div className="flex w-max animate-marquee gap-8 px-4">
                {[...row1, ...row1, ...row1].map((product, idx) => (
                  <Link href="/products" key={`r1-${idx}`} className="w-[45vw] sm:w-[28vw] md:w-[18vw] lg:w-[12vw] xl:w-[10vw] flex-shrink-0 group block transition-transform hover:scale-105 duration-300">
                    <div className="relative w-full aspect-square overflow-hidden mb-2">
                      <Image src={product.imageUrl} alt={product.title} fill className="object-contain mix-blend-multiply drop-shadow-sm" sizes="(max-width: 768px) 45vw, 15vw" />
                    </div>
                    <div className="text-center px-1">
                      <h3 className="font-display font-bold text-charcoal text-[11px] md:text-xs tracking-wide leading-tight truncate w-full">{product.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="flex w-max animate-marquee gap-8 px-4">
                {[...row2, ...row2, ...row2].map((product, idx) => (
                  <Link href="/products" key={`r2-${idx}`} className="w-[45vw] sm:w-[28vw] md:w-[18vw] lg:w-[12vw] xl:w-[10vw] flex-shrink-0 group block transition-transform hover:scale-105 duration-300">
                    <div className="relative w-full aspect-square overflow-hidden mb-2">
                      <Image src={product.imageUrl} alt={product.title} fill className="object-contain mix-blend-multiply drop-shadow-sm" sizes="(max-width: 768px) 45vw, 15vw" />
                    </div>
                    <div className="text-center px-1">
                      <h3 className="font-display font-bold text-charcoal text-[11px] md:text-xs tracking-wide leading-tight truncate w-full">{product.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="mt-12 text-center">
               <Link href="/products" className="inline-block border-b-2 border-primary text-primary font-bold tracking-widest uppercase pb-1 hover:text-primary-dark transition-colors">
                  View Full Catalogue
               </Link>
            </div>
          </div>
        </section>

        {/* --- 4. FACTORY TOUR VIDEO SECTION --- */}
        <section className="py-20 bg-surface border-b border-gray-200">
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
                 <VideoPlayer src="/bgvideo1.mp4" maxDuration={60} />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* --- 5. CAPABILITIES --- */}
        <section className="py-20 bg-surface border-b border-gray-200">
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

        {/* --- 7. ABOUT PREVIEW --- */}
        <section id="about" className="py-20 bg-white">
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
        <section className="py-20 bg-surface border-t border-gray-200">
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
        <section className="py-20 bg-primary text-center">
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
