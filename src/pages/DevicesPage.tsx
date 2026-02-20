import { DeviceControlPanel } from "../components/widgets/DeviceControlPanel";

export function DevicesPage() {
  return (
    <div className="page">
      <p className="page__hint">
        Aquí puedes controlar tus dispositivos conectados. Enciende o apaga cada uno para ver cómo afecta tu consumo de energía en tiempo real.
      </p>
      <DeviceControlPanel />
    </div>
  );
}