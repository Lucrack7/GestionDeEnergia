import { useEnergyStore } from "../stores/energyStore";
import { useTheme } from "../hooks/useTheme";
import { Toggle } from "../components/ui/Toggle";

export function SettingsPage() {
  const { alertThreshold, setAlertThreshold } = useEnergyStore();
  const { darkMode, toggle } = useTheme();

  return (
    <div className="page page--narrow">

      {/* Appearance */}
      <div className="settings-section">
        <div className="settings-section__title">APARIENCIA</div>
        <div className="settings-row">
          <div>
            <div className="settings-row__label">
              Modo Oscuro
            </div>
            <div className="settings-row__desc">Cambiar entre tema claro y oscuro</div>
          </div>
          <Toggle checked={darkMode} onChange={toggle} label="Toggle dark mode" />
        </div>
      </div>

      {/* Alerts */}
      <div className="settings-section">
        <div className="settings-section__title">ALERTAS</div>
        <div className="settings-row settings-row--column">
          <div className="settings-row__label">Umbral de Alerta (Vatios)</div>
          <div className="settings-row__desc">
            Se activa una alerta cuando el consumo supera este valor.
            Actual: <strong>{alertThreshold}W</strong>
          </div>
          <input
            type="range"
            min={500}
            max={6000}
            step={100}
            value={alertThreshold}
            onChange={(e) => setAlertThreshold(Number(e.target.value))}
            className="threshold-slider"
          />
          <div className="threshold-labels">
            <span>500V</span>
            <span className="threshold-labels__current">{alertThreshold}W</span>
            <span>6000V</span>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="settings-section">
        <div className="settings-section__title">ACERCA DE</div>
        <div className="card">
          <p className="about-text">
            <strong>VOLT⚡OS Panel de energía</strong><br />
            Desarrollado con React + Vite + TypeScript<br />
            Charts: Recharts &nbsp;·&nbsp; State: Zustand<br />
            Todos los datos son simulados — proyecto para demostrar habilidades de frontend. <br />
            Inspirado en aplicaciones de monitoreo de energía reales, con un diseño moderno y responsivo.
          </p>
        </div>
      </div>

    </div>
  );
}