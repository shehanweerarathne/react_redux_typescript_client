import axios from "axios";
import { ProductDto } from "../../common/common.models";
import { ProductPageResponseType } from "./ProductPage.types";

axios.defaults.baseURL = "http://localhost:5118/api";

async function getProductByIdAsync(
  productId: number
): Promise<ProductPageResponseType> {
  try {
    const response = await axios.get(`/Product/GetProductById/${productId}`);
    const pageData: ProductPageResponseType = response.data;
    return pageData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function createProductAsync(
  product: ProductDto
): Promise<ProductPageResponseType> {
  try {
    const response = await axios.post(`/Product/CreateProduct`, product);
    const pageData: ProductPageResponseType = response.data;
    return pageData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function updateProductAsync(
  product: ProductDto
): Promise<ProductPageResponseType> {
  try {
    const response = await axios.put(`/Product/UpdateProduct`, product);
    const pageData: ProductPageResponseType = response.data;
    return pageData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteProductAsync(
  productId: number
): Promise<ProductPageResponseType> {
  try {
    const response = await axios.delete(`/Product/DeleteProduct/${productId}`);
    const pageData: ProductPageResponseType = response.data;
    return pageData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export {
  getProductByIdAsync,
  createProductAsync,
  updateProductAsync,
  deleteProductAsync,
};
