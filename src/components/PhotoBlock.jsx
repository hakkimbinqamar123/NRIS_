export default function PhotoBlock({ icon: Icon, label, className = "", tone = "primary" }) {
  const tones = {
    primary: "from-primary/90 to-primary-dark",
    amber: "from-accent/90 to-orange-500",
  };
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${tones[tone]} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 0, transparent 30%), radial-gradient(circle at 80% 80%, white 0, transparent 30%)",
        }}
      />
      <div className="relative flex flex-col items-center gap-3 text-white">
        {Icon && <Icon size={48} strokeWidth={1.5} />}
        {label && <span className="text-sm font-medium tracking-wide opacity-90">{label}</span>}
      </div>
    </div>
  );
}
