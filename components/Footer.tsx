
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-icons text-primary text-2xl">bolt</span>
              <span className="text-xl font-bold text-white">NEON<span className="text-primary">BITES</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Fueling the future, one bite at a time. Join the revolution of taste.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a className="hover:text-primary transition-colors" href="#">Menu</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Locations</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Stay Connected</h4>
            <div className="flex gap-4 mb-6">
              {['IG', 'TW', 'TT'].map((s) => (
                <a key={s} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all" href="#">
                  <span className="text-xs">{s}</span>
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-500">© 2023 Neon Bites Inc.</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>Designed for the future.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <span>English (US)</span>
            <span>USD ($)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
