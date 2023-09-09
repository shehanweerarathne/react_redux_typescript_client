import { ProductDto, SelectDto } from "../../common/common.models";

export interface ProductListResopnseType {
  products: ProductDto[];
  categories: SelectDto[];
}
