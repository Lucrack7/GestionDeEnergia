import { create } from "zustand";
import type { EnergyState } from "../types/energy";
import { INITIAL_DEVICES, ALERT_THRESHOLD_DEFAULT } from "../services/mockData";

export const useEnergyStore = create<EnergyState>((set) => ({
  devices: INITIAL_DEVICES,
  alerts: [],
  currentWatts: 0,
  alertThreshold: ALERT_THRESHOLD_DEFAULT,
  darkMode: true,

  toggleDevice: (id) =>
    set((state) => ({
      devices: state.devices.map((d) => (d.id === id ? { ...d, isActive: !d.isActive } : d)),
    })),

  setCurrentWatts: (currentWatts) => set({ currentWatts }),

  addAlert: (alert) =>
    set((state) => ({ alerts: [alert, ...state.alerts].slice(0, 20) })),

  clearAlerts: () => set({ alerts: [] }),

  setDarkMode: (darkMode) => set({ darkMode }),

  setAlertThreshold: (alertThreshold) => set({ alertThreshold }),
}));