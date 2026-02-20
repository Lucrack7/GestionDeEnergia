# VOLT⚡OS — Gestión Inteligente de Energía

> Panel de gestión de energía del hogar construido con React, TypeScript y Vite. Simula en tiempo real el consumo eléctrico, permite controlar dispositivos y dispara alertas inteligentes cuando el consumo supera un umbral configurable.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)
![Zustand](https://img.shields.io/badge/Zustand-state-orange?style=flat-square)
![Recharts](https://img.shields.io/badge/Recharts-charts-22b5bf?style=flat-square)

---

## 🖥️ Demo

<img width="1920" height="1080" alt="React_14" src="https://github.com/user-attachments/assets/a48121d7-1d59-42ab-b598-dac668d5b873" />


---

## ✨ Features

- **Consumo en tiempo real** — lecturas simuladas cada 2 segundos con fluctuación aleatoria
- **Gráficos interactivos** — visualización diaria, semanal y mensual con Recharts
- **Control de dispositivos** — encendé/apagá 8 dispositivos del hogar y mirá cómo cambia el consumo
- **Sistema de alertas** — notificaciones automáticas con severidad `warning` / `critical`
- **Modo oscuro/claro** — tematización completa via CSS Variables
- **Umbral configurable** — ajustá el límite de alerta desde Settings en tiempo real
- **Estimación de costos** — cálculo automático del gasto diario y mensual

---

## 🛠️ Stack

| Categoría     | Tecnología                        |
|---------------|-----------------------------------|
| Framework     | React 18 + Vite                   |
| Lenguaje      | TypeScript (tipado estricto)      |
| Estado global | Zustand                           |
| Gráficos      | Recharts                          |
| Rutas         | React Router DOM v6               |
| Estilos       | CSS Variables (sin dependencias)  |


---

## 🚀 Instalación

```bash
# 1. Cloná el repositorio
git clone https://github.com/tu-usuario/volt-os.git
cd volt-os

# 2. Instalá las dependencias
npm install

# 3. Levantá el servidor de desarrollo
npm run dev
```

---

## 📦 Dependencias principales

```bash
npm install recharts zustand react-router-dom
```

---

## 🧠 Decisiones de diseño

- **Zustand sobre Redux** — misma potencia, cero boilerplate. Un solo archivo define todo el estado global.
- **CSS Variables sobre Tailwind** — tematización sin dependencias extra; el cambio dark/light es un atributo en `<html>`.
- **Recharts sobre Chart.js** — API declarativa en JSX nativo con excelente soporte TypeScript.
- **Hooks personalizados** — `useEnergySimulator` desacopla la lógica de simulación de cualquier componente visual, facilitando reemplazarla con una API real en el futuro.

---

## 📄 Licencia

MIT
