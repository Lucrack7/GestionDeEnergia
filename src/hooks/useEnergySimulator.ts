import { useEffect } from "react";
import { useEnergyStore } from "../stores/energyStore";
import { calcTotalWatts, applyFluctuation } from "../utils/calculations";

export function useEnergySimulator() {
  const { devices, alertThreshold, setCurrentWatts, addAlert } = useEnergyStore();

  useEffect(() => {
    const interval = setInterval(() => {
      const base = calcTotalWatts(devices);
      const current = applyFluctuation(base);
      setCurrentWatts(current);

      if (current > alertThreshold) {
        addAlert({
          id: `${Date.now()}-${Math.random()}`,
          message: `High consumption detected: ${current}W`,
          timestamp: new Date(),
          severity: current > alertThreshold * 1.25 ? "critical" : "warning",
          watts: current,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [devices, alertThreshold, setCurrentWatts, addAlert]);
}