export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        role="img"
        aria-label="IRONHAUS logo"
      >
        <polygon
          points="30,6 70,6 94,30 94,70 70,94 30,94 6,70 6,30"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="6"
        />
        <rect x="44" y="26" width="12" height="48" fill="var(--accent)" />
        <rect x="30" y="44" width="40" height="12" fill="var(--accent)" />
      </svg>
      <span style={{ fontFamily: 'Anton, sans-serif', fontSize: 24, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--text)' }}>
        IRON<span style={{ color: 'var(--accent)' }}>HAUS</span>
      </span>
    </div>
  )
}
