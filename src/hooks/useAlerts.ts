import { useEnergyStore } from "../stores/energyStore";
import type { Alert } from "../types/energy";

export function useAlerts() {
  const { alerts, clearAlerts, currentWatts, alertThreshold } = useEnergyStore();

  const hasActiveAlert = currentWatts > alertThreshold;
  const criticalAlerts = alerts.filter((a: Alert) => a.severity === "critical");
  const warningAlerts  = alerts.filter((a: Alert) => a.severity === "warning");

  const latestAlert = alerts[0] ?? null;

  return {
    alerts,
    clearAlerts,
    hasActiveAlert,
    criticalAlerts,
    warningAlerts,
    latestAlert,
    totalCount: alerts.length,
  };
}