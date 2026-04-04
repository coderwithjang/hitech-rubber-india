import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Mail, Navigation } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-12" aria-label="Site Footer">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <div className="bg-white p-2 rounded-md inline-block">
                <Image src="/logo.gif" alt="Hi-Tech Rubber Logo" width={200} height={60} className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium custom rubber moulding factory based in India, delivering engineering excellence since 1990. ISO compliant manufacturing mapped to global standards.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-lg mb-6 text-white pb-2 border-b border-gray-800 inline-block w-full">Core Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/products" className="hover:text-primary-light transition-colors">Lathe Cut Rubber Washers</Link></li>
              <li><Link href="/products" className="hover:text-primary-light transition-colors">Manhole Rubber Gaskets</Link></li>
              <li><Link href="/products" className="hover:text-primary-light transition-colors">EPDM O-Rings</Link></li>
              <li><Link href="/products" className="hover:text-primary-light transition-colors">Custom Silicone Parts</Link></li>
              <li><Link href="/products" className="hover:text-primary-light transition-colors">Rubber Grommets</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-lg mb-6 text-white pb-2 border-b border-gray-800 inline-block w-full">Export Geography</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Navigation size={16} className="text-primary-light mt-0.5" />
                <span><strong>North America:</strong> USA & Canada</span>
              </li>
              <li className="flex items-start gap-3">
                <Navigation size={16} className="text-primary-light mt-0.5" />
                <span><strong>Europe:</strong> UK, Germany, France</span>
              </li>
              <li className="flex items-start gap-3">
                <Navigation size={16} className="text-primary-light mt-0.5" />
                <span><strong>Middle East:</strong> UAE, Saudi, Qatar</span>
              </li>
              <li className="flex items-start gap-3">
                <Navigation size={16} className="text-primary-light mt-0.5" />
                <span><strong>Africa:</strong> Industrial zones</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-lg mb-6 text-white pb-2 border-b border-gray-800 inline-block w-full">Connect</h4>
            <div className="space-y-5 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-light shrink-0" />
                <p>38,000 sq ft Factory<br/>Mohali, India</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-light shrink-0" />
                <a href="mailto:info@hitechrubberindia.com" className="hover:text-white transition-colors">Contact Sales</a>
              </div>
              <div className="pt-4">
                <Link href="/contact" className="inline-flex items-center text-primary-light font-semibold hover:text-white transition-colors text-sm uppercase tracking-wider">
                  Request Quote <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Hi-Tech Rubber Industries. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <Link href="/quality" className="hover:text-white transition-colors">ISO Standards</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
