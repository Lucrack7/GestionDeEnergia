import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeSwitcher } from "../widgets/ThemeSwitcher";
import { Badge } from "../ui/Badge";
import { useAlerts } from "../../hooks/useAlerts";
import { useEnergyStore } from "../../stores/energyStore";
import { useTheme } from "../../hooks/useTheme";
import { useEnergySimulator } from "../../hooks/useEnergySimulator";
import { formatKW } from "../../utils/calculations";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const NAV_ITEMS = [
  { path: "/overview",  label: "Resumen",  icon: "⚡" },
  { path: "/devices",   label: "Dispositivos",   icon: "🔌" },
  { path: "/alerts",    label: "Alertas",    icon: "🔔", showBadge: true },
  { path: "/settings",  label: "Configuración",  icon: "⚙️" },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  // Start the real-time simulator at the layout level so it runs app-wide
  useEnergySimulator();
  useTheme(); // Sync data-theme attribute

  const location = useLocation();
  const { totalCount, hasActiveAlert } = useAlerts();
  const { currentWatts, alertThreshold } = useEnergyStore();

  const pageTitles: Record<string, string> = {
    "/overview": "Resumen del panel de energía",
    "/devices":  "Control de dispositivos",
    "/alerts":   "Alertas y notificaciones",
    "/settings": "Configuración",
  };

  return (
    <div className="shell">
      {/* ── Sidebar ── */}
      <nav className="sidebar">
        <div className="sidebar__logo">
          <span>VOLT⚡OS</span>
        </div>

        <div className="sidebar__nav">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? "nav-item--active" : ""}`
              }
            >
              <span className="nav-item__icon">{item.icon}</span>
              <span className="nav-item__label">{item.label}</span>
              {item.showBadge && <Badge count={totalCount} variant="danger" />}
            </NavLink>
          ))}
        </div>

        <div className="sidebar__footer">
          <div className="sidebar__status-label">ESTADO EN VIVO</div>
          <div className={`sidebar__status-value ${hasActiveAlert ? "sidebar__status-value--alert" : ""}`}>
            {formatKW(currentWatts)}
          </div>
          <div className={`sidebar__status-dot ${hasActiveAlert ? "sidebar__status-dot--alert" : ""}`}>
            {hasActiveAlert ? "⚠ CARGA ALTA" : "✓ NORMAL"}
          </div>
          <div className="sidebar__threshold">
            Límite: {(alertThreshold / 1000).toFixed(1)} kW
          </div>
        </div>
      </nav>

      {/* ── Main ── */}
      <div className="main-wrapper">
        <header className="topbar">
          <div className="topbar__title">
            <div className="topbar__sub">GESTIÓN INTELIGENTE DE LA ENERGÍA</div>
            <h1 className="topbar__heading">
              {pageTitles[location.pathname] ?? "Dashboard"}
            </h1>
          </div>
          <ThemeSwitcher />
        </header>

        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}