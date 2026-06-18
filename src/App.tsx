import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventsSection from './components/EventsSection';
import UserJourney from './components/UserJourney';
import AboutSection from './components/AboutSection';
import DisciplinesSection from './components/DisciplinesSection';
import WhyRegisterSection from './components/WhyRegisterSection';
import JoinEcosystemSection from './components/JoinEcosystemSection';

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Hero />
      <EventsSection />
      <UserJourney />
      <AboutSection />
      <DisciplinesSection />
      <WhyRegisterSection />
      <JoinEcosystemSection />
    </div>
  );
}

export default App;
