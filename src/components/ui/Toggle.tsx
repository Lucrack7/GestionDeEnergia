interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

export function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <button
      className={`toggle ${checked ? "toggle--on" : ""}`}
      onClick={onChange}
      role="switch"
      aria-checked={checked}
      aria-label={label}
      type="button"
    >
      <span className="toggle__knob" />
    </button>
  );
}