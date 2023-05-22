export interface ProductCartArray {
 products: ProductCart[];
}

export type ProductCart = {
  name: string,
  description: string,
  price: string,
  quantity:number, 
  imageUrl: string,
}
