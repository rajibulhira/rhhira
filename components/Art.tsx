/**
 * Decorative architectural line-art used as visual motifs (no photos or logos are redrawn here).
 */

/** A structural frame: columns, beams and node points, with dimension ticks. */
export function StructuralFrame({ className = "" }: { className?: string }) {
  const cols = [40, 140, 240, 340];
  const floors = [60, 140, 220, 300, 380];
  return (
    <svg viewBox="0 0 400 440" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        {/* columns */}
        {cols.map((x) => (
          <line key={`c${x}`} x1={x} y1={floors[0]} x2={x} y2={floors[floors.length - 1]} />
        ))}
        {/* beams */}
        {floors.map((y) => (
          <line key={`b${y}`} x1={cols[0]} y1={y} x2={cols[cols.length - 1]} y2={y} />
        ))}
        {/* bracing */}
        <line x1={40} y1={60} x2={140} y2={140} strokeDasharray="4 5" opacity="0.7" />
        <line x1={240} y1={140} x2={340} y2={220} strokeDasharray="4 5" opacity="0.7" />
        <line x1={140} y1={220} x2={240} y2={300} strokeDasharray="4 5" opacity="0.7" />
        {/* foundation */}
        <line x1={20} y1={400} x2={360} y2={400} />
        {cols.map((x) => (
          <path key={`f${x}`} d={`M${x - 16} 400 h32 M${x - 10} 410 h20 M${x - 4} 420 h8`} opacity="0.8" />
        ))}
        {/* dimension line */}
        <line x1={40} y1={34} x2={340} y2={34} opacity="0.7" />
        <line x1={40} y1={28} x2={40} y2={40} opacity="0.7" />
        <line x1={340} y1={28} x2={340} y2={40} opacity="0.7" />
      </g>
      {/* nodes */}
      <g fill="currentColor">
        {cols.flatMap((x) => floors.map((y) => <circle key={`n${x}-${y}`} cx={x} cy={y} r="3" />))}
      </g>
    </svg>
  );
}

/** Blueprint-style placeholder thumbnail for projects without a photo. */
export function BlueprintArt({ variant }: { variant: "structural" | "architectural" }) {
  return (
    <div className="blueprint absolute inset-0 flex items-center justify-center bg-navy text-steel">
      <div className="blueprint-fine absolute inset-0" />
      {variant === "structural" ? (
        <StructuralFrame className="relative h-[78%] w-auto text-steel" />
      ) : (
        <svg viewBox="0 0 400 300" fill="none" aria-hidden="true" className="relative h-[72%] w-auto text-steel">
          <g stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
            <path d="M40 260V90l90-50h140l90 50v170Z" />
            <path d="M40 90h320M130 40v220M270 40v220" opacity="0.75" />
            {[0, 1, 2].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <rect key={`${r}-${c}`} x={62 + c * 80} y={110 + r * 48} width="38" height="30" opacity="0.9" />
              )),
            )}
            <path d="M20 260h360" />
            <path d="M170 260v-38h60v38" />
          </g>
        </svg>
      )}
    </div>
  );
}
