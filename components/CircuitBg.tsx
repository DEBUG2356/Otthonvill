export default function CircuitBg({ className = "" }: { className?: string }) {
  const lines = [
    "M-40 120 H180 l40 -40 H420 l60 60 H760 l50 -50 H1140 l60 60 H1480",
    "M-40 300 H260 l52 52 H620 l40 -40 H980 l70 70 H1480",
    "M-40 520 H140 l60 -60 H520 l44 44 H900 l60 -60 H1480",
    "M-40 700 H320 l50 50 H700 l60 -60 H1080 l40 40 H1480",
  ];
  const nodes = [
    [180, 120],
    [420, 80],
    [760, 140],
    [1140, 50],
    [260, 300],
    [620, 352],
    [980, 312],
    [140, 520],
    [520, 460],
    [900, 504],
    [320, 700],
    [700, 750],
    [1080, 690],
  ];

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1440 820"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cbFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ee6c6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#2fbf4a" stopOpacity="0.12" />
        </linearGradient>
        <radialGradient id="cbMask" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="cbM">
          <rect width="1440" height="820" fill="url(#cbMask)" />
        </mask>
      </defs>

      <g mask="url(#cbM)">
        {lines.map((d, i) => (
          <g key={i}>
            <path
              d={d}
              fill="none"
              stroke="url(#cbFade)"
              strokeWidth="1.15"
              strokeOpacity="0.5"
            />
            <path
              d={d}
              fill="none"
              stroke="#7cf0d8"
              strokeWidth="2.2"
              strokeLinecap="round"
              className="flow-line"
              style={{ animationDelay: `${i * 1.5}s`, animationDuration: `${7 + i}s` }}
            />
          </g>
        ))}
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3"
            fill="#2fbf4a"
            opacity="0.55"
            style={{ animation: `flicker ${5 + (i % 4)}s ease-in-out ${i * 0.4}s infinite` }}
          />
        ))}
      </g>
    </svg>
  );
}
