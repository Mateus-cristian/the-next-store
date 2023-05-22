import { createAction, createSlice } from "@reduxjs/toolkit";
import { ProductCart, ProductCartArray } from "./styles";

const PREFIX = 'app/cart';

const initialState = {
    product:[
    {
        name: "",
        description: "",
        price: "",
        quantity:0, 
        imageUrl: "",
    }]
}


export const addProductToCart = createAction<ProductCart>(`${PREFIX}/addProductToCart`);


export const cartSlice = createSlice({
  name:  PREFIX,
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Acrescenta o produto ao carrinho
    builder.addCase(addProductToCart, ({ product }, { payload }) => {
      console.log(payload);

        });
    }
});

export default cartSlice.reducer;
