type P = { className?: string };

const base = "h-6 w-6";
const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Icons: Record<string, (p: P) => React.JSX.Element> = {
  network: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <circle cx="12" cy="4" r="2" />
      <circle cx="4.5" cy="19" r="2" />
      <circle cx="19.5" cy="19" r="2" />
      <path d="M12 6v5m0 0-6 6m6-6 6 6" />
    </svg>
  ),
  panel: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M7 8v4m0 0v4m5-8v4m0 0v4m5-8v4m0 0v4" />
      <path d="M3 12h18" opacity=".45" />
    </svg>
  ),
  search: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 4.5 4.5" />
      <path d="M11.4 7.2 8.9 11h2.6l-.9 3.6 3.1-4.4h-2.6l.3-3Z" fill="currentColor" stroke="none" />
    </svg>
  ),
  circuit: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M3 8h4l2.5-3 3 6 2.5-3H21" />
      <path d="M3 17h6l2-2h10" />
      <circle cx="9" cy="17" r="1.6" />
      <circle cx="17.5" cy="8" r="1.6" />
    </svg>
  ),
  socket: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="9" cy="10.5" r="1.4" />
      <circle cx="15" cy="10.5" r="1.4" />
      <path d="M8.5 16h7" />
    </svg>
  ),
  house: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M12.8 11.5 10 15.6h2.2l-.7 2.9 3.1-4.5h-2.3l.5-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  ),
  shield: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M12 3 4.5 6v5.5c0 4.5 3 7.9 7.5 9.5 4.5-1.6 7.5-5 7.5-9.5V6L12 3Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  ),
  clock: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.2 2" />
    </svg>
  ),
  receipt: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M5 3h14v18l-2.3-1.6L14.4 21l-2.4-1.6L9.6 21l-2.3-1.6L5 21V3Z" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </svg>
  ),
  badge: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <circle cx="12" cy="9.5" r="6" />
      <path d="m8.5 14.5-1 6.5 4.5-2.4 4.5 2.4-1-6.5" />
      <path d="m9.7 9.4 1.7 1.7 3.1-3.3" />
    </svg>
  ),
  broom: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M15.5 3.5 9 10" />
      <path d="m6.5 12.5 5-5 5 5-2 2H8.5l-2-2Z" />
      <path d="M8 16.5c-.6 2-1.4 3.2-3 4.5h11c-1.6-1.3-2.4-2.5-3-4.5" />
    </svg>
  ),
  spark: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M13.5 2 5 13.5h5.5L9 22l9-12h-5.5L13.5 2Z" />
    </svg>
  ),
  bolt: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M13.5 2 5 13.5h5.5L9 22l9-12h-5.5L13.5 2Z" fill="currentColor" />
    </svg>
  ),
  phone: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M6.5 3.5h3l1.5 4-2 1.4a12.5 12.5 0 0 0 6.1 6.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  ),
  mail: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.8 7 8.2 6 8.2-6" />
    </svg>
  ),
  pin: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  ),
  facebook: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z"
      />
    </svg>
  ),
  car: ({ className = base }) => (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M4 15.5V12l1.8-4.2A2 2 0 0 1 7.6 6.5h6.9a2 2 0 0 1 1.8 1.3L18 12v3.5" />
      <path d="M3 15.5h16v2.2a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1v-.7H6.4v.7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2.2Z" />
      <path d="M4.5 12h13" />
      <path d="M21 8.5v5" />
    </svg>
  ),
  check: ({ className = "h-4 w-4" }) => (
    <svg viewBox="0 0 24 24" className={className} {...common} strokeWidth={2.4}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  ),
  arrow: ({ className = "h-4 w-4" }) => (
    <svg viewBox="0 0 24 24" className={className} {...common} strokeWidth={2}>
      <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />
    </svg>
  ),
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = Icons[name] ?? Icons.spark;
  return <C className={className} />;
}
