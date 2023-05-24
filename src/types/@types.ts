export interface ProductsProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId?: string;
  };
}
