export type Product = {
  id: number;
  name: string;
  brand?: string;
  description: string;
  photo: string;
  price: number;
  quantity?: number;
  total?: number;
};
export type ArrProduct = {
  products: Product[];
  count: number;
};
