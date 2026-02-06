import HeroContent from './HeroContent';
import BackgroundVideo from './BackgroundVideo';
import Scene from '../3d/Scene';
import About from '../About/About';      
import Services from '../Services/Services';
import TechStack from '../TechStack/TechStack';
import Projects from '../Project/Projects'; 

// Small helper function for the Hero Layer
const HeroLayer = () => (
  <div className="relative min-h-screen w-full overflow-hidden">
    <BackgroundVideo />
    <div className="absolute inset-0 z-10">
      <Scene />
    </div>
    <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <HeroContent />
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="relative w-full bg-black">
      {/* Section 1: Hero */}
      <HeroLayer />

      {/* Section 2: About (displayed immediately after) */}
      <div id="about">
        <About />
      </div>

      {/* Section 3: Services */}
      <div id="services">
        <Services />
      </div>

      <div id="techstack">
        <TechStack />
      </div>

       <div id="projects">
        <Projects />
      </div>

    </div>
  );
};

export default Home;