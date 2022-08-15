import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import EditGamesPage from "./pages/EditGamesPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import StorePage from "./pages/StorePage";

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
      link: "/store",
      element: <StorePage />,
      id: 8,
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
