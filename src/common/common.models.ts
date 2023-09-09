export interface ProductDto {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  category?: CategoryDto;
}

export interface CategoryDto {
  id: number;
  name: string;
  products: null[];
}

export interface SelectDto {
  value: number;
  label: string;
}
