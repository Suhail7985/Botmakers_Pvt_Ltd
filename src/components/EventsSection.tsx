const TournamentBracket = () => {
  // Bracket dimensions
  const slotW = 72;
  const slotH = 20;
  const pairGap = 6; // gap between two teams in a pair
  const pairSpacing = 16; // vertical gap between pairs
  const colGap = 32; // horizontal gap between rounds

  // Round 1: 8 teams in 4 pairs
  const r1X = 0;
  const r1Pairs: { y1: number; y2: number }[] = [];
  let currentY = 0;
  for (let i = 0; i < 4; i++) {
    const y1 = currentY;
    const y2 = y1 + slotH + pairGap;
    r1Pairs.push({ y1, y2 });
    currentY = y2 + slotH + pairSpacing;
  }

  // Round 2: 4 slots, each centered between a pair
  const r2X = r1X + slotW + colGap;
  const r2Slots = r1Pairs.map((pair) => {
    const midY = (pair.y1 + pair.y2 + slotH) / 2 - slotH / 2;
    return midY;
  });

  // Round 3 (Semis): 2 slots, centered between pairs of R2
  const r3X = r2X + slotW + colGap;
  const r3Slots = [
    (r2Slots[0] + r2Slots[1] + slotH) / 2 - slotH / 2,
    (r2Slots[2] + r2Slots[3] + slotH) / 2 - slotH / 2,
  ];

  // Round 4 (Final): 1 slot
  const r4X = r3X + slotW + colGap;
  const r4Slot = (r3Slots[0] + r3Slots[1] + slotH) / 2 - slotH / 2;

  const totalW = r4X + slotW;
  const totalH = currentY - pairSpacing;

  const lineColor = "#FF4D4D";
  const slotColor = "#444";

  // Helper to draw connector lines between two slots
  const connectorLines = (
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    fromY2?: number
  ) => {
    const midX = fromX + (toX - fromX) / 2;
    const startMidY1 = fromY + slotH / 2;
    const startMidY2 = fromY2 !== undefined ? fromY2 + slotH / 2 : startMidY1;
    const endMidY = toY + slotH / 2;

    return (
      <g>
        {/* Horizontal from slot 1 */}
        <line x1={fromX} y1={startMidY1} x2={midX} y2={startMidY1} stroke={lineColor} strokeWidth={1.5} />
        {fromY2 !== undefined && (
          <>
            {/* Horizontal from slot 2 */}
            <line x1={fromX} y1={startMidY2} x2={midX} y2={startMidY2} stroke={lineColor} strokeWidth={1.5} />
            {/* Vertical connector */}
            <line x1={midX} y1={startMidY1} x2={midX} y2={startMidY2} stroke={lineColor} strokeWidth={1.5} />
          </>
        )}
        {/* Horizontal to destination */}
        <line x1={midX} y1={endMidY} x2={toX} y2={endMidY} stroke={lineColor} strokeWidth={1.5} />
      </g>
    );
  };

  return (
    <svg
      viewBox={`-2 -2 ${totalW + 4} ${totalH + 4}`}
      className="w-full h-auto"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Round 1 slots + connectors to Round 2 */}
      {r1Pairs.map((pair, i) => (
        <g key={`r1-${i}`}>
          <rect x={r1X} y={pair.y1} width={slotW} height={slotH} rx={3} fill={slotColor} />
          <rect x={r1X} y={pair.y2} width={slotW} height={slotH} rx={3} fill={slotColor} />
          {connectorLines(r1X + slotW, pair.y1, r2X, r2Slots[i], pair.y2)}
        </g>
      ))}

      {/* Round 2 slots + connectors to Round 3 */}
      {r2Slots.map((y, i) => (
        <g key={`r2-${i}`}>
          <rect x={r2X} y={y} width={slotW} height={slotH} rx={3} fill={slotColor} />
        </g>
      ))}
      {connectorLines(r2X + slotW, r2Slots[0], r3X, r3Slots[0], r2Slots[1])}
      {connectorLines(r2X + slotW, r2Slots[2], r3X, r3Slots[1], r2Slots[3])}

      {/* Round 3 slots + connectors to Final */}
      {r3Slots.map((y, i) => (
        <g key={`r3-${i}`}>
          <rect x={r3X} y={y} width={slotW} height={slotH} rx={3} fill={slotColor} />
        </g>
      ))}
      {connectorLines(r3X + slotW, r3Slots[0], r4X, r4Slot, r3Slots[1])}

      {/* Final slot */}
      <rect x={r4X} y={r4Slot} width={slotW} height={slotH} rx={3} fill={slotColor} />
    </svg>
  );
};

