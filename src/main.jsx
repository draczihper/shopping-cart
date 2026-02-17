import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router";
import "./index.css";
import App from "./App.jsx";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import Cart from "./Cart.jsx";
import Shop from "./Shop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "NavBar",
    element: <NavBar />,
    children: [
      { path: "Home", element: <Home />},
      { path: "Shop", element: <Shop />},
      { path: "Cart", element: <Cart />},
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
