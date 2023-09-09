import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../common/store/hooks/store.hooks";
import { getProductList } from "./ProductList.actions";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { ProductPageParameterType } from "../ProductPage/ProductPage.types";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const productListState = useAppSelector((state) => state.productListReducer);

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Product Name", width: 130 },
    { field: "price", headerName: "Price", width: 130 },
    { field: "category", headerName: "Category", width: 130 },
  ];

  interface RowType {
    id: number;
    name: string;
    price: number;
    category: string;
  }

  const [dataRows, setDataRows] = useState<RowType[]>([]);

  useEffect(() => {
    setDataRows(
      productListState.products.map((product) => {
        return {
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category?.name ?? "No Category",
        };
      })
    );
  }, [productListState]);

  return (
    <div>
      <h1>ProductsPage</h1>
      <DataGrid
        rows={dataRows}
        columns={columns}
        onRowClick={(row) => {
          navigate(`/product`, {
            state: {
              productId: row.id,
              prevLocation: "/products",
            } as ProductPageParameterType,
          });
        }}
      />
    </div>
  );
};

export default ProductList;
