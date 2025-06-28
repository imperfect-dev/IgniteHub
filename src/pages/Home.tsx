import HeroSection from '../components/sections/HeroSection';
import ResourcesGrid from '../components/sections/ResourcesGrid';
import CallToActionSection from '../components/sections/CallToActionSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ResourcesGrid />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
