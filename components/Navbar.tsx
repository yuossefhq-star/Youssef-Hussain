
import React from 'react';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'Home', href: '#/' },
  { label: 'Menu', href: '#/menu' },
  { label: 'Our Vibe', href: '#/#about' },
  { label: 'Locations', href: '#/#locations' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.location.hash = '/'}>
            <span className="material-icons text-primary text-3xl">bolt</span>
            <span className="text-2xl font-bold tracking-tighter text-white">
              NEON<span className="text-primary">BITES</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              <span className="material-icons">search</span>
            </button>
            <button className="relative text-gray-300 hover:text-white transition-colors group">
              <span className="material-icons">shopping_bag</span>
              <span className="absolute -top-1 -right-1 bg-primary text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-neon group-hover:shadow-neon-hover transition-all">
                2
              </span>
            </button>
            <a
              href="#/admin"
              className="hidden md:flex items-center gap-1 bg-surface-dark border border-primary/30 text-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary hover:text-black hover:shadow-neon transition-all duration-300"
            >
              <span className="material-icons text-sm">admin_panel_settings</span>
              Login
            </a>
            <div className="md:hidden">
              <button className="text-gray-400 hover:text-white transition-colors">
                <span className="material-icons">menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
