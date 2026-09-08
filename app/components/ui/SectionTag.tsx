interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTag({ children, className = "" }: SectionTagProps) {
  return (
    <p className={`section-tag mb-3 ${className}`}>{children}</p>
  );
}