const EventCard = ({ city }: { city: string }) => (
  <div className="bg-[#1A1A1A] rounded-lg p-5 border border-[#333]">
    <h4 className="text-white text-lg font-bold mb-4">Event in {city}</h4>
    <div className="grid grid-cols-3 gap-4 mb-5">
      <div>
        <p className="text-gray-500 text-[11px] uppercase tracking-wider mb-1">Date</p>
        <p className="text-white text-sm font-medium">11/11/25</p>
      </div>
      <div>
        <p className="text-gray-500 text-[11px] uppercase tracking-wider mb-1">Location</p>
        <p className="text-white text-sm font-medium">BKC</p>
      </div>
      <div>
        <p className="text-gray-500 text-[11px] uppercase tracking-wider mb-1">Category</p>
        <p className="text-white text-sm font-medium">Lorem</p>
      </div>
    </div>
    <button className="w-full bg-[#FF4D4D] hover:bg-[#e04444] text-white font-bold text-sm py-2.5 rounded transition-colors cursor-pointer">
      REGISTER
    </button>
  </div>
);

const EventsSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #111111 100%)" }}>
      {/* Subtle ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, #9b59b6, transparent 70%)" }} />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, #e74c3c, transparent 70%)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-white mb-12 tracking-wide">
          COMPETITIONS &amp; EVENTS
        </h2>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ===== COLUMN 1: LIVE NOW ===== */}
          <div>
            <h3 className="text-sm font-orbitron font-bold text-[#FF4D4D] mb-4 uppercase tracking-[0.2em]">
              LIVE NOW
            </h3>
            <div className="bg-[#1A1A1A] rounded-lg p-5 border border-[#333] h-[calc(100%-2rem)]">
              {/* Header */}
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h4 className="text-white text-lg font-bold">Bengaluru Regionals</h4>
                  <p className="text-gray-500 text-sm mt-0.5">Lorem Ipsum</p>
                </div>
                <span className="bg-[#FF4D4D] text-white text-[10px] font-bold px-2.5 py-1 rounded flex-shrink-0 ml-3">
                  Ongoing
                </span>
              </div>

              <hr className="border-[#333] my-4" />

              {/* Tournament Bracket */}
              <div className="mt-2 px-1">
                <TournamentBracket />
              </div>
            </div>
          </div>

          {/* ===== COLUMN 2: UPCOMING ===== */}
          <div>
            <h3 className="text-sm font-orbitron font-bold text-white mb-4 uppercase tracking-[0.2em]">
              UPCOMING
            </h3>
            <div className="space-y-5">
              <EventCard city="Mumbai" />
              <EventCard city="Delhi" />
            </div>
          </div>

          {/* ===== COLUMN 3: PAST RESULTS ===== */}
          <div>
            <h3 className="text-sm font-orbitron font-bold text-white mb-4 uppercase tracking-[0.2em]">
              PAST RESULTS
            </h3>
            <div className="bg-[#1A1A1A] rounded-lg p-5 border border-[#333] h-[calc(100%-2rem)]">
              <div className="flex flex-col justify-between h-full">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`py-4 first:pt-0 last:pb-0 ${index !== 2 ? "border-b border-[#333]" : ""}`}
                  >
                    <h4 className="text-white text-lg font-bold">Bengaluru Regionals</h4>
                    <p className="text-gray-500 text-sm mt-0.5">Lorem Ipsum</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventsSection;
