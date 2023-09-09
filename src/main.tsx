import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard.tsx";
import ProductPage from "./views/ProductPage/ProductPage.tsx";
import ProductList from "./views/ProductsList/ProductList.tsx";
import { Provider } from "react-redux";
import store from "./common/store/store.ts";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/products", element: <ProductList /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
