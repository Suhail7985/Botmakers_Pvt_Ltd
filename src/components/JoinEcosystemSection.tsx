const formCards = [
  { title: "BECOME A JUDGE" },
  { title: "VOLUNTEER" },
  { title: "COMMUNITY MEMBER" },
];
const sponsors = [
  { id: 'nit-delhi', name: "NIT DELHI", image: "/nit-delhi.png" },
  { id: 'indian-bit', name: "INDIAN BIT", image: "/indian-bit.png" },
  { id: 'nit-silchar', name: "NIT SILCHAR", image: "/nit-silchar.png" },
  { id: 'robo-delhivery', name: "ROBO\nCOMPANY", image: "/robo-delhivery.png" },
  { id: 'iit-bombay', name: "IIT BOMBAY", border: true, image: "/iit-bombay.png" },
  { id: 'robo-general', name: "ROBO\nCOMPANY", image: "/robo-general.png" },
];
const quickLinksCol1 = [
  "The Arena",
  "Episodes",
  "National Rankings",
  "Programs",
  "Rulebooks",
];

const quickLinksCol2 = [
  "Join the Team",
  "Sponsorships",
  "Help Center",
  "Contact Us",
  "Legal",
];

function SignUpCard({ title }: { title: string }) {
  return (
    <div className="bg-[#111111] border border-[#333333] rounded-xl overflow-hidden group">
      {/* Red accent line at top */}
      <div className="h-1 w-full bg-[#FF4D4D]" />

      <div className="p-6 md:p-8">
        <h4
          className="text-white font-bold text-lg md:text-xl text-center tracking-wider uppercase mb-8"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          {title}
        </h4>

        <div className="space-y-4 mb-8">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-[#1A1A1A] border border-[#333333] text-white px-4 py-3 rounded focus:outline-none focus:border-[#FF4D4D] transition-colors"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full bg-[#1A1A1A] border border-[#333333] text-white px-4 py-3 rounded focus:outline-none focus:border-[#FF4D4D] transition-colors"
          />
          <input
            type="text"
            placeholder="Enroll"
            className="w-full bg-[#1A1A1A] border border-[#333333] text-white px-4 py-3 rounded focus:outline-none focus:border-[#FF4D4D] transition-colors"
          />
        </div>

        <button className="w-full bg-[#FF4D4D] text-white font-bold py-3.5 rounded tracking-wide hover:bg-red-600 transition-colors shadow-[0_0_15px_rgba(255,77,77,0.3)] group-hover:shadow-[0_0_25px_rgba(255,77,77,0.5)]">
          SIGN UP
        </button>
      </div>
    </div>
  );
}

function SponsorLogo({ sponsor }: { sponsor: typeof sponsors[0] }) {
  // Renders a custom SVG per sponsor to match the screenshot loosely, or uses the real logo image
  const renderIcon = () => {
    // @ts-ignore
    if (sponsor.image) {
      return (
        // @ts-ignore
        <div className={`p-2 flex items-center justify-center ${sponsor.border ? 'border-2 border-[#FF4500]' : ''}`}>
          <img 
            src={sponsor.image} 
            alt={sponsor.name} 
            className="max-w-[80px] max-h-[80px] object-contain mix-blend-screen opacity-90"
          />
        </div>
      );
    }

    switch (sponsor.id) {
      case 'nit-delhi':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-gray-400" fill="currentColor">
            <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C27.9 90 10 72.1 10 50S27.9 10 50 10s40 17.9 40 40-17.9 40-40 40z"/>
            <path d="M50 20C33.4 20 20 33.4 20 50s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm-5 45H35V35h10v30zm15 0H50V35h10v30z"/>
          </svg>
        );
      case 'indian-bit':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 100 100" className="w-12 h-12 text-gray-400 mb-1" fill="currentColor">
               <path d="M80 40c0-11-9-20-20-20H40C29 20 20 29 20 40v10h60V40z"/>
               <circle cx="35" cy="35" r="5" fill="#111"/>
               <circle cx="65" cy="35" r="5" fill="#111"/>
               <path d="M40 45h20v5H40z" fill="#111"/>
               <rect x="10" y="40" width="8" height="20" rx="4"/>
               <rect x="82" y="40" width="8" height="20" rx="4"/>
               <path d="M25 55h50v10a25 25 0 0 1-50 0z"/>
            </svg>
            <span className="text-[9px] font-orbitron font-bold text-gray-400 tracking-wider">INDIAN BIT</span>
          </div>
        );
      case 'nit-silchar':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="50" cy="50" r="45" strokeDasharray="4 2"/>
            <circle cx="50" cy="50" r="35" fill="currentColor" opacity="0.2"/>
            <circle cx="50" cy="50" r="15" fill="currentColor"/>
            <circle cx="50" cy="50" r="5" fill="#111"/>
            <path d="M50 15 a35 35 0 0 1 35 35" strokeDasharray="2 4"/>
          </svg>
        );
      case 'robo-delhivery':
        return (
          <div className="flex items-center gap-2 mr-2">
            <svg viewBox="0 0 40 20" className="w-10 h-5">
               <path d="M0 5 L10 5 L15 15 L20 5 L30 5 L15 20 Z" fill="#FF4D4D"/>
               <path d="M25 5 L40 5 L30 20 Z" fill="#888"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-300 leading-none tracking-widest">DELHIVERY</span>
              <span className="text-[8px] text-gray-500 leading-none">ROBOTICS</span>
            </div>
          </div>
        );
      case 'iit-bombay':
        return (
          // @ts-ignore
          <div className={`p-2 ${sponsor.border ? 'border-2 border-[#FF4500]' : ''}`}>
             <svg viewBox="0 0 100 100" className="w-14 h-14 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="50" cy="50" r="45" />
                <circle cx="50" cy="50" r="35" strokeDasharray="3 3"/>
                <path d="M30 65 L50 75 L70 65 L50 55 Z" fill="currentColor" opacity="0.5"/>
                <path d="M35 50 Q50 20 65 50 Q50 70 35 50 Z" stroke="currentColor"/>
             </svg>
          </div>
        );
      case 'robo-general':
        return (
          <div className="flex items-center gap-1.5 mr-2">
            <div className="w-3 h-3 bg-gray-400 rounded-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#111] rounded-full"/>
            </div>
            <span className="text-[11px] font-medium text-gray-400 tracking-wide">General Robotics</span>
          </div>
        );
      default:
        return <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#333]" />;
    }
  };

  return (
    <div className="flex flex-row items-center gap-4 w-full">
      <div className="flex items-center justify-end w-[140px] md:w-[160px] flex-shrink-0">
        {renderIcon()}
      </div>
      <p className="text-gray-400 text-sm md:text-base font-bold tracking-wider leading-tight whitespace-pre-line uppercase">
        {sponsor.name}
      </p>
    </div>
  );
}

