import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { PenTool } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom Rubber Moulded Parts & Washers | Hi-Tech Rubber",
  description: "Browse our comprehensive catalog of custom rubber moulded parts, lathe cut rubber washers, manhole rubber washers, rubber grommets, and rubber orings.",
  keywords: "lathe cut rubber washers, rubber flat washers, rubber spacers, rubber wristbands, silicone rubber wristbands, manhole rubber washers",
};

export default function ProductsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Do you manufacture custom rubber moulded parts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, as a leading rubber moulded factory in India, we specialize in producing custom rubber moulded parts from specific CAD drawings or samples, including compression rubber moulded parts and custom silicone washers."
      }
    }, {
      "@type": "Question",
      "name": "What type of rubber washers do you produce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We manufacture a vast range of rubber washers including lathe cut rubber washers, rubber flat washers, and heavy-duty manhole rubber washers designed for infrastructure and municipal applications."
      }
    }]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Lathe Cut Rubber Washers" },
      { "@type": "ListItem", "position": 2, "name": "Rubber Washers" },
      { "@type": "ListItem", "position": 3, "name": "Rubber Gaskets" },
      { "@type": "ListItem", "position": 4, "name": "Rubber Grommets" },
      { "@type": "ListItem", "position": 5, "name": "Rubber O-Rings" },
      { "@type": "ListItem", "position": 6, "name": "Compression Rubber Moulded Parts" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      
      <Header />
      <main className="flex-grow bg-background text-charcoal pt-24">
        
        {/* Intro Section with SEO Content */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
            <AnimatedSection>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-charcoal mb-8 leading-tight">
                Our Manufacturing Products
              </h1>
              <div className="w-24 h-1.5 bg-primary mx-auto mb-10"></div>
              
              <div className="prose prose-lg mx-auto text-text-muted text-left md:text-center leading-relaxed font-light">
                <p>
                  As a premier <strong>rubber moulded factory in India</strong>, Hi-Tech Rubber Industries specializes in manufacturing high-precision <strong>custom rubber moulded parts</strong> for global OEMs and tier-1 suppliers. Our extensive product portfolio includes engineered <Link href="#products" className="text-primary hover:underline">rubber washers</Link>, robust <strong>rubber gaskets</strong>, protective <strong>rubber grommets</strong>, and dynamic <strong>rubber orings</strong>. 
                </p>
                <p>
                  We pride ourselves on delivering exact specifications—whether you require large-scale <strong>compression rubber moulded parts</strong>, <Link href="/quality" className="text-primary hover:underline">rubber spacers</Link>, or highly specialized <strong>custom silicone washers</strong>. Explore our complete catalogue of sealing and moulded solutions globally exported from Mohali below.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Dynamic Gallery Section */}
        <section className="py-24 bg-white border-y border-gray-100" id="products">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <AnimatedSection delay={0.2}>
              <ProductGallery />
            </AnimatedSection>
          </div>
        </section>

        {/* Custom Development Closing Section */}
        <section className="py-24 bg-charcoal text-white text-center border-t-4 border-primary">
          <div className="container mx-auto px-4 max-w-4xl">
            <AnimatedSection>
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <PenTool className="text-primary-light w-8 h-8" />
              </div>
              <h2 className="font-display text-4xl font-bold mb-6">Custom Engineering & Development</h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
                Can't find the exact standard component like our <strong>silicone rubber wristbands</strong> or <strong>manhole rubber washers</strong>? Our in-house tool room and lab allow us to manufacture completely bespoke rubber products directly from your CAD drawings or physical samples.
              </p>
              <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all shadow-premium inline-block">
                Submit Your Drawing
              </Link>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
