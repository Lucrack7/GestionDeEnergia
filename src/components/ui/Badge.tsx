interface BadgeProps {
  count: number;
  variant?: "danger" | "warning" | "success";
}

export function Badge({ count, variant = "danger" }: BadgeProps) {
  if (count === 0) return null;
  return <span className={`badge badge--${variant}`}>{count}</span>;
}