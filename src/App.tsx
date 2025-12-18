import { Hero } from './components/Hero';
import { FeaturedAuctions } from './components/FeaturedAuctions';
import { LiveBids } from './components/LiveBids';
import { HowItWorks } from './components/HowItWorks';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Stats />
      <FeaturedAuctions />
      <LiveBids />
      <HowItWorks />
      <Footer />
    </div>
  );
}
