export default function SectionHeader({
  title,
  subtitle,
  centered = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
        {title}
      </h2>
      <div
        className={`w-20 h-1.5 bg-primary ${centered ? "mx-auto" : ""} mt-6`}
      />
    </div>
  );
}
