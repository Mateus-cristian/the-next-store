export interface StoreProps {
  products: ProductCart[];
  valueTotal: number;
  quantity: number;
}

export interface ProductCartArray {
  products: ProductCart[];
}

export interface ProductCart {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}
