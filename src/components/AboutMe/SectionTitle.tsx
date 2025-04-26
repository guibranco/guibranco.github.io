interface SectionTitleProps {
  title: string;
  color: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle, color }: SectionTitleProps) => {
  return (
    <div className="text-center mb-8">
      <h3 className="text-2xl font-semibold mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-gray-300 mb-2">{subtitle}</p>}
      <div className="h-1 w-full rounded-full" style={{ backgroundColor: color }} />
    </div>
  );
};

export default SectionTitle;
