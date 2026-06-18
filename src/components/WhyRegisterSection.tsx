import { Medal, Gavel, Briefcase, Zap, Shield, Trophy, User } from "lucide-react";

const advantages = [
  {
    icon: Medal,
    title: "NATIONAL RECOGNITION",
    desc: "Benchmark your skills on India's official robotics leaderboard.",
  },
  {
    icon: Gavel,
    title: "FAIR JUDGING",
    desc: "Compete with confidence under standardized, expert-led evaluation.",
  },
  {
    icon: Briefcase,
    title: "CAREER OPS",
    desc: "Bridge the gap between arena victories and top-tier tech placements.",
  },
  {
    icon: Zap,
    title: "HIGH - ENERGY ECO",
    desc: "Join a nationwide community of elite innovators and robotics athletes.",
  },
];

const topPlayer = { rank: "01", name: "Player Name", score: "508754" };

const players = [
  { rank: "02", name: "Player Name", score: "22000", accent: "blue" },
  { rank: "03", name: "Player Name", score: "20030", accent: "blue" },
  { rank: "04", name: "Player Name", score: "19500", accent: "pink" },
  { rank: "05", name: "Player Name", score: "15060", accent: "pink" },
  { rank: "06", name: "Player Name", score: "13865", accent: "pink" },
  { rank: "07", name: "Player Name", score: "10954", accent: "pink" },
  { rank: "08", name: "Player Name", score: "9057", accent: "pink" },
];

export default function WhyRegisterSection() {
  return (
    <section className="relative bg-[#0A0A0A] py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col lg:flex-row gap-16">
        {/* ───────── LEFT SIDE ───────── */}
        <div className="flex-1 flex flex-col justify-center">
          <p
            className="text-[#FF4D4D] italic text-lg md:text-xl tracking-wide mb-2"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            WHY REGISTER ?
          </p>
          <h2
            className="text-white font-bold text-3xl md:text-4xl lg:text-[2.75rem] leading-tight uppercase mb-12"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            THE LEAGUE
            <br />
            ADVANTAGE
          </h2>

          <div className="space-y-8">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#1A1010] border border-[#FF4D4D]/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#FF4D4D]" />
                  </div>
                  <div>
                    <h3
                      className="text-white font-bold text-sm md:text-base tracking-wide mb-1"
                      style={{ fontFamily: "Orbitron, sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      &ldquo;{item.desc}&rdquo;
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ───────── RIGHT SIDE — LEADERBOARD ───────── */}
        <div className="flex-1 flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Outer blue glow */}
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-b from-[#00BFFF]/60 via-[#0050FF]/30 to-[#00BFFF]/60 blur-sm" />
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#00BFFF]/40 via-transparent to-[#00BFFF]/40" />

            {/* Card */}
            <div
              className="relative rounded-2xl bg-[#0D0D1A] border border-[#1a1a3a] overflow-hidden"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 20%, rgba(0,80,255,0.05) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(0,191,255,0.05) 0%, transparent 50%),
                  linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                `,
                backgroundSize: "100% 100%, 100% 100%, 24px 24px, 24px 24px",
              }}
            >
              {/* Header */}
              <div className="px-6 pt-6 pb-4">
                <h3
                  className="text-center text-white text-xl tracking-[0.3em] font-bold"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  LEADERBOARD
                </h3>
              </div>

              {/* Top Player */}
              <div className="mx-5 mb-4 rounded-xl bg-gradient-to-r from-[#1a1a2e] to-[#16162a] border border-[#2a2a4a] p-4 flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p
                    className="text-gray-300 text-xs tracking-wider mb-1"
                    style={{ fontFamily: "Orbitron, sans-serif" }}
                  >
                    #01 - Player Name
                  </p>
                  <p
                    className="text-white text-2xl font-bold tracking-wider"
                    style={{ fontFamily: "Orbitron, sans-serif" }}
                  >
                    {topPlayer.score}
                  </p>
                </div>
              </div>

              {/* Player List */}
              <div className="px-5 pb-5 space-y-[6px]">
                {players.map((p) => {
                  const isBlue = p.accent === "blue";
                  const accentColor = isBlue ? "#3B82F6" : "#EC4899";
                  const avatarBg = isBlue
                    ? "bg-gradient-to-br from-blue-500 to-blue-700"
                    : "bg-gradient-to-br from-pink-500 to-rose-700";

                  return (
                    <div
                      key={p.rank}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 bg-[#111125] border border-[#1e1e3a]"
                    >
                      <span
                        className="text-gray-500 text-xs font-bold w-6 text-center"
                        style={{ fontFamily: "Orbitron, sans-serif" }}
                      >
                        {p.rank}
                      </span>
                      <div
                        className={`flex-shrink-0 w-7 h-7 rounded-md ${avatarBg} flex items-center justify-center`}
                      >
                        <User className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm flex-1">
                        {p.name}
                      </span>
                      <span
                        className="text-gray-400 text-xs font-semibold tracking-wider"
                        style={{ fontFamily: "Orbitron, sans-serif" }}
                      >
                        {p.score}
                      </span>
                      <Shield
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: accentColor }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
