import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import CartPaymentCardPage from "./pages/CartPaymentCardPage";
import ContactUsPage from "./pages/ContactUsPage";
import EditGamesPage from "./pages/EditGamesPage";
import HomePage from "./pages/HomePage";
import MoreDetails from "./pages/MoreDetails";
import NotFoundPage from "./pages/NotFoundPage";
import PaymentPage from "./pages/PaymentPage";
import ProductsPage from "./pages/ProductsPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const MainRoutes = () => {
  const ALL_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/signup",
      element: <SignUpPage />,
      id: 2,
    },
    {
      link: "/signin",
      element: <SignInPage />,
      id: 3,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 4,
    },
    {
      link: "/*",
      element: <NotFoundPage />,
      id: 5,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 6,
    },
    {
      link: "/editgames/:id",
      element: <EditGamesPage />,
      id: 7,
    },
    {
      link: "/contacts",
      element: <ContactUsPage />,
      id: 8,
    },
    {
      link: "/payment/:id",
      element: <PaymentPage />,
      id: 8,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 9,
    },
    {
      link: "/paymentcart",
      element: <CartPaymentCardPage />,
      id: 10,
    },
    {
      link: "/more/:id",
      element: <MoreDetails />,
      id: 10,
    },
  ];
  return (
    <Routes>
      {ALL_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
