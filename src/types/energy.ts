export interface Device {
  id: string;
  name: string;
  icon: string;
  watts: number;
  room: string;
  isActive: boolean;
}

export interface ChartDataPoint {
  time: string;
  kWh: number;
}

export type ChartPeriod = "daily" | "weekly" | "monthly";
export type AlertSeverity = "warning" | "critical";

export interface Alert {
  id: string;
  message: string;
  timestamp: Date;
  severity: AlertSeverity;
  watts: number;
}

export interface EnergyState {
  devices: Device[];
  alerts: Alert[];
  currentWatts: number;
  alertThreshold: number;
  darkMode: boolean;
  toggleDevice: (id: string) => void;
  setCurrentWatts: (w: number) => void;
  addAlert: (alert: Alert) => void;
  clearAlerts: () => void;
  setDarkMode: (v: boolean) => void;
  setAlertThreshold: (v: number) => void;
}

