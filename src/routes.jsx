import App from "./App";
import Shop from "./Shop";
import Cart from "./Cart";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Shop",
    element: <Shop />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
];

export default routes;
