type MarkProps = { className?: string };

export function Mark({ className = "h-9 w-9" }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="bbMarkFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e9f2ec" />
          <stop offset="100%" stopColor="#9fb0a6" />
        </linearGradient>
        <linearGradient id="bbMarkGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7cf08f" />
          <stop offset="100%" stopColor="#1a7d30" />
        </linearGradient>
      </defs>
      <path
        fill="url(#bbMarkFill)"
        fillRule="evenodd"
        d="M32 3.2 2.4 29.4a2.4 2.4 0 0 0 1.6 4.2h5.6v24.2a3.4 3.4 0 0 0 3.4 3.4h37.9a3.4 3.4 0 0 0 3.4-3.4V33.6H60a2.4 2.4 0 0 0 1.6-4.2L32 3.2Zm3.9 13.5L20.4 41.9a1 1 0 0 0 .85 1.53h7.2l-2.6 11.2a1 1 0 0 0 1.8.78l15.4-25.1a1 1 0 0 0-.85-1.52h-7.3l2.7-10.9a1 1 0 0 0-1.8-.8Z"
      />
      <path
        fill="url(#bbMarkGlow)"
        d="M35.9 16.7 20.4 41.9a1 1 0 0 0 .85 1.53h7.2l-2.6 11.2a1 1 0 0 0 1.8.78l15.4-25.1a1 1 0 0 0-.85-1.52h-7.3l2.7-10.9a1 1 0 0 0-1.8-.8Z"
        opacity="0.9"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative">
        <span className="absolute inset-0 -z-10 rounded-full bg-brand-500/25 blur-lg" />
        <Mark className={compact ? "h-8 w-8" : "h-10 w-10"} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-tight ${
            compact ? "text-[17px]" : "text-xl"
          }`}
        >
          BB <span className="text-mist-100">OTTHON</span>
          <span className="text-brand-400">VILL</span>
        </span>
        {!compact && (
          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.28em] text-mist-500">
            A biztonságos otthonért
          </span>
        )}
      </span>
    </span>
  );
}
