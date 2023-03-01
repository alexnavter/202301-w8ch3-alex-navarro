export interface User {
  username: string;
  adress: string;
  isLogged: boolean;
  shoppingCart: Products;
}

export interface Product {
  name: string;
  image: string;
  price: number;
  category: string;
  isAvailable: boolean;
}

export type Products = Product[];
