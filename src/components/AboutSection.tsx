import { Network, Server, Lightbulb, BrainCircuit, UserCog, User } from 'lucide-react';

const features = [
  {
    num: '1.',
    title: 'STRUCTURED EVENTS',
    desc: '"From one-off events to a year-round competitive season."',
  },
  {
    num: '2.',
    title: 'DIGITAL IDENTITY',
    desc: '"Your professional robotics legacy, tracked and verified."',
  },
  {
    num: '3.',
    title: 'NATIONAL RANKING',
    desc: '"Benchmark your skills against the best engineers in India."',
  },
  {
    num: '4.',
    title: 'CAREER PATHWAY',
    desc: '"Turning arena victories into real-world industry opportunities."',
  },
];

const categories = [
  {
    title: 'MINI\nMAKERS',
    desc: 'Where Creativity Meets Logic.',
    icon: null, // uses custom "M" circle
    featured: true,
  },
  {
    title: 'JUNIOR\nINNOVATORS',
    desc: 'Engineering & Strategy Fundamentals.',
    icon: Lightbulb,
    featured: false,
  },
  {
    title: 'YOUNG\nENGINEERS',
    desc: 'Advanced Wireless & Autonomous Control.',
    icon: UserCog,
    featured: false,
  },
  {
    title: 'ROBO\nMINDS',
    desc: 'Elite Professional Sports & Robotics.',
    icon: BrainCircuit,
    featured: false,
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#222]">

      {/* ─── WHAT IS BOTLEAGUE? ─── */}
      <div className="mb-24">
        <h2 className="text-4xl font-orbitron font-bold text-white mb-12 tracking-wide uppercase">
          WHAT IS BOTLEAGUE?
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Features 2×2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 lg:w-3/5">
            {features.map((f) => (
              <div key={f.num}>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-baseline">
                  <span className="text-[#FF4D4D] text-3xl mr-2">{f.num}</span>
                  {f.title}
                </h3>
                <p className="text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Tech diagram / illustration */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative w-72 h-72 border border-[#333] rounded-lg bg-[#111] overflow-hidden">
              {/* SVG connecting lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 288 288"
                fill="none"
              >
                {/* Dashed lines from center to corners */}
                <line x1="144" y1="144" x2="48" y2="48" stroke="#444" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="144" y1="144" x2="240" y2="48" stroke="#444" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="144" y1="144" x2="48" y2="240" stroke="#444" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="144" y1="144" x2="240" y2="240" stroke="#444" strokeWidth="1" strokeDasharray="4 4" />
                {/* Cross lines */}
                <line x1="144" y1="144" x2="144" y2="36" stroke="#444" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="144" y1="144" x2="144" y2="252" stroke="#444" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="144" y1="144" x2="36" y2="144" stroke="#444" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="144" y1="144" x2="252" y2="144" stroke="#444" strokeWidth="1" strokeDasharray="4 4" />
                {/* Outer ring */}
                <circle cx="144" cy="144" r="80" stroke="#333" strokeWidth="1" strokeDasharray="6 4" fill="none" />
              </svg>

              {/* Central hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-white bg-[#1A1A1A] flex items-center justify-center z-20">
                <span className="text-white font-orbitron font-bold text-sm">BL</span>
              </div>

              {/* Corner nodes */}
              <div className="absolute top-4 left-4 w-12 h-12 border border-gray-600 rounded bg-[#1A1A1A] flex items-center justify-center z-10">
                <User size={20} className="text-gray-400" />
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 border border-gray-600 rounded bg-[#1A1A1A] flex items-center justify-center z-10">
                <Network size={20} className="text-gray-400" />
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-gray-600 rounded bg-[#1A1A1A] flex items-center justify-center z-10">
                <Server size={20} className="text-gray-400" />
              </div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border border-gray-600 rounded bg-[#1A1A1A] flex items-center justify-center z-10">
                <BrainCircuit size={20} className="text-gray-400" />
              </div>

              {/* Edge nodes (mid-sides) */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 border border-gray-600 rounded-full bg-[#1A1A1A] flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-gray-500" />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 border border-gray-600 rounded-full bg-[#1A1A1A] flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-gray-500" />
              </div>
              <div className="absolute top-1/2 left-4 -translate-y-1/2 w-8 h-8 border border-gray-600 rounded-full bg-[#1A1A1A] flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-gray-500" />
              </div>
              <div className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 border border-gray-600 rounded-full bg-[#1A1A1A] flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── CATEGORIES ─── */}
      <div>
        <h2 className="text-4xl font-orbitron font-bold text-white mb-10 tracking-wide uppercase">
          CATEGORIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const isFeatured = cat.featured;
            return (
              <div
                key={cat.title}
                className={`rounded-xl p-8 transition-colors group ${
                  isFeatured
                    ? 'bg-[#2a261c] border border-yellow-600/30 hover:bg-[#332f22]'
                    : 'bg-[#1A1A1A] border border-[#333] hover:bg-[#222]'
                }`}
              >
                {/* Icon */}
                <div className="mb-6">
                  {cat.icon === null ? (
                    <div className="w-16 h-16 rounded-full border-2 border-yellow-500 flex items-center justify-center text-yellow-500 text-3xl font-bold">
                      M
                    </div>
                  ) : (
                    <div className="w-16 h-16 flex items-center justify-center">
                      <cat.icon size={48} className="text-yellow-500" />
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-orbitron font-bold text-white mb-4 leading-tight uppercase whitespace-pre-line">
                  {cat.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-8 h-10">{cat.desc}</p>

                {/* CTA */}
                <a
                  href="#"
                  className="text-[#FF4D4D] font-bold text-sm tracking-widest uppercase flex items-center group-hover:text-red-400"
                >
                  LEARN MORE{' '}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
