import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Scale, Scissors, ThermometerSun, Flame, Droplets, Activity, Dumbbell, Ruler, CheckCircle2 } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Testing & R&D Facilities | Hi-Tech Rubber",
  description: "Explore our in-house rubber testing and R&D facilities including tensile testing, extreme temperature endurance, and our comprehensive rubber elastomers comparison chart.",
};

const machines = [
  { name: "Tensile Testing Machine", desc: "Capacity: 250 kgs. Ensures optimal rupture threshold.", icon: Scale },
  { name: "Dumble Cutting", desc: "Press with requested dies for precise specimen extraction.", icon: Scissors },
  { name: "Ageing Testing Oven", desc: "Simulates thermal degradation over extended periods.", icon: ThermometerSun },
  { name: "Muffle Furnace", desc: "Operates at extreme temperatures for checking ash contents.", icon: Flame },
  { name: "Specific Gravity Balance", desc: "High-precision density testing matrix.", icon: Droplets },
  { name: "Elongation Testing Machine", desc: "Verifies maximum continuous stretch tolerance.", icon: Activity },
  { name: "Hardness Tester", desc: "Shore 'A' hardness tester to verify the rigidity of each batch.", icon: Dumbbell },
  { name: "Dimension Testing", desc: "Validation using Electronic vernier calipers & Dial Gauges.", icon: Ruler }
];

const rubbers = [
  "Natural Rubber", "SBR", "EPDM", "Neoprene", "Nitrile", "Silicone", "HNBR", "Viton®", "Fluorosilicone"
];

const technicalData = [
  { property: "Chemical Name", values: ["Polyisoprene", "Styrene Butadiene", "Ethylene Propylene Diene", "Polychloroprene", "Nitrile Butadiene", "Polysiloxane", "Hydrogenated Nitrile", "Fluorocarbon", "Fluorosilicone"] },
  { property: "Nomenclature", values: ["NR", "SBR", "EPDM", "CR", "NBR", "Si", "HNBR", "FPM", "FSi"] },
  { property: "Cost Factor", values: ["1", "1", "1", "2", "2", "6", "8", "15", "40"] },
  { property: "Hardness Range", values: ["30-95°", "40-95°", "30-85°", "30-90°", "40-100°", "40-80°", "50-95°", "50-95°", "40-80°"] },
  { property: "Heat Resistance (°c) Max Cont.", values: ["75°c", "85°c", "130°c", "95°c", "100°c", "205°c", "125°c", "205°c", "180°c"] },
  { property: "Heat Resistance (°c) Max Int.", values: ["105°c", "115°c", "150°c", "125°c", "130°c", "300°c", "160°c", "300°c", "200°c"] },
  { property: "Low Temp Resistance", values: ["-60°c", "-55°c", "-50°c", "-40°c", "-20°c", "-60°c (-80°c)", "-30°c", "-20°c", "-60°c"] },
  { property: "Oxidation Resistance", values: ["Fair", "Fair", "Excellent", "Very Good", "Good", "Excellent", "Excellent", "Outstanding", "Excellent"] },
  { property: "Oil Resistance", values: ["Poor", "Poor", "Fair", "Excellent", "Excellent", "Excellent", "Excellent", "Excellent", "Excellent"] },
  { property: "Fuel Resistance", values: ["Unsatisfactory", "Unsatisfactory", "Unsatisfactory", "Poor", "Fair", "Unsuitable", "Good", "Excellent", "Fair"] },
  { property: "Physical Strength", values: ["Excellent", "Good", "Good", "Good", "Good", "Poor", "Good", "Good", "Poor"] },
  { property: "Compression Set", values: ["Good", "Good", "Good", "Fair to Good", "Good", "Good", "Good", "Good", "Good"] },
  { property: "Tear & Abrasion", values: ["Excellent", "Good", "Good", "Good", "Good", "Poor", "Very Good", "Good", "Poor"] },
  { property: "Resilience", values: ["Excellent", "Good", "Very Good", "Very Good", "Good", "Good", "Fair", "Fair", "Fair"] },
  { property: "Permeability to Gases", values: ["Poor", "Fairly Low", "Fairly Low", "Low", "Low", "Fairly Low", "Low", "Very Low", "Fairly Low"] },
  { property: "Electrical Strength", values: ["Excellent", "Excellent", "Excellent", "Good", "Poor", "Excellent", "Poor", "Good", "Excellent"] },
  { property: "Flame Resistance", values: ["Poor", "Poor", "Poor", "Self-extinguish", "Poor", "Good", "Poor", "Self-extinguish", "Self-extinguish"] },
  { property: "Water Resistance", values: ["Very Good", "Good", "Excellent", "Good", "Good", "Good", "Very Good", "Good", "Good"] },
];

