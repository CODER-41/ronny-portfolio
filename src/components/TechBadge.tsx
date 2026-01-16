interface TechBadgeProps {
  name: string;
  icon: string;
}

const TechBadge = ({ name, icon }: TechBadgeProps) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 hover:bg-secondary/30 rounded-lg transition-colors">
      <span className="text-3xl">{icon}</span>
      <span className="text-sm font-mono text-muted-foreground">{name}</span>
    </div>
  );
};

export default TechBadge;
