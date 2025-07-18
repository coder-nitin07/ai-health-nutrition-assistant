import AboutSection from '../components/AboutSection'
import CTASection from '../components/CTASection'
import FeatureSection from '../components/FeatureSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import HowItWorksSection from '../components/HowItWorksSection'
import Navbar from '../components/Navbar'
import StreakSection from '../components/StreakSection'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StreakSection />
      <AboutSection />
      <FeatureSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default Home