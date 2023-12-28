import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "../src/Pages/ErrorPage/ErrorPage";
import Dashboard from "../src/Pages/Dashboard/Dashboard";
import ShoppingCart from "../src/Pages/ShoppingCart/ShoppingCart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>,
      <Route index element={<Dashboard />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/Cart" element={<ShoppingCart />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
