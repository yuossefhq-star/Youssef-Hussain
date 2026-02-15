
import { MenuItem } from '../types';
import { mockMenuItems } from './mockData';

// In a real Next.js app, we would use createClient from 'next-sanity'
// For this React SPA demo, we simulate the fetching logic.

export const getMenuItems = async (): Promise<MenuItem[]> => {
  // Logic would typically be:
  // return await client.fetch(`*[_type == "menuItem"]{...}`);
  
  // Returning mock data for the demo
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockMenuItems), 500);
  });
};

export const getFeaturedItems = async (): Promise<MenuItem[]> => {
  const items = await getMenuItems();
  return items.filter(item => item.featured);
};

export const getMenuItemBySlug = async (slug: string): Promise<MenuItem | undefined> => {
  const items = await getMenuItems();
  return items.find(item => item.slug === slug);
};
