import About from '@/components/About';
import ApplicationsBanner from '@/components/ApplicationsBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import NotifySignup from '@/components/NotifySignup';
import Programs from '@/components/Programs';
import StadiumFeature from '@/components/StadiumFeature';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ApplicationsBanner />
      <main>
        <Hero />
        <About />
        <StadiumFeature />
        <Programs />
        <HowItWorks />
        <NotifySignup />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
