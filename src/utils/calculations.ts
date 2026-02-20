import type { Device } from "../types/energy";

export function calcTotalWatts(devices: Device[]): number {
  return devices.filter((d) => d.isActive).reduce((sum, d) => sum + d.watts, 0);
}

export function applyFluctuation(watts: number): number {
  return Math.round(watts * (1 + (Math.random() - 0.5) * 0.08));
}

export function formatKW(watts: number): string {
  return `${(watts / 1000).toFixed(2)} kW`;
}

export function estimateDailyKWh(watts: number): number {
  return parseFloat(((watts * 24) / 1000).toFixed(1));
}

export function estimateDailyCost(watts: number, rate = 0.15): number {
  return parseFloat((estimateDailyKWh(watts) * rate).toFixed(2));
}

export function estimateMonthlyCost(watts: number, rate = 0.15): number {
  return parseFloat((estimateDailyKWh(watts) * 30 * rate).toFixed(2));
}

export function formatDateTime(date: Date): string {
  return date.toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

export function thresholdPercent(watts: number, threshold: number): number {
  return Math.min(Math.round((watts / threshold) * 100), 150);
}