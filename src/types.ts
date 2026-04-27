
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  priceRange?: string;
  isFeatured?: boolean;
  stockStatus?: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  gstin?: string;
  workingHours: {
    days: string;
    time: string;
  };
}
