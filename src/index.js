import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contexts/user.contexts";
import { ProductSProvider } from "./contexts/product.contexts";
import { CartProvider } from "./contexts/cart.contexts";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductSProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductSProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