export default function TestingPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background text-charcoal pt-[104px]">
        
        {/* Page Header */}
        <section className="bg-charcoal text-white py-20 border-b-4 border-primary relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('/Images/DSC_8954.JPG')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
           <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 text-center max-w-4xl">
              <AnimatedSection>
                <div className="inline-flex items-center text-primary-light font-bold tracking-[0.2em] uppercase text-xs mb-6 px-3 py-1 bg-white/5 border border-white/10 rounded-sm">
                  <CheckCircle2 size={14} className="mr-2" /> Global Standards Setup
                </div>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight drop-shadow-md">
                  In-House Testing <span className="text-primary-light">& R&D Facility</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed mb-4">
                  Uniform quality is paramount. Every manufactured batch is routed through our rigorous internal laboratory before dispatch, ensuring absolute compliance with OEM specifications.
                </p>
              </AnimatedSection>
           </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Laboratory Capabilities</h2>
               <div className="w-16 h-1 bg-primary mx-auto"></div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {machines.map((machine, idx) => {
                const IconComponent = machine.icon;
                return (
                  <AnimatedSection key={idx} delay={idx * 0.1}>
                    <div className="bg-white border border-gray-100 p-8 h-full hover:border-primary/40 hover:shadow-premium transition-all duration-300 group">
                      <div className="w-12 h-12 bg-surface flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary border border-gray-100 group-hover:border-primary">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="font-display font-bold text-charcoal text-lg mb-3">{machine.name}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{machine.desc}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Chart */}
        <section className="py-24 bg-white border-t border-gray-200">
           <div className="container mx-auto px-4 md:px-8 lg:px-12">
              <AnimatedSection className="max-w-4xl mb-12">
                 <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Rubber Elastomers Comparison Chart</h2>
                 <div className="w-16 h-1 bg-primary mb-6"></div>
                 <p className="text-text-muted text-lg">
                   Comprehensive engineering data analyzing the physical, thermal, and chemical resistances of our core manufacturing compounds. Use this chart to determine the appropriate elastomer for your specific operational application.
                 </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                 <div className="w-full overflow-x-auto border border-gray-200 shadow-sm rounded-sm bg-surface hide-scrollbar">
                    <table className="w-full text-left border-collapse min-w-[1200px]">
                       <thead>
                          <tr>
                             <th className="bg-charcoal text-white font-bold text-sm tracking-wider uppercase p-5 border-b border-gray-700 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.3)]">
                                Property / Factor
                             </th>
                             {rubbers.map((rubber, idx) => (
                               <th key={idx} className="bg-charcoal-light text-primary-light font-bold text-sm p-5 border-b border-gray-700 whitespace-nowrap min-w-[140px]">
                                 {rubber}
                               </th>
                             ))}
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-200">
                          {technicalData.map((row, rIdx) => (
                             <tr key={rIdx} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-sm font-bold text-charcoal bg-surface sticky left-0 z-10 border-r border-gray-200 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] w-[250px]">
                                   {row.property}
                                </td>
                                {row.values.map((val, vIdx) => (
                                   <td key={vIdx} className="p-4 text-sm text-text-muted border-r border-gray-100 last:border-r-0">
                                      <span className={`inline-flex px-2 py-1 rounded-sm ${
                                        val === "Excellent" || val === "Outstanding" || val === "Very Good" ? "bg-green-50 text-green-700 font-medium" : 
                                        val === "Poor" || val === "Unsatisfactory" || val === "Unsuitable" ? "bg-red-50 text-red-700" : ""
                                      }`}>
                                        {val}
                                      </span>
                                   </td>
                                ))}
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
                 <div className="mt-4 text-xs font-medium text-gray-400 text-right uppercase tracking-widest flex items-center justify-end">
                    ← Swipe horizontally to view full table on mobile
                 </div>
              </AnimatedSection>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
