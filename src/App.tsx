import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { OverviewPage }    from "./pages/OverviewPage";
import { DevicesPage }     from "./pages/DevicesPage";
import { AlertsPage }      from "./pages/AlertsPage";
import { SettingsPage }    from "./pages/SettingsPage";
import "./styles/global.css";

export default function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/"          element={<Navigate to="/overview" replace />} />
          <Route path="/overview"  element={<OverviewPage />} />
          <Route path="/devices"   element={<DevicesPage />} />
          <Route path="/alerts"    element={<AlertsPage />} />
          <Route path="/settings"  element={<SettingsPage />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}