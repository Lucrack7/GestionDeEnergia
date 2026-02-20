import { AlertsWidget } from "../components/widgets/AlertsWidget";
import { useEnergyStore } from "../stores/energyStore";

export function AlertsPage() {
  const { alertThreshold } = useEnergyStore();
  return (
    <div className="page">
      <p className="page__hint">
        Las alertas se activan cuando el consumo excede{" "}
        <strong>{(alertThreshold / 1000).toFixed(1)} kW</strong>.
        Ajuste el umbral en Configuración.
      </p>
      <AlertsWidget />
    </div>
  );
}