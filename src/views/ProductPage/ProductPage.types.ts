import { EnumProductPageMode } from "../../common/common.enums";
import { ProductDto, SelectDto } from "../../common/common.models";

export interface ProductPageResponseType {
  categories: SelectDto[];
  product?: ProductDto | undefined | null;
}

export interface ProductPageState extends ProductPageResponseType {
  mode: EnumProductPageMode;
}

export interface ProductPageParameterType {
  productId?: number | null;
  prevLocation?: string | null;
}
