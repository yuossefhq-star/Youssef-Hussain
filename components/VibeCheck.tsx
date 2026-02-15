
import React from 'react';

const VibeCheck: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-secondary/10 to-transparent relative overflow-hidden" id="about">
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1550966841-3ee7adac1661?q=80&w=1000&auto=format&fit=crop"
              alt="Neon Interior"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
              <p className="text-white font-bold text-lg">Neon Bites HQ - Neo Tokyo District</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">THE <span className="text-secondary">VIBE</span> CHECK</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We aren't just a restaurant; we are a sensory experience. Born in the back alleys of the digital revolution, Neon Bites fuses gastronomy with technology.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Locally sourced, organically grown pixels.',
                'Zero-emission delivery drones.',
                'Immersive AR dining experience available.',
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-400">
                  <span className="material-icons text-primary">check_circle</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors">
              READ OUR STORY <span className="material-icons text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeCheck;
