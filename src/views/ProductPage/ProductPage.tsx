import { useLocation } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../common/store/hooks/store.hooks";
import { useEffect } from "react";
import {
  ProductPageParameterType,
  ProductPageResponseType,
} from "./ProductPage.types";
import {
  createProduct,
  deleteProduct,
  getInitData,
  getProduct,
  updateProduct,
} from "./ProductPage.actions";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { EnumProductPageMode } from "../../common/common.enums";
import { setPageMode, setViewProductState } from "./ProductPage.reducer";
import { ProductDto } from "../../common/common.models";

export const productFormSchema = yup.object().shape({
  name: yup.string().required("First Name is required"),
  price: yup
    .number()
    .moreThan(0, "price must be greater than 0")
    .required("price is required"),
  categoryId: yup
    .number()
    .moreThan(0, "category is required")
    .required("category is required"),
});

const ProductPage = () => {
  const location = useLocation();
  const parameters: ProductPageParameterType =
    location.state as ProductPageParameterType;

  const dispatch = useAppDispatch();

  const productState = useAppSelector((state) => state.productReducer);
  const hookForm = useForm({
    resolver: yupResolver(productFormSchema),
  });
  const productListState = useAppSelector((state) => state.productListReducer);
  useEffect(() => {
    if (parameters?.productId) {
      //  dispatch(getProduct(parameters.productId));
      const product = productListState.products.find(
        (product) => product.id === parameters.productId
      );
      if (product) {
        dispatch(
          setViewProductState({
            product: product,
            categories: productListState.categories,
          } as ProductPageResponseType)
        );
      }
    } else {
      dispatch(getInitData());
    }
  }, []);

  useEffect(() => {
    if (productState.product) {
      hookForm.setValue("name", productState.product.name);
      hookForm.setValue("price", productState.product.price);
      hookForm.setValue("categoryId", productState.product.categoryId);
    }
  }, [productState.product]);

  function onFormSubmit(data: any) {
    const product: ProductDto = {
      id: productState.product?.id ?? 0,
      name: data.name,
      price: data.price,
      categoryId: data.categoryId,
    };
    if (productState.mode === EnumProductPageMode.Create) {
      dispatch(createProduct(product));
    } else if (productState.mode === EnumProductPageMode.Edit) {
      dispatch(updateProduct(product));
    }
  }

  return (
    <div>
      <h1>ProductPage</h1>
      <div>
        <form onSubmit={hookForm.handleSubmit(onFormSubmit)}>
          <Controller
            name="name"
            control={hookForm.control}
            defaultValue={productState.product?.name ?? ""}
            render={({ field, fieldState }) => (
              <FormGroup>
                <FormControl>
                  <TextField
                    id="name"
                    label="Product name"
                    disabled={productState.mode === EnumProductPageMode.View}
                    error={fieldState.invalid}
                    {...field}
                  />
                  <FormHelperText>{fieldState.error?.message}</FormHelperText>
                </FormControl>
              </FormGroup>
            )}
          />
          <br />
          <Controller
            name="price"
            control={hookForm.control}
            defaultValue={productState.product?.price ?? 0}
            render={({ field, fieldState }) => (
              <FormGroup>
                <FormControl>
                  <TextField
                    id="price"
                    label="Product price"
                    disabled={productState.mode === EnumProductPageMode.View}
                    type="number"
                    error={fieldState.invalid}
                    {...field}
                  />
                  <FormHelperText>{fieldState.error?.message}</FormHelperText>
                </FormControl>
              </FormGroup>
            )}
          />
          <br />
          <Controller
            name="categoryId"
            control={hookForm.control}
            defaultValue={productState.product?.categoryId ?? 0}
            render={({ field, fieldState }) => (
              <FormGroup>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Product category
                  </InputLabel>
                  <Select
                    id="categoryId"
                    label="Product category"
                    disabled={productState.mode === EnumProductPageMode.View}
                    error={fieldState.invalid}
                    {...field}
                  >
                    {productState.categories.map((category, index) => (
                      <MenuItem key={index} value={category.value}>
                        {category.label}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>{fieldState.error?.message}</FormHelperText>
                </FormControl>
              </FormGroup>
            )}
          />
          <br />
          {productState.mode === EnumProductPageMode.Create && (
            <button onClick={() => hookForm.reset()}>Clear</button>
          )}
          {(productState.mode === EnumProductPageMode.Create ||
            productState.mode === EnumProductPageMode.Edit) && (
            <button type="submit">Save</button>
          )}
          {productState.mode === EnumProductPageMode.View && (
            <>
              <button
                onClick={() => dispatch(setPageMode(EnumProductPageMode.Edit))}
              >
                Edit
              </button>
              <button
                onClick={() =>
                  dispatch(deleteProduct(productState.product?.id ?? 0))
                }
              >
                Delete
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
