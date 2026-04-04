"use client";
import { useState, useEffect } from "react";
import { Mail, Phone, Clock } from "lucide-react";

export default function TopBar() {
  const [timeStr, setTimeStr] = useState("");
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) + " | " + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit'}) + " IST"); 
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-charcoal text-gray-300 h-10 hidden md:flex items-center px-4 md:px-8 lg:px-12 text-[13px] uppercase font-semibold tracking-[0.1em] w-full border-b border-gray-700/50">
      <div className="container mx-auto flex justify-between items-center w-full">
        <div className="flex items-center gap-6">
          <a href="mailto:info@hitechrubberindia.com" className="flex items-center hover:text-white transition-colors">
            <Mail size={14} className="mr-2 text-primary" /> info@hitechrubberindia.com
          </a>
          <a href="tel:+919876543210" className="flex items-center hover:text-white transition-colors">
            <Phone size={14} className="mr-2 text-primary" /> +91 98765 43210
          </a>
        </div>
        {timeStr && (
          <div className="flex items-center text-primary-light font-bold">
            <Clock size={14} className="mr-2" /> {timeStr}
          </div>
        )}
      </div>
    </div>
  );
}
