import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

import AdminUserAdd from "./components/Admin/AdminUserAdd";
import NewArticlesDetails from "./components/Article/NewsArticlesDetails";
import AccountAdminPage from "./pages/AdminPages/AccountAdmin/AccountAdminPage";
import AccountAdminUserPage from "./pages/AdminPages/AccountAdmin/AccountAdminUserPage";
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
        path: "/newArticle/:id",
        element: <NewArticlesDetails />,
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
      {
        path: "/admin/account/article",
        element: <h2>Articles</h2>,
      },
      {
        path: "/admin/account/movie",
        element: <h2>Films</h2>,
      },
      {
        path: "/admin/account/user",
        element: <AccountAdminUserPage />,
      },
      {
        path: "/admin/account/user/add",
        element: <AdminUserAdd />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
