import { Wrench, Landmark, Award, Users } from 'lucide-react';

const steps = [
  { icon: Wrench, step: 'STEP 1', label: 'BUILD YOUR\nTEAM' },
  { icon: Landmark, step: 'STEP 2', label: 'COMPETE ACROSS\nINDIA' },
  { icon: Award, step: 'STEP 3', label: 'EARN NATIONAL\nRANKING & VALUE' },
  { icon: Users, step: 'STEP 4', label: 'JOIN THE\nLEAGUE' },
];

const UserJourney = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#222]">
      {/* Header */}
      <div className="text-center mb-16">
        <h3 className="text-[#FF4D4D] text-sm font-bold tracking-widest uppercase mb-2">
          USER JOURNEY
        </h3>
        <h2 className="text-4xl font-orbitron font-bold text-white mb-4 tracking-wide uppercase">
          YOUR PATH TO THE LEAGUE
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
      </div>

      {/* Steps with connecting line */}
      <div className="relative max-w-5xl mx-auto">
        {/* Horizontal blue connecting line — positioned at the vertical center of the circles */}
        <div className="hidden md:block absolute top-[64px] left-0 w-full h-[3px] bg-[#2563EB] z-0" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {steps.map(({ icon: Icon, step, label }) => (
            <div key={step} className="flex flex-col items-center">
              {/* Circle */}
              <div className="w-32 h-32 rounded-full bg-[#111] border-[4px] border-[#1a1a1a] flex items-center justify-center relative shadow-[0_0_20px_rgba(37,99,235,0.25)]">
                <div className="absolute inset-2 rounded-full border-2 border-[#2563EB]" />
                <Icon size={48} className="text-white relative z-10" />
              </div>

              {/* Step label — no vertical line, just spacing */}
              <div className="mt-6 text-center">
                <p className="text-[#FF4D4D] font-bold text-sm tracking-wider mb-2">
                  {step}
                </p>
                <h4 className="text-white font-bold text-lg uppercase leading-tight whitespace-pre-line">
                  {label}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserJourney;
