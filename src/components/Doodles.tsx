export function DoodleStar({ className = "", color = "var(--yellow)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M20 2 L23.5 15.5 L37 20 L23.5 24.5 L20 38 L16.5 24.5 L3 20 L16.5 15.5 Z"
        fill={color}
      />
    </svg>
  );
}

export function DoodleHeart({ className = "", color = "var(--pink)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 36" fill="none" className={className}>
      <path
        d="M20 34C20 34 2 22.5 2 11.5C2 5.7 6.5 2 11.5 2C15.2 2 18.2 4.3 20 7.6C21.8 4.3 24.8 2 28.5 2C33.5 2 38 5.7 38 11.5C38 22.5 20 34 20 34Z"
        fill={color}
      />
    </svg>
  );
}

export function DoodleScribble({ className = "", color = "var(--ink)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 20" fill="none" className={className}>
      <path
        d="M2 15C10 4 18 4 26 12C34 20 42 4 50 8C58 12 64 18 72 10C80 2 88 6 98 12"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleSquiggleArrow({ className = "", color = "var(--ink)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 40" fill="none" className={className}>
      <path
        d="M4 6C20 2 34 14 20 22C10 28 8 34 8 34"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M2 30L8 36L15 29"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