/* ── Social Media SVG Icons ── */
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function JoinEcosystemSection() {
  return (
    <section className="relative bg-[#0A0A0A] py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Subtle grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ────────── HEADING ────────── */}
        <h2
          className="text-white font-bold text-3xl md:text-4xl lg:text-[2.75rem] tracking-wide uppercase mb-12"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          JOIN THE ECOSYSTEM
        </h2>

        {/* ────────── FORM CARDS ────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {formCards.map((card) => (
            <SignUpCard key={card.title} title={card.title} />
          ))}
        </div>

        {/* ────────── SPONSORS ────────── */}
        <div className="mb-20">
          <h3
            className="text-white font-bold text-xl md:text-2xl tracking-[0.2em] uppercase mb-10"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            SPONSORS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 max-w-6xl mx-auto">
            {sponsors.map((s) => (
              <SponsorLogo key={s.id} sponsor={s} />
            ))}
          </div>
        </div>

        {/* ────────── FOOTER DIVIDER ────────── */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#333333] to-transparent mb-12" />

        {/* ────────── FOOTER ────────── */}
        <footer className="flex flex-col md:flex-row justify-between gap-12">
          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              QUICK LINKS
            </h4>
            <div className="flex gap-12">
              <ul className="space-y-3">
                {quickLinksCol1.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {quickLinksCol2.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4
              className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              SOCIAL MEDIA
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-gray-500 hover:text-white hover:border-[#FF4D4D]/50 transition-colors"
              >
                <YouTubeIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-gray-500 hover:text-white hover:border-[#FF4D4D]/50 transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-gray-500 hover:text-white hover:border-[#FF4D4D]/50 transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-gray-500 hover:text-white hover:border-[#FF4D4D]/50 transition-colors"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
