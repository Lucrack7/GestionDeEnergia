import { useAlerts } from "../../hooks/useAlerts";
import type { Alert } from "../../types/energy";
import { formatDateTime } from "../../utils/calculations";

function AlertItem({ alert }: { alert: Alert }) {
  return (
    <div className={`alert-item alert-item--${alert.severity}`}>
      <span className="alert-item__icon">
        {alert.severity === "critical" ? "🚨" : "⚠️"}
      </span>
      <div className="alert-item__body">
        <div className="alert-item__message">{alert.message}</div>
        <div className="alert-item__time">{formatDateTime(alert.timestamp)}</div>
      </div>
      <span className={`alert-item__badge alert-item__badge--${alert.severity}`}>
        {alert.severity}
      </span>
    </div>
  );
}

export function AlertsWidget() {
  const { alerts, clearAlerts, criticalAlerts, warningAlerts, totalCount } = useAlerts();

  return (
    <div className="alerts-widget">
      <div className="alerts-widget__header">
        <div className="alerts-widget__stats">
          <span className="alert-stat alert-stat--critical">
            🚨 {criticalAlerts.length} crítica
          </span>
          <span className="alert-stat alert-stat--warning">
            ⚠️ {warningAlerts.length} advertencia
          </span>
        </div>
        {totalCount > 0 && (
          <button className="clear-btn" onClick={clearAlerts}>
            Borrar todo
          </button>
        )}
      </div>

      {alerts.length === 0 ? (
        <div className="alerts-empty">
          <div className="alerts-empty__icon">✅</div>
          <div className="alerts-empty__text">Todo limpio — no hay alertas activas</div>
          <div className="alerts-empty__sub">
            Las alertas se activan cuando el consumo excede tu umbral
          </div>
        </div>
      ) : (
        <div className="alerts-list">
          {alerts.map((a: Alert) => (
            <AlertItem key={a.id} alert={a} />
          ))}
        </div>
      )}
    </div>
  );
}