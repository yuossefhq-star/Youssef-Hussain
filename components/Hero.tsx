
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/50 bg-secondary/10 text-secondary text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Cyber-Monday Sale: 20% OFF
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              TASTE THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#80ff80]">FUTURE</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Cyber-inspired street food delivered at light speed. Experience flavors that glitch your reality and satisfy your midnight cravings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-primary text-black px-8 py-4 rounded-xl font-bold text-lg shadow-neon hover:shadow-neon-hover hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                ORDER NOW
                <span className="material-icons">arrow_forward</span>
              </button>
              <button className="border border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2">
                VIEW MENU
              </button>
            </div>
            
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-white">15<span className="text-primary">m</span></p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Avg. Delivery</p>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <p className="text-3xl font-bold text-white">4.9<span className="text-secondary">★</span></p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Rating</p>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <p className="text-3xl font-bold text-white">24<span className="text-primary">/</span>7</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Open Hours</p>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 border border-primary/20 rounded-full scale-90 animate-[spin_30s_linear_infinite]"></div>
            <div className="absolute inset-0 border border-dashed border-secondary/30 rounded-full scale-110 animate-[spin_40s_linear_infinite_reverse]"></div>
            
            <div className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
              <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop"
                alt="Cyber Burger"
                className="w-full h-full object-cover rounded-full border-4 border-background-dark shadow-2xl relative z-10"
              />
              
              <div className="absolute top-10 -right-4 md:-right-10 z-20 glass p-4 rounded-xl shadow-lg animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <span className="material-icons text-primary">local_fire_department</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Spicy Level</p>
                    <div className="flex gap-1 mt-1">
                      <div className="w-8 h-1 bg-primary rounded-full"></div>
                      <div className="w-8 h-1 bg-primary rounded-full"></div>
                      <div className="w-8 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-10 -left-4 md:-left-10 z-20 glass p-3 pr-6 rounded-xl shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <span className="material-icons text-secondary text-sm">favorite</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Customer Fave</p>
                  <p className="text-white font-bold">Neon Supreme</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
