import heroBg from '../assets/hero-bg.png';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] pt-20 flex items-center overflow-hidden">

      {/* ── Background image: combat robot arena ── */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Strong gradient from left (black) so text is readable, fades to transparent right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        {/* Bottom fade to match page bg */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
      </div>

      {/* ── Content wrapper ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* LIVE banner — top right */}
        <div className="flex justify-end mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-black/70 border border-gray-700/60 rounded-full px-5 py-2 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            <span className="text-sm font-medium text-gray-200 tracking-wide">
              LIVE : Episode 14 • Bengaluru Regionals
            </span>
            <a
              href="#"
              className="text-[#FF4D4D] text-sm font-bold ml-1 hover:text-red-400 transition-colors"
            >
              WATCH LIVE
            </a>
          </div>
        </div>

        {/* ── Left‑side text block ── */}
        <div className="max-w-xl">
          <h1 className="font-orbitron font-bold text-5xl sm:text-6xl md:text-[4.5rem] text-white leading-[1.05] tracking-wider mb-6 uppercase">
            INDIA'S ULTIMATE
            <br />
            ROBOTICS ARENA
          </h1>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10">
            Build.Compete.Rank.The National
            <br />
            Ecosystem for Robotics Arena
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 bg-[#FF4D4D] text-white rounded font-bold text-sm md:text-base uppercase hover:bg-red-600 transition-colors shadow-[0_0_20px_rgba(255,77,77,0.4)]">
              CREATE ACCOUNT
            </button>
            <button className="px-8 py-3.5 border-2 border-white text-white rounded font-bold text-sm md:text-base uppercase hover:bg-white/10 transition-colors">
              EXPLORE EVENTS
            </button>
          </div>
        </div>


      </div>
    </section>
  );
}
