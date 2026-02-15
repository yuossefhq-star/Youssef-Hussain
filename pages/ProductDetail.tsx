
import React, { useEffect, useState } from 'react';
import { getMenuItemBySlug } from '../services/sanityService';
import { MenuItem } from '../types';

interface Props {
  slug: string;
}

const ProductDetail: React.FC<Props> = ({ slug }) => {
  const [item, setItem] = useState<MenuItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getMenuItemBySlug(slug).then(res => {
      if (res) setItem(res);
      setLoading(false);
    });
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (!item) return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <h2 className="text-3xl font-bold">Glitch in the matrix: Dish not found.</h2>
    </div>
  );

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Product Image */}
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-xl blur-2xl opacity-60"></div>
          <div className="relative w-full aspect-square lg:aspect-[4/5] overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
            <div className="absolute top-6 left-6">
              <span className="bg-black/60 backdrop-blur-md border border-primary/50 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-neon">
                Chef's Special
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="flex flex-col space-y-8">
          <nav className="flex text-sm font-medium text-gray-400 space-x-2">
            <a href="#/" className="hover:text-primary transition-colors">Menu</a>
            <span className="text-gray-600">/</span>
            <span className="text-white">{item.name}</span>
          </nav>

          <div className="space-y-4 border-b border-white/10 pb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                {item.name.split(' ')[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">
                  {item.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <div className="bg-primary/10 border border-primary text-primary px-5 py-2 rounded-lg transform rotate-2 shadow-neon backdrop-blur-sm">
                <span className="text-3xl font-bold">${item.price}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-icons text-sm">star</span>
                ))}
              </div>
              <span className="text-gray-400">{item.reviews || 0} Reviews</span>
              {item.spicyLevel! > 0 && (
                <>
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                  <span className="text-secondary font-medium flex items-center gap-1">
                    <span className="material-icons text-sm">local_fire_department</span> 
                    {item.spicyLevel === 3 ? 'Hyper Spicy' : 'Spicy'}
                  </span>
                </>
              )}
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed font-light">
            {item.description}
          </p>

          {item.ingredients && (
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 border-l-2 border-secondary pl-3">Key Ingredients</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {item.ingredients.map((ing) => (
                  <li key={ing} className="flex items-center text-gray-400 group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-secondary mr-3 group-hover:bg-secondary group-hover:text-black transition-all shadow-neon-pink">
                      <span className="material-icons text-sm">check</span>
                    </span>
                    <span className="font-light">{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-6 mt-auto">
            <div className="glass p-6 rounded-xl flex flex-col sm:flex-row gap-6 items-center border border-white/5">
              <div className="flex items-center bg-black/50 rounded-lg border border-white/10 p-1">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  <span className="material-icons text-sm">remove</span>
                </button>
                <input
                  className="w-12 bg-transparent text-center text-white font-bold border-none focus:ring-0"
                  readOnly
                  value={quantity}
                />
                <button 
                   onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  <span className="material-icons text-sm">add</span>
                </button>
              </div>

              <button className="flex-1 w-full bg-gradient-to-r from-secondary to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white font-bold py-4 px-8 rounded-lg shadow-neon-pink transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 group">
                <span className="material-icons group-hover:animate-bounce">shopping_bag</span>
                ADD TO CART
              </button>
              
              <button className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-lg border border-white/10 hover:border-secondary hover:text-secondary text-gray-400 transition-all duration-300 hover:shadow-neon-pink bg-black/30">
                <span className="material-icons">favorite_border</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
