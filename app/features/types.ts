export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  cart: boolean;
}

export interface Products {
  products: Product[];
}
