import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductCard({
  title,
  description,
  imageUrl,
  href = "#"
}: {
  title: string;
  description: string;
  imageUrl: string;
  href?: string;
}) {
  return (
    <article className="group bg-white rounded-none border border-gray-200 overflow-hidden hover:shadow-premium transition-shadow duration-500 flex flex-col h-full">
      <div className="relative h-72 w-full overflow-hidden bg-surface">
        <Image
          src={imageUrl}
          alt={`Image of ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-500" />
      </div>
      <div className="p-8 md:p-10 flex-grow flex flex-col text-left">
        <h3 className="font-display font-medium text-2xl text-charcoal mb-4 break-words leading-tight">
          {title}
        </h3>
        <p className="text-text-muted mb-8 leading-relaxed text-sm">
          {description}
        </p>
        <div className="mt-auto">
          <Link 
            href={href}
            aria-label={`Learn more about ${title}`}
            className="inline-flex items-center text-primary font-bold text-sm tracking-wide group-hover:text-primary-dark transition-colors"
          >
            VIEW DETAILS <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </article>
  );
}
