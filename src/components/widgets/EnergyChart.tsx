import { useState, useMemo } from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine,
} from "recharts";
import { useEnergyStore } from "../../stores/energyStore";
import {
  generateHourlyData,
  generateWeeklyData,
  generateMonthlyData,
} from "../../services/mockData";
import type { ChartPeriod } from "../../types/energy";

const CustomTooltip = (props: any) => {
  const { active, payload, label } = props;
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip__label">{label}</p>
      <p className="chart-tooltip__value">{payload[0].value} kWh</p>
    </div>
  );
};

export function EnergyChart() {
  const { currentWatts, alertThreshold } = useEnergyStore();
  const [period, setPeriod] = useState<ChartPeriod>("daily");

  const data = useMemo(() => {
    if (period === "daily")   return generateHourlyData(currentWatts || 500);
    if (period === "weekly")  return generateWeeklyData();
    return generateMonthlyData();
  }, [period, currentWatts]);

  // Reference line: threshold in kWh scale (daily only)
  const thresholdLine = alertThreshold / 1000;

  return (
    <div className="chart-card">
      <div className="chart-card__header">
        <span className="chart-card__title">Consumo de energía</span>
        <div className="period-tabs">
          {(["daily", "weekly", "monthly"] as ChartPeriod[]).map((p) => (
            <button
              key={p}
              className={`period-tab ${period === p ? "period-tab--active" : ""}`}
              onClick={() => setPeriod(p)}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="var(--accent)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity={0}    />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fill: "var(--subtext)", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis               tick={{ fill: "var(--subtext)", fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          {period === "daily" && (
            <ReferenceLine
              y={thresholdLine}
              stroke="#ff4d6d"
              strokeDasharray="5 4"
              label={{ value: "Alert", fill: "#ff4d6d", fontSize: 10, position: "insideTopRight" }}
            />
          )}
          <Area
            type="monotone"
            dataKey="kWh"
            stroke="var(--accent)"
            strokeWidth={2}
            fill="url(#areaGrad)"
            dot={false}
            activeDot={{ r: 4, fill: "var(--accent)" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}