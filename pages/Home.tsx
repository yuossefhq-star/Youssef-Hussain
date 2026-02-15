
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import CategoryMarquee from '../components/CategoryMarquee';
import MenuHighlights from '../components/MenuHighlights';
import VibeCheck from '../components/VibeCheck';
import { getFeaturedItems } from '../services/sanityService';
import { MenuItem } from '../types';

const Home: React.FC = () => {
  const [featuredItems, setFeaturedItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedItems().then(items => {
      setFeaturedItems(items);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <CategoryMarquee />
      <MenuHighlights items={featuredItems} />
      <VibeCheck />
      
      {/* App Promo Section */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/10 rounded-3xl p-8 md:p-16 border border-primary/20 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
              ORDER FASTER IN THE <span className="text-primary">APP</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
              Get exclusive deals, track your drone delivery in real-time, and unlock hidden menu items.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button className="flex items-center justify-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                <span className="material-icons text-3xl">apple</span>
                <div className="text-left leading-none">
                  <span className="block text-[10px] uppercase font-bold text-gray-600">Download on the</span>
                  <span className="text-lg">App Store</span>
                </div>
              </button>
              <button className="flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">
                <span className="material-icons text-3xl">android</span>
                <div className="text-left leading-none">
                  <span className="block text-[10px] uppercase font-bold text-gray-400">Get it on</span>
                  <span className="text-lg">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Contact Section */}
      <section className="py-20 border-t border-white/5" id="locations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-4xl font-bold text-white mb-6">FIND YOUR <span className="text-primary">SECTOR</span></h2>
                <p className="text-gray-400 mb-8">We are currently operating in Neo Tokyo, Cyber City, and Silicon Wasteland.</p>
                <div className="space-y-4">
                  <div className="glass p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-all">
                    <div>
                      <h4 className="text-white font-bold">Neo Tokyo - District 9</h4>
                      <p className="text-sm text-gray-500">Open 24/7</p>
                    </div>
                    <span className="material-icons text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
                  </div>
                  <div className="glass p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-all">
                    <div>
                      <h4 className="text-white font-bold">Cyber City Central</h4>
                      <p className="text-sm text-gray-500">10:00 - 04:00</p>
                    </div>
                    <span className="material-icons text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
                  </div>
                </div>
             </div>
             <div className="h-96 bg-surface-dark rounded-2xl overflow-hidden border border-white/10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-50 filter grayscale contrast-125"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary rounded-full animate-ping absolute opacity-25"></div>
                  <div className="w-6 h-6 bg-primary rounded-full shadow-neon relative z-10"></div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded-xl">
                  <p className="text-white text-sm font-bold">Neon Bites HQ - Neo Tokyo</p>
                  <p className="text-gray-500 text-xs">1024 Cyber Blvd, District 9</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
