import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/home";
import CheckoutPage from "./pages/Checkout";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
        index: true,
      },
    ],
  },
]);
