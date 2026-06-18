const disciplines = [
  {
    name: 'Robo Race',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Line Follower',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    whiteBg: true,
  },
  {
    name: 'RC Racing',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
    grayscale: true,
  },
  {
    name: 'FPV Drone Racing & Aeromodelling',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Robo Hockey',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Robo War',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    greenBorder: true,
  },
];

const CircuitBoardPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="circuit-pattern"
        x="0"
        y="0"
        width="60"
        height="60"
        patternUnits="userSpaceOnUse"
      >
        {/* Horizontal traces */}
        <line x1="0" y1="15" x2="25" y2="15" stroke="#7C3AED" strokeWidth="0.8" opacity="0.25" />
        <line x1="35" y1="45" x2="60" y2="45" stroke="#7C3AED" strokeWidth="0.8" opacity="0.25" />
        {/* Vertical traces */}
        <line x1="30" y1="0" x2="30" y2="20" stroke="#7C3AED" strokeWidth="0.8" opacity="0.25" />
        <line x1="15" y1="40" x2="15" y2="60" stroke="#7C3AED" strokeWidth="0.8" opacity="0.25" />
        <line x1="45" y1="25" x2="45" y2="50" stroke="#7C3AED" strokeWidth="0.8" opacity="0.25" />
        {/* Connection nodes */}
        <circle cx="25" cy="15" r="2.5" fill="#7C3AED" opacity="0.3" />
        <circle cx="35" cy="45" r="2.5" fill="#7C3AED" opacity="0.3" />
        <circle cx="30" cy="20" r="2.5" fill="#7C3AED" opacity="0.3" />
        <circle cx="15" cy="40" r="2.5" fill="#7C3AED" opacity="0.3" />
        <circle cx="45" cy="25" r="2.5" fill="#7C3AED" opacity="0.3" />
        {/* Angled traces */}
        <line x1="25" y1="15" x2="30" y2="20" stroke="#7C3AED" strokeWidth="0.8" opacity="0.2" />
        <line x1="15" y1="40" x2="35" y2="45" stroke="#7C3AED" strokeWidth="0.8" opacity="0.2" />
        {/* Small square pads */}
        <rect x="43" y="13" width="4" height="4" fill="none" stroke="#7C3AED" strokeWidth="0.6" opacity="0.2" />
        <rect x="8" y="28" width="4" height="4" fill="none" stroke="#7C3AED" strokeWidth="0.6" opacity="0.2" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
  </svg>
);

const DisciplinesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#222]">


      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* ── ROW 1 ── */}

        {/* 1. Robo Race */}
        <div className="rounded-xl overflow-hidden bg-[#1A1A1A] border border-[#333] group">
          <div className="h-48 overflow-hidden">
            <img
              src={disciplines[0].image}
              alt="Robo Race"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-4 text-center bg-[#111]">
            <h4 className="text-white font-bold text-lg">Robo Race</h4>
          </div>
        </div>

        {/* 2. Line Follower – WHITE image background */}
        <div className="rounded-xl overflow-hidden border border-[#333] group">
          <div className="h-48 overflow-hidden bg-white flex items-center justify-center p-4">
            <img
              src={disciplines[1].image}
              alt="Line Follower"
              className="h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-4 text-center bg-[#111] border-t border-[#333]">
            <h4 className="text-white font-bold text-lg">Line Follower</h4>
          </div>
        </div>

        {/* 3. RC Racing – grayscale */}
        <div className="rounded-xl overflow-hidden bg-[#1A1A1A] border border-[#333] group grayscale">
          <div className="h-48 overflow-hidden">
            <img
              src={disciplines[2].image}
              alt="RC Racing"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-4 text-center bg-[#111]">
            <h4 className="text-white font-bold text-lg">RC Racing</h4>
          </div>
        </div>

        {/* 4. FPV Drone Racing & Aeromodelling */}
        <div className="rounded-xl overflow-hidden bg-[#1A1A1A] border border-[#333] group">
          <div className="h-48 overflow-hidden">
            <img
              src={disciplines[3].image}
              alt="FPV Drone Racing & Aeromodelling"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-4 text-center bg-[#111]">
            <h4 className="text-white font-bold text-sm lg:text-base leading-tight">
              FPV Drone Racing &<br />
              Aeromodelling
            </h4>
          </div>
        </div>

        {/* ── ROW 2 ── */}

        {/* 5. Robo Hockey */}
        <div className="rounded-xl overflow-hidden bg-[#1A1A1A] border border-[#333] group">
          <div className="h-48 overflow-hidden flex items-center justify-center bg-black">
            <img
              src={disciplines[4].image}
              alt="Robo Hockey"
              className="h-full object-cover mix-blend-screen group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-4 text-center bg-[#111]">
            <h4 className="text-white font-bold text-lg">Robo Hockey</h4>
          </div>
        </div>

        {/* 6. Robo War – green border + glow */}
        <div className="rounded-xl overflow-hidden bg-[#1A1A1A] border-2 border-[#22C55E] group shadow-[0_0_20px_rgba(34,197,94,0.35)]">
          <div className="h-48 overflow-hidden">
            <img
              src={disciplines[5].image}
              alt="Robo War"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-4 text-center bg-[#111]">
            <h4 className="text-white font-bold text-lg">Robo War</h4>
          </div>
        </div>

        {/* 7-8. Circuit board decorative area spanning 2 columns - purely background, not a card */}
        <div className="hidden lg:block lg:col-span-2 relative opacity-40 pointer-events-none">
          {/* SVG circuit board pattern */}
          <CircuitBoardPattern />

          {/* Center glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)',
            }}
          />

          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle, #7C3AED 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default DisciplinesSection;
