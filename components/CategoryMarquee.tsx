
import React from 'react';

const categories = [
  { icon: 'star', label: 'BURGERS', color: 'text-primary' },
  { icon: 'bolt', label: 'CYBER_WINGS', color: 'text-secondary' },
  { icon: 'bubble_chart', label: 'GLITCH_SHAKES', color: 'text-primary' },
  { icon: 'local_pizza', label: 'NEON_PIZZA', color: 'text-secondary' },
];

const CategoryMarquee: React.FC = () => {
  return (
    <div className="w-full bg-primary/5 border-y border-primary/10 overflow-hidden py-6">
      <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {categories.map((cat) => (
              <span key={`${i}-${cat.label}`} className="text-2xl font-bold text-white/50 mx-4 flex items-center gap-2">
                <span className={`${cat.color} text-xl material-icons`}>{cat.icon}</span> 
                {cat.label}
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CategoryMarquee;
