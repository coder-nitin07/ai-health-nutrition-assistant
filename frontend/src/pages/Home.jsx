import AboutSection from '../components/AboutSection'
import FeatureSection from '../components/FeatureSection'
import HeroSection from '../components/HeroSection'
import HowItWorksSection from '../components/HowItWorksSection'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <HowItWorksSection />
    </>
  )
}

export default Home