import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import {ShieldCheck, Ruler, Settings } from "lucide-react";
import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teflon (PTFE) Washers | Sizes & Specifications | Hi-Tech Rubber",
  description: "High-performance Teflon (PTFE) Washers offering exceptional chemical resistance, high-temperature tolerance, and precise dimensions.",
};

const teflonSizes = [
  { sr: 1, id: "3.00", od: "6.00", th: "1.00" },
  { sr: 2, id: "4.00", od: "8.00", th: "1.00" },
  { sr: 3, id: "5.00", od: "9.00", th: "1.00" },
  { sr: 4, id: "6.00", od: "12.00", th: "1.00" },
  { sr: 5, id: "7.00", od: "12.00", th: "1.00" },
  { sr: 6, id: "8.00", od: "10.00", th: "1.00" }, // As per source image
  { sr: 7, id: "9.00", od: "15.00", th: "1.60" },
  { sr: 8, id: "10.00", od: "14.00", th: "1.60" },
  { sr: 9, id: "11.00", od: "17.00", th: "1.50" },
  { sr: 10, id: "12.00", od: "16.00", th: "1.40" },
  { sr: 11, id: "13.00", od: "19.00", th: "1.60" },
  { sr: 12, id: "14.00", od: "20.00", th: "1.50" },
  { sr: 13, id: "15.00", od: "24.00", th: "1.60" },
  { sr: 14, id: "16.00", od: "22.00", th: "2.00" },
  { sr: 15, id: "17.00", od: "23.00", th: "2.20" },
  { sr: 16, id: "18.00", od: "24.30", th: "1.50" },
  { sr: 17, id: "19.00", od: "25.00", th: "2.40" },
  { sr: 18, id: "20.00", od: "26.00", th: "3.00" },
  { sr: 19, id: "21.00", od: "27.00", th: "2.00" },
  { sr: 20, id: "22.00", od: "28.00", th: "3.00" },
];

export default function TeflonWashersPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-surface text-charcoal pt-[104px]">
        
        {/* Product Hero */}
        <section className="bg-white py-16 md:py-24 border-b border-gray-200">
           <div className="container mx-auto px-4 md:px-8 lg:px-12">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                 
                 {/* Product Image */}
                 <AnimatedSection className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-lg aspect-square bg-white border border-gray-100 shadow-premium p-8 group">
                       <Image 
                         src="/Images1/Teflon.png" 
                         alt="Teflon PTFE Washers Collection" 
                         fill 
                         className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 p-8"
                         sizes="(max-width: 768px) 100vw, 50vw"
                       />
                       <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold tracking-widest uppercase px-3 py-1 shadow-sm">
                         High Performance
                       </div>
                    </div>
                 </AnimatedSection>
                 
                 {/* Product Details */}
                 <div className="w-full lg:w-1/2 space-y-8">
                    <AnimatedSection delay={0.1}>
                       <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight text-charcoal">
                         Teflon (PTFE) <br/><span className="text-primary">Washers</span>
                       </h1>
                       <p className="text-lg md:text-xl text-text-muted leading-relaxed">
                         Polytetrafluoroethylene (PTFE) washers are engineered for the most demanding operational environments. Known for universally resisting aggressive chemicals and extreme temperatures, these washers outlast standard elastomers in hostile assemblies.
                       </p>
                    </AnimatedSection>
                    
                    <AnimatedSection delay={0.2}>
                       <ul className="space-y-4 mb-8">
                         <li className="flex items-start">
                           <ShieldCheck className="text-primary shrink-0 mr-3 mt-1" size={20} />
                           <div>
                             <span className="font-bold text-charcoal block">Exceptional Chemical Resistance</span>
                             <span className="text-sm text-text-muted">Impervious to almost all industrial chemicals and solvents.</span>
                           </div>
                         </li>
                         <li className="flex items-start">
                           <Settings className="text-primary shrink-0 mr-3 mt-1" size={20} />
                           <div>
                             <span className="font-bold text-charcoal block">Extremely Low Coefficient of Friction</span>
                             <span className="text-sm text-text-muted">Prevents striction and wear in dynamic mechanical assemblies.</span>
                           </div>
                         </li>
                         <li className="flex items-start">
                           <Ruler className="text-primary shrink-0 mr-3 mt-1" size={20} />
                           <div>
                             <span className="font-bold text-charcoal block">High Thermal Stability</span>
                             <span className="text-sm text-text-muted">Maintains structural integrity across a vast temperature spectrum.</span>
                           </div>
                         </li>
                       </ul>
                    </AnimatedSection>
                    
                    <AnimatedSection delay={0.3}>
                       <Link 
                         href="/contact" 
                         className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all shadow-premium inline-flex items-center"
                       >
                         Request Bulk Quote
                       </Link>
                    </AnimatedSection>
                 </div>

              </div>
           </div>
        </section>

        {/* Specifications Data Table */}
        <section className="py-24 bg-surface">
           <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-5xl">
              <AnimatedSection className="text-center mb-12">
                 <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Standard PTFE Washer Sizes</h2>
                 <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                 <p className="text-text-muted max-w-2xl mx-auto">
                   Review our catalog of standard internal diameters (ID), outer diameters (OD), and thicknesses (TH). Custom measurements can be fabricated in our tool room upon request.
                 </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                 <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
                    <div className="overflow-x-auto hide-scrollbar">
                       <table className="w-full text-center border-collapse">
                          <thead>
                             <tr className="bg-charcoal text-white">
                                <th className="font-bold text-xs sm:text-sm tracking-wider uppercase p-4 border-b border-gray-700 w-24">Sr No</th>
                                <th className="font-bold text-xs sm:text-sm tracking-wider uppercase p-4 border-b border-gray-700">Internal <br/>Diameter (ID)</th>
                                <th className="font-bold text-xs sm:text-sm tracking-wider uppercase p-4 border-b border-gray-700">Outer <br/>Diameter (OD)</th>
                                <th className="font-bold text-xs sm:text-sm tracking-wider uppercase p-4 border-b border-gray-700">Thickness <br/>(TH)</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                             {teflonSizes.map((row) => (
                                <tr key={row.sr} className="hover:bg-surface/50 transition-colors">
                                   <td className="p-3 text-sm font-bold text-gray-400 border-r border-gray-100">{row.sr}</td>
                                   <td className="p-3 text-sm md:text-base font-bold text-charcoal border-r border-gray-100">{row.id}</td>
                                   <td className="p-3 text-sm md:text-base font-bold text-charcoal border-r border-gray-100">{row.od}</td>
                                   <td className="p-3 text-sm md:text-base font-bold text-primary">{row.th}</td>
                                </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>
              </AnimatedSection>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
