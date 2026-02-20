import type { Device, ChartDataPoint } from "../types/energy";

export const INITIAL_DEVICES: Device[] = [
  { id: "ac",     name: "Aire Acondicionado", icon: "❄️",  watts: 1500, room: "Sala de estar", isActive: false },
  { id: "fridge", name: "Refrigerador",     icon: "🧊",  watts: 150,  room: "Cocina",      isActive: true  },
  { id: "washer", name: "Lavadora",         icon: "🫧",  watts: 500,  room: "Lavandería", isActive: false },
  { id: "tv",     name: "Televisión Inteligente", icon: "📺",  watts: 120,  room: "Sala de estar", isActive: true  },
  { id: "heater", name: "Calentador de Agua", icon: "🔥",  watts: 4000, room: "Baño",        isActive: false },
  { id: "lights", name: "Luces (Todas)",    icon: "💡",  watts: 200,  room: "Casa Entera", isActive: true  },
  { id: "oven",   name: "Horno Eléctrico",    icon: "🍳",  watts: 2400, room: "Cocina",     isActive: false },
  { id: "pc",     name: "Computadora de Escritorio",       icon: "🖥️",  watts: 350,  room: "Oficina",      isActive: false },
];

export function generateHourlyData(baseWatts: number): ChartDataPoint[] {
  return Array.from({ length: 24 }, (_, i) => ({
    time: `${String(i).padStart(2, "0")}:00`,
    kWh: parseFloat(((baseWatts * (0.6 + Math.random() * 0.8)) / 1000).toFixed(2)),
  }));
}

export function generateWeeklyData(): ChartDataPoint[] {
  const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  return days.map((d) => ({ time: d, kWh: parseFloat((8 + Math.random() * 18).toFixed(1)) }));
}

export function generateMonthlyData(): ChartDataPoint[] {
  const months = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
  return months.map((m) => ({ time: m, kWh: parseFloat((180 + Math.random() * 160).toFixed(0)) }));
}

export const ALERT_THRESHOLD_DEFAULT = 3500;
export const COST_PER_KWH = 0.15;