import { all, fork } from "redux-saga/effects";
import productPageSaga from "../../views/ProductPage/ProductPage.saga";
import { productListSaga } from "../../views/ProductsList/ProductList.saga";

const rootSaga = function* () {
  yield all([fork(productPageSaga)]);
  yield all([fork(productListSaga)]);
};

export default rootSaga;
