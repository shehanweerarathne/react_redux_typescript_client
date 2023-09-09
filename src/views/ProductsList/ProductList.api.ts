import axios from "axios";
import { ProductListResopnseType } from "./ProductList.types";

axios.defaults.baseURL = "http://localhost:5118/api";

async function getProductsAsync(): Promise<ProductListResopnseType> {
  try {
    const response = await axios.get(`/Product/GetProducts`);
    if (response.status == 200) {
      const products: ProductListResopnseType = response.data;
      return products;
    } else {
      return { products: [], categories: [] } as ProductListResopnseType;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { getProductsAsync };
