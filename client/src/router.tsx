import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

import AccountAdminPage from "./pages/AdminPages/AccountAdmin/AccountAdminPage";
import LoginAdminPage from "./pages/AdminPages/LoginAdmin/LoginAdminPage";
import LoginPage from "./pages/ClientPages/AuthPages/LoginPage";
import RegisterPage from "./pages/ClientPages/AuthPages/RegisterPage";
import HomePage from "./pages/ClientPages/Homepage";
import AccountPage from "./pages/ClientPages/User/AccountPage";
import RecommandationPage from "./pages/ClientPages/User/RecommandationPage";
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
        path: "/recommandation",
        element: <RecommandationPage />,
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
        element: <LoginAdminPage />,
      },
      {
        path: "/admin/account",
        element: <AccountAdminPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
