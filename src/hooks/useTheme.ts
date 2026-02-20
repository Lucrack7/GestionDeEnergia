import { useEffect } from "react";
import { useEnergyStore } from "../stores/energyStore";

export function useTheme() {
  const { darkMode, setDarkMode } = useEnergyStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return {
    darkMode,
    toggle: () => setDarkMode(!darkMode),
  };
}