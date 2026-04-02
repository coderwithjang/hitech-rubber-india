"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";

export default function ProductGallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Washers", "Custom Silicone", "Gaskets & Rings", "Moulded Parts"];

  const products = [
    { title: "Lathe Cut Rubber Washers", category: "Washers", imageUrl: "/Images/Rubber Washers.JPG" },
    { title: "Rubber Washers", category: "Washers", imageUrl: "/Images/Rubber Washer.JPG" },
    { title: "Rubber Flat Washers", category: "Washers", imageUrl: "/Images/Washer.JPG" },
    { title: "Rubber Gaskets", category: "Gaskets & Rings", imageUrl: "/Images/Flange Gasket.JPG" },
    { title: "Manhole Rubber Washers", category: "Washers", imageUrl: "/Images/Manhole Gasket.JPG" },
    { title: "Rubber Grommets", category: "Gaskets & Rings", imageUrl: "/Images/Gripper Seal.JPG" },
    { title: "Rubber O-Rings", category: "Gaskets & Rings", imageUrl: "/Images/O-Ring.JPG" },
    { title: "Rubber Spacers", category: "Moulded Parts", imageUrl: "/Images/DSC_9357.JPG" },
    { title: "Custom Silicone Washers", category: "Custom Silicone", imageUrl: "/Images/Silicone Washers.JPG" },
    { title: "Custom Silicone Rubber Moulded Parts", category: "Custom Silicone", imageUrl: "/Images/Silicone Rubber Items.JPG" },
    { title: "Compression Rubber Moulded Parts", category: "Moulded Parts", imageUrl: "/Images/DSC_9254.JPG" },
    { title: "Rubber Wristbands", category: "Custom Silicone", imageUrl: "/Images/Silicone Mobile Holder.JPG" }
  ];

  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <>
      {/* Filter Navigation */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-200 pb-6">
        <div className="flex items-center text-text-muted font-bold tracking-wider uppercase text-sm mb-6 md:mb-0">
          <Filter className="w-4 h-4 mr-2 text-primary" /> Filter By Form
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 text-sm font-bold transition-colors ${
                activeFilter === cat 
                  ? "bg-primary text-white border-primary" 
                  : "bg-surface text-charcoal border border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[500px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={product.title}
              className="group bg-white border border-gray-100 shadow-sm hover:shadow-premium transition-all overflow-hidden flex flex-col items-center p-6 text-center cursor-pointer"
            >
               <div className="relative w-48 h-48 mb-6 overflow-hidden">
                 <Image 
                   src={product.imageUrl} 
                   alt={`${product.title} manufactured in India`} 
                   fill 
                   className="object-contain group-hover:scale-110 transition-transform duration-500" 
                 />
               </div>
               <h3 className="font-display font-bold text-lg text-charcoal mb-2 group-hover:text-primary transition-colors">
                 {product.title}
               </h3>
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{product.category}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
