import { createSlice } from "@reduxjs/toolkit";
import { ProductDto, SelectDto } from "../../common/common.models";
import { ProductListResopnseType } from "./ProductList.types";

const initState: ProductListResopnseType = {
  products: [] as ProductDto[],
  categories: [] as SelectDto[],
};

const productListSlice = createSlice({
  name: "productList",
  initialState: initState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
      state.categories = action.payload.categories;
    },
  },
});

export const { setProducts } = productListSlice.actions;
export const productListReducer = productListSlice.reducer;
