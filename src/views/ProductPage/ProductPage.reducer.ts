import { createSlice } from "@reduxjs/toolkit";
import { EnumProductPageMode } from "../../common/common.enums";
import { ProductPageResponseType, ProductPageState } from "./ProductPage.types";

const initialState: ProductPageState = {
  categories: [],
  product: undefined,
  mode: EnumProductPageMode.Create,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCreateProductState: (state, action) => {
      const response: ProductPageResponseType = action.payload;
      state.categories = response.categories;
      state.product = response.product;
      state.mode = EnumProductPageMode.Create;
    },
    setEditProductState: (state: ProductPageState, action) => {
      const response: ProductPageResponseType = action.payload;
      state.categories = response.categories;
      state.product = response.product;
      state.mode = EnumProductPageMode.Edit;
    },
    setViewProductState: (state: ProductPageState, action) => {
      const response: ProductPageResponseType = action.payload;
      state.categories = response.categories;
      state.product = response.product;
      state.mode = EnumProductPageMode.View;
    },
    setPageMode: (state: ProductPageState, action) => {
      state.mode = action.payload;
    },
  },
});

export const {
  setCreateProductState,
  setEditProductState,
  setViewProductState,
  setPageMode,
} = productSlice.actions;

export const productReducer = productSlice.reducer;
