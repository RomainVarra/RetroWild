import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

import LoginPage from "./pages/ClientPages/AuthPages/LoginPage";
import RegisterPage from "./pages/ClientPages/AuthPages/RegisterPage";
import HomePage from "./pages/ClientPages/Homepage";
import AccountPage from "./pages/ClientPages/User/AccountPage";
import MovieDetails from "./pages/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "*",
        element: <h1>Error 404</h1>,
      },
    ],
  },
  {
    path: "/admin",
    children: [
      {
        path: "/admin/login",
        element: <h1>Se connecter</h1>,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
