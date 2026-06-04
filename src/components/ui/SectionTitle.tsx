interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionTitle({ title, subtitle, light }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2
        className={[
          "text-2xl font-bold tracking-tight sm:text-3xl",
          light ? "text-white" : "text-teal",
        ].join(" ")}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={[
            "mt-3 text-base leading-relaxed",
            light ? "text-cream/85" : "text-slate",
          ].join(" ")}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
