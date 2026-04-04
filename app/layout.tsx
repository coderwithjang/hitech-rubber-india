import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { MessageCircle } from "lucide-react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Rubber Moulded Parts Manufacturer India | Hi-Tech Rubber Export",
  description: "Expert manufacturer of custom silicone rubber moulded parts, lathe cut rubber washers, manhole rubber washers, and EPDM O-rings in India exporting to USA, Canada, Gulf, and Europe.",
  keywords: "Lathe cut rubber washers, rubber washers, custom silicone rubber moulded parts, Rubber wristbands, silicone rubber wristbands, rubber grommets, rubber gaskets, Manhole rubber washers, rubber moulded parts, rubber moulded factory in India, Compression rubber moulded parts, custom silicone washers, rubber orings, rubber spacers, rubber flat washers",
  icons: {
    icon: "/logo.gif",
    apple: "/logo.gif",
  },
  alternates: {
    canonical: 'https://hitechrubberindia.com',
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Hi-Tech Rubber Industries',
    foundingDate: '1990',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mohali',
      addressCountry: 'India',
    },
    description: 'Premier rubber moulding factory in India specializing in custom rubber moulded parts, lathe cut washers, and export manufacturing.',
    areaServed: ['USA', 'Canada', 'Europe', 'Africa', 'Middle East']
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-background text-charcoal antialiased min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary-dark overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        
        {/* Global Floating WhatsApp Button */}
        <a 
          href="https://wa.me/91XXXXXXXXXX" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" fill="currentColor" />
          <span className="absolute right-full mr-4 bg-charcoal text-white text-xs font-bold py-1.5 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Chat with Sales
          </span>
        </a>
      </body>
    </html>
  );
}
