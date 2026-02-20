import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  accent?: boolean;
}

export function Card({ children, className = "", style, onClick, accent }: CardProps) {
  return (
    <div
      className={`card ${accent ? "card--accent" : ""} ${className}`}
      style={style}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {children}
    </div>
  );
}