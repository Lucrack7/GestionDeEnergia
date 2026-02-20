import { useTheme } from "../../hooks/useTheme";

export function ThemeSwitcher() {
  const { darkMode, toggle } = useTheme();
  return (
    <button className="theme-switcher" onClick={toggle} title="Toggle theme">
      <span className="theme-switcher__icon">{darkMode ? "☀️" : "🌙"}</span>
      <span className="theme-switcher__label">{darkMode ? "Light" : "Dark"}</span>
    </button>
  );
}