export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'lawn' | 'ready-to-wear' | 'festive' | 'accessories';
  categoryLabel: string;
  description: string;
  fabricCare: string;
  deliveryInfo: string;
  price: number; // in PKR
  compareAtPrice?: number;
  colors: {
    name: string;
    hex: string;
    bgClass: string;
  }[];
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL' | 'Unstitched')[];
  images: string[];
  rating: number;
  reviewCount: number;
  badge?: string;
  featured?: boolean;
  newArrival?: boolean;
  bestseller?: boolean;
  moodColor?: string; // 'Blush Rose' | 'Ivory' | 'Sage' | 'Dusty Blue' | 'Burgundy' | 'Midnight'
  details?: string[];
}

export interface CartItem {
  id: string; // unique item id = product.id + size + color
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  size: string;
  color: string;
  moodColor: string;
  inStockOnly: boolean;
  sortBy: 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'rating';
  searchQuery: string;
}

export type ActiveView = 'home' | 'shop' | 'product' | 'product-detail' | 'about' | 'contact' | 'faq' | 'faqs' | 'lookbook';
