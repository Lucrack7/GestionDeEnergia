interface StatCardProps {
  label: string;
  value: string | number;
  unit: string;
  alert?: boolean;
}

export function StatCard({ label, value, unit, alert = false }: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-card__label">{label}</div>
      <div className={`stat-card__value ${alert ? "stat-card__value--alert" : ""}`}>
        {value}
      </div>
      <div className="stat-card__unit">{unit}</div>
    </div>
  );
}