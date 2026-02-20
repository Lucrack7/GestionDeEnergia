import { EnergyOverviewCard } from "../components/widgets/EnergyOverviewCard";
import { EnergyChart } from "../components/widgets/EnergyChart";
import { useEnergyStore } from "../stores/energyStore";

export function OverviewPage() {
  const { devices } = useEnergyStore();

  return (
    <div className="page">
      <EnergyOverviewCard />
      <EnergyChart />

      {/* Quick device status */}
      <div className="card">
        <div className="section-title">ESTADO DEL DISPOSITIVO</div>
        <div className="status-chips">
          {devices.map((d) => (
            <div key={d.id} className={`status-chip ${d.isActive ? "status-chip--on" : ""}`}>
              <span className={`status-dot ${d.isActive ? "status-dot--on" : ""}`} />
              {d.icon} {d.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}