
import React from 'react';
import { MenuItem } from '../types';

interface Props {
  items: MenuItem[];
}

const MenuHighlights: React.FC<Props> = ({ items }) => {
  return (
    <section className="py-24 relative" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              HOLO-MENU <span className="text-primary">HIGHLIGHTS</span>
            </h2>
            <p className="text-gray-400">Top rated dishes from the cyberverse.</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-lg border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors">
              <span className="material-icons">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-lg bg-primary text-black flex items-center justify-center shadow-neon hover:shadow-neon-hover transition-all">
              <span className="material-icons">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div 
              key={item._id} 
              className="group relative bg-surface-dark border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => window.location.hash = `/menu/${item.slug}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10 pointer-events-none"></div>
              <div className="relative h-64 overflow-hidden">
                {item.featured && (
                  <span className="absolute top-4 left-4 z-20 bg-secondary text-white text-xs font-bold px-2 py-1 rounded shadow-neon-pink">BESTSELLER</span>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 relative z-20">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.name}</h3>
                  <span className="text-primary font-bold text-xl">${item.price}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{item.description}</p>
                <button className="w-full py-3 rounded-lg border border-primary/30 text-primary font-bold uppercase tracking-wider hover:bg-primary hover:text-black hover:shadow-neon transition-all flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-black">
                  <span className="material-icons text-sm">add_shopping_cart</span> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
