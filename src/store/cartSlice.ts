import { createAction, createSlice } from "@reduxjs/toolkit";
import { ProductCart, ProductCartArray } from "./types";

const PREFIX = "app/cart";

const initialState = {
  products: [],
  valueTotal: 0,
  quantity: 0,
};

export const addProductToCart = createAction<ProductCart>(
  `${PREFIX}/addProductToCart`
);

export const removeProductToCart = createAction<ProductCart>(
  `${PREFIX}/removeProductToCart`
);

export const increaseProductToCart = createAction<ProductCart>(
  `${PREFIX}/increaseProductToCart`
);

export const decreaseProductToCart = createAction<ProductCart>(
  `${PREFIX}/decreaseProductToCart`
);

const sumTotalProducts = (arrayProducts: ProductCart[]) => {
  const sumTotal = arrayProducts.reduce((acc, product) => {
    return (acc += product.price);
  }, 0);

  return sumTotal;
};

const sumTotalProductsQuantity = (arrayProducts: ProductCart[]) => {
  const sumTotal = arrayProducts.reduce((acc, product) => {
    return (acc += product.quantity);
  }, 0);

  return sumTotal;
};

export const cartSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Acrescenta o produto ao carrinho
    builder.addCase(addProductToCart, (action, { payload }) => {
      const productExist = action.products.find(
        (product) => product.id === payload.id
      );

      if (!productExist) {
        action.products.push(payload);
        action.valueTotal = sumTotalProducts(action.products);
        action.quantity = sumTotalProductsQuantity(action.products);
        return;
      }

      let copyArrayWithoutProduct = action.products.filter(
        (product) => product.id !== payload.id
      );

      const pricePerProduct = Number(payload.price) / payload.quantity;

      const sumPrice = pricePerProduct + productExist.price;

      copyArrayWithoutProduct.push({
        ...payload,
        price: sumPrice,
        quantity: productExist.quantity + 1,
      });

      action.valueTotal = sumTotalProducts(copyArrayWithoutProduct);
      action.quantity = sumTotalProductsQuantity(copyArrayWithoutProduct);
      action.products = copyArrayWithoutProduct;
    });

    // Remove um produto do carrinho
    builder.addCase(removeProductToCart, (action, { payload }) => {
      let copyArrayWithoutProduct = action.products.filter(
        (product) => product.id !== payload.id
      );

      action.valueTotal = sumTotalProducts(copyArrayWithoutProduct);
      action.quantity = sumTotalProductsQuantity(copyArrayWithoutProduct);
      action.products = copyArrayWithoutProduct;
    });

    // decremeta o produto
    builder.addCase(decreaseProductToCart, (action, { payload }) => {
      let arrayProducts = action.products;

      if (payload.quantity === 1) {
        action.products = arrayProducts;
        action.valueTotal = sumTotalProducts(action.products);
        action.quantity = sumTotalProductsQuantity(action.products);
        return;
      }

      const pricePerProduct = payload.price / payload.quantity;

      action.products = arrayProducts.map((product) => {
        if (product.id === payload.id) {
          return {
            ...product,
            price: payload.price - pricePerProduct,
            quantity: payload.quantity - 1,
          };
        }
        return product;
      });

      const products = action.products;
      console.log(products);
      action.valueTotal = sumTotalProducts(products);
      action.quantity = sumTotalProductsQuantity(products);
    });

    // acrescenta o produto
    builder.addCase(increaseProductToCart, (action, { payload }) => {
      let arrayProducts = action.products;

      const pricePerProduct = payload.price / payload.quantity;

      action.products = arrayProducts.map((product) => {
        if (product.id === payload.id) {
          return {
            ...product,
            price: payload.price + pricePerProduct,
            quantity: payload.quantity + 1,
          };
        }
        return product;
      });

      const products = action.products;
      console.log(products);
      action.valueTotal = sumTotalProducts(products);
      action.quantity = sumTotalProductsQuantity(products);
    });
  },
});

export default cartSlice.reducer;
