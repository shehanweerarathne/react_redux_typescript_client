import { ProductDto } from "../../common/common.models";

export const PRODUCT_GET_INIT_DATA = "PRODUCT_GET_INIT_DATA";
export const PRODUCT_GET_PRODUCT = "PRODUCT_GET_PRODUCT";
export const PRODUCT_CREATE_PRODUCT = "PRODUCT_CREATE_PRODUCT";
export const PRODUCT_UPDATE_PRODUCT = "PRODUCT_UPDATE_PRODUCT";
export const PRODUCT_DELETE_PRODUCT = "PRODUCT_DELETE_PRODUCT";

export const getInitData = () => {
  return {
    type: PRODUCT_GET_INIT_DATA,
  };
};

export const getProduct = (id: number) => {
  return {
    type: PRODUCT_GET_PRODUCT,
    payload: id,
  };
};

export const createProduct = (product: ProductDto) => {
  return {
    type: PRODUCT_CREATE_PRODUCT,
    payload: product,
  };
};

export const updateProduct = (product: ProductDto) => {
  return {
    type: PRODUCT_UPDATE_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (id: number) => {
  return {
    type: PRODUCT_DELETE_PRODUCT,
    payload: id,
  };
};
