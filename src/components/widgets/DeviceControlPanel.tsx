import { useEnergyStore } from "../../stores/energyStore";
import { Toggle } from "../ui/Toggle";
import type { Device } from "../../types/energy";

interface DeviceCardProps {
  device: Device;
  onToggle: (id: string) => void;
}

function DeviceCard({ device, onToggle }: DeviceCardProps) {
  return (
    <div
      className={`device-card ${device.isActive ? "device-card--on" : ""}`}
      onClick={() => onToggle(device.id)}
    >
      <span className="device-card__icon">{device.icon}</span>
      <div className="device-card__info">
        <div className="device-card__name">{device.name}</div>
        <div className="device-card__meta">
          {device.room} &middot; {device.watts}W
        </div>
      </div>
      <Toggle
        checked={device.isActive}
        onChange={() => onToggle(device.id)}
        label={`Toggle ${device.name}`}
      />
    </div>
  );
}

export function DeviceControlPanel() {
  const { devices, toggleDevice, currentWatts, alertThreshold } = useEnergyStore();
  const isAlert = currentWatts > alertThreshold;

  return (
    <div>
      <div className="devices-grid">
        {devices.map((device) => (
          <DeviceCard key={device.id} device={device} onToggle={toggleDevice} />
        ))}
      </div>

      <div className={`total-load-banner ${isAlert ? "total-load-banner--alert" : ""}`}>
        <span className="total-load-banner__label">Carga activa total</span>
        <span className="total-load-banner__value">
          {(currentWatts / 1000).toFixed(2)} kW
        </span>
        {isAlert && (
          <span className="total-load-banner__warn">
            ⚠ Excede el umbral de {(alertThreshold / 1000).toFixed(1)} kW
          </span>
        )}
      </div>
    </div>
  );
}