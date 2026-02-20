import { useEnergyStore } from "../../stores/energyStore";
import { StatCard } from "../ui/StatCard";
import {
  formatKW,
  estimateDailyKWh,
  estimateDailyCost,
  estimateMonthlyCost,
  thresholdPercent,
} from "../../utils/calculations";
import { COST_PER_KWH } from "../../services/mockData";

export function EnergyOverviewCard() {
  const { currentWatts, alertThreshold, devices } = useEnergyStore();

  const activeCount = devices.filter((d) => d.isActive).length;
  const isAlert     = currentWatts > alertThreshold;
  const percent     = thresholdPercent(currentWatts, alertThreshold);
  const dailyKWh    = estimateDailyKWh(currentWatts);
  const dailyCost   = estimateDailyCost(currentWatts, COST_PER_KWH);
  const monthlyCost = estimateMonthlyCost(currentWatts, COST_PER_KWH);

  return (
    <div className="overview-grid">
      <StatCard
        label="Consumo Actual"
        value={formatKW(currentWatts)}
        unit="kW"
        alert={isAlert}
      />
      <StatCard
        label="Consumo Diario Estimado"
        value={dailyKWh}
        unit="kWh"
      />
      <StatCard
        label="Costo Diario"
        value={`$${dailyCost}`}
        unit="Estimado"
      />
      <StatCard
        label="Costo Mensual"
        value={`$${monthlyCost}`}
        unit="Estimado"
      />
      <StatCard
        label="Dispositivos Activos"
        value={activeCount}
        unit={`de ${devices.length} total`}
      />
      <div className="stat-card threshold-card">
        <div className="stat-card__label">Umbral de alerta</div>
        <div className={`stat-card__value ${isAlert ? "stat-card__value--alert" : ""}`}>
          {percent}%
        </div>
        <div className="threshold-bar">
          <div
            className={`threshold-bar__fill ${isAlert ? "threshold-bar__fill--alert" : ""}`}
            style={{ width: `${Math.min(percent, 100)}%` }}
          />
        </div>
        <div className="stat-card__unit">
          {isAlert ? "⚠ Umbral superado" : `Límite: ${(alertThreshold / 1000).toFixed(1)} kW`}
        </div>
      </div>
    </div>
  );
}