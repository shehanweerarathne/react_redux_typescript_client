import { combineReducers } from "redux";
import { productReducer } from "../../views/ProductPage/ProductPage.reducer";
import { productListReducer } from "../../views/ProductsList/ProductList.reducer";

const rootReducer = combineReducers({
  productReducer,
  productListReducer,
});

export default rootReducer;
