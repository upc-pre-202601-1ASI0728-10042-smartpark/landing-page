interface LogoProps {
  className?: string;
  height?: number;
}

export function Logo({ className = "", height = 40 }: LogoProps) {
  return (
    <a href="#" className={`inline-flex shrink-0 items-center ${className}`}>
      <img
        src="/logo-smartpark.png"
        alt="SmartPark"
        height={height}
        className="h-auto w-auto"
        style={{ height }}
      />
    </a>
  );
}
