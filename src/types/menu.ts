export interface PriceStructure {
  single?: number;
  half?: number;
  full?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  pricing: PriceStructure;
  isVeg?: boolean;
  image?: string;
}

export interface MenuCategory {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  description?: string;
  image?: string;
  items: MenuItem[];
}
