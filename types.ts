
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'soup' | 'meat' | 'specialty';
  image: string;
  isSpicy?: boolean;
}

export interface Recommendation {
  dishName: string;
  reason: string;
  pairing: string;
}
