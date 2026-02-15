
import { MenuItem } from '../types';

export const mockMenuItems: MenuItem[] = [
  {
    _id: '1',
    name: 'Cyber Burger Deluxe',
    slug: 'cyber-burger-deluxe',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop',
    description: 'Double synthetic beef patty, neon relish, radioactive cheese sauce, and quantum brioche bun.',
    featured: true,
    category: 'BURGERS',
    spicyLevel: 2,
    ingredients: ['Ghost Pepper Cheese', 'Charcoal Brioche Bun', 'Jalapeño Relish', 'Double Angus Beef'],
    reviews: 128
  },
  {
    _id: '2',
    name: 'Data Fries',
    slug: 'data-fries',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1518013431117-eb1465fd5752?q=80&w=1000&auto=format&fit=crop',
    description: 'Crispy potato algorithms dusted with spicy powder and served with binary dip.',
    featured: true,
    category: 'SIDES',
    spicyLevel: 1,
    ingredients: ['Algorithm Cut Potatoes', 'Binary Dip', 'Cyber Spice'],
    reviews: 84
  },
  {
    _id: '3',
    name: 'Glitch Shake',
    slug: 'glitch-shake',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1000&auto=format&fit=crop',
    description: 'Strawberry-Vanilla fusion that shifts flavor profiles mid-sip. Warning: Brain freeze imminent.',
    featured: true,
    category: 'SHAKES',
    spicyLevel: 0,
    ingredients: ['Shift Syrup', 'Pixelized Cream', 'Neon Sprinkles'],
    reviews: 210
  },
  {
    _id: '4',
    name: 'Neon Noodles',
    slug: 'neon-noodles',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1000&auto=format&fit=crop',
    description: 'Bioluminescent noodles tossed in a circuit-breaker chili sauce.',
    featured: false,
    category: 'MAINS',
    spicyLevel: 3,
    ingredients: ['Glass Noodles', 'Chili Circuit Sauce', 'Microgreen Garnish'],
    reviews: 95
  }
];
