import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Events", active: true },
  { label: "Programs", active: false },
  { label: "Community", active: false },
  { label: "Ranks", active: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ── Logo ── */}
          <div className="flex-shrink-0 flex items-center gap-1.5">
            {/* Geometric icon – two overlapping triangles */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              {/* Blue / cyan triangle */}
              <polygon points="4,28 16,4 28,28" fill="#3B82F6" opacity="0.9" />
              {/* Yellow triangle, offset & overlapping */}
              <polygon points="10,28 22,8 28,28" fill="#FACC15" opacity="0.85" />
            </svg>

            {/* Wordmark */}
            <span className="font-orbitron font-bold italic text-2xl md:text-3xl tracking-tight select-none">
              <span className="text-[#3B82F6]">BOT</span>
              <span className="text-white">LEAGUE</span>
            </span>

            {/* Yellow chevron accent */}
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-0.5"
            >
              <path d="M1 1L9 9L1 17" stroke="#FACC15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* ── Center nav links (hidden on mobile) ── */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  link.active
                    ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#FF4D4D] after:rounded-full"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ── Right‑side buttons (hidden on mobile) ── */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 border border-white/60 text-white rounded text-sm font-medium hover:bg-white/10 transition-colors">
              LOGIN
            </button>
            <button className="px-6 py-2 bg-[#FF4D4D] text-white rounded text-sm font-medium hover:bg-red-600 transition-colors">
              REGISTER NOW
            </button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111111] border-t border-[#222222] px-4 pb-6 pt-2 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`block text-sm font-medium py-2 ${
                link.active ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <button className="w-full px-6 py-2.5 border border-white/60 text-white rounded text-sm font-medium hover:bg-white/10 transition-colors">
              LOGIN
            </button>
            <button className="w-full px-6 py-2.5 bg-[#FF4D4D] text-white rounded text-sm font-medium hover:bg-red-600 transition-colors">
              REGISTER NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
