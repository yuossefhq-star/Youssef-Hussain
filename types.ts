
export interface MenuItem {
  _id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  description: string;
  featured: boolean;
  category: string;
  spicyLevel?: number;
  ingredients?: string[];
  reviews?: number;
}

export interface NavLink {
  label: string;
  href: string;
}
