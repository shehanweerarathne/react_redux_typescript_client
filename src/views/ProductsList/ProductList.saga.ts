import { call, put, takeEvery, all } from "redux-saga/effects";
import { PRODUCT_LIST_GET_PRODUCTS } from "./ProductList.actions";
import { ProductDto } from "../../common/common.models";
import { getProductsAsync } from "./ProductList.api";
import { setProducts } from "./ProductList.reducer";

const getProductListWatcher = function* (): any {
  yield takeEvery(PRODUCT_LIST_GET_PRODUCTS, function* () {
    try {
      const response: ProductDto[] = yield call(() => getProductsAsync());
      yield put(setProducts(response));
    } catch (error) {
      console.error(error);
    }
  });
};

const productListSaga = function* (): any {
  yield all([getProductListWatcher()]);
};

export { productListSaga };
