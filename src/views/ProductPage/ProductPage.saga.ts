import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  PRODUCT_CREATE_PRODUCT,
  PRODUCT_DELETE_PRODUCT,
  PRODUCT_GET_INIT_DATA,
  PRODUCT_GET_PRODUCT,
  PRODUCT_UPDATE_PRODUCT,
  getInitData,
} from "./ProductPage.actions";
import { ProductDto } from "../../common/common.models";
import {
  createProductAsync,
  deleteProductAsync,
  getProductByIdAsync,
  updateProductAsync,
} from "./ProductPage.api";
import {
  setCreateProductState,
  setViewProductState,
} from "./ProductPage.reducer";
import { AnyAction } from "redux";
import { ProductPageResponseType } from "./ProductPage.types";

const getAddProductDataWatcher = function* (): any {
  yield takeEvery(PRODUCT_GET_INIT_DATA, function* () {
    try {
      const response: ProductPageResponseType = yield call(() =>
        getProductByIdAsync(0)
      );
      if (response) {
        yield put(setCreateProductState(response));
      }
    } catch (e) {}
  });
};

const getProductByIdWatcher = function* (): any {
  yield takeEvery(PRODUCT_GET_PRODUCT, function* (action: AnyAction) {
    const id: number = action.payload;
    try {
      const response: ProductPageResponseType = yield call(() =>
        getProductByIdAsync(id)
      );
      if (response) {
        yield put(setViewProductState(response));
      }
    } catch (e) {}
  });
};

const createProductWatcher = function* (): any {
  yield takeEvery(PRODUCT_CREATE_PRODUCT, function* (action: AnyAction) {
    const product: ProductDto = action.payload;
    try {
      const response: ProductPageResponseType = yield call(() =>
        createProductAsync(product)
      );
      if (response) {
        yield put(setViewProductState(response));
      }
    } catch (e) {}
  });
};

const updateProductWatcher = function* (): any {
  yield takeEvery(PRODUCT_UPDATE_PRODUCT, function* (action: AnyAction) {
    const product: ProductDto = action.payload;
    try {
      const response: ProductPageResponseType = yield call(() =>
        updateProductAsync(product)
      );
      if (response) {
        yield put(setViewProductState(response));
      }
    } catch (e) {}
  });
};

const deleteProductWatcher = function* (): any {
  yield takeEvery(PRODUCT_DELETE_PRODUCT, function* (action: AnyAction) {
    const id: number = action.payload;
    try {
      const response: ProductPageResponseType = yield call(() =>
        deleteProductAsync(id)
      );
      if (response) {
        yield put(getInitData());
      }
    } catch (e) {}
  });
};

const productPageSaga = function* (): any {
  yield all([
    getAddProductDataWatcher(),
    getProductByIdWatcher(),
    createProductWatcher(),
    updateProductWatcher(),
    deleteProductWatcher(),
  ]);
};

export default productPageSaga;
