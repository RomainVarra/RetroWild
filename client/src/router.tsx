import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

import AdminUserAdd from "./components/Admin/AdminUserAdd";
import NewArticlesDetails from "./components/Article/NewsArticlesDetails";
import AccountAdminPage from "./pages/AdminPages/AccountAdmin/AccountAdminPage";
import AccountAdminUserPage from "./pages/AdminPages/AccountAdmin/AccountAdminUserPage";
import AdminArticleAddPage from "./pages/AdminPages/ArticleAdmin/AdminArticleAddPage";
import AdminArticleReadPage from "./pages/AdminPages/ArticleAdmin/AdminArticleReadPage";
import ArticleAdminPage from "./pages/AdminPages/ArticleAdmin/ArticleAdminPage";
import LoginAdminPage from "./pages/AdminPages/LoginAdmin/LoginAdminPage";
import AdminMovieAddPage from "./pages/AdminPages/MovieAdmin/AdminMovieAddPage";
import AdminMovieReadPage from "./pages/AdminPages/MovieAdmin/AdminMovieReadPage";
import MovieAdminPage from "./pages/AdminPages/MovieAdmin/MovieAdminPage";
import LoginPage from "./pages/ClientPages/AuthPages/LoginPage";
import RegisterPage from "./pages/ClientPages/AuthPages/RegisterPage";
import ErrorPage from "./pages/ClientPages/ErrorPage/ErrorPage";
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
        element: <ErrorPage />,
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
        element: <ArticleAdminPage />,
      },
      {
        path: "/admin/account/movie",
        element: <MovieAdminPage />,
      },
      {
        path: "/admin/account/user",
        element: <AccountAdminUserPage />,
      },
      {
        path: "/admin/account/user/add",
        element: <AdminUserAdd />,
      },
      {
        path: "/admin/account/article/add",
        element: <AdminArticleAddPage />,
      },
      {
        path: "/admin/account/article/all",
        element: <AdminArticleReadPage />,
      },
      {
        path: "/admin/account/movie/add",
        element: <AdminMovieAddPage />,
      },
      {
        path: "/admin/account/movie/all",
        element: <AdminMovieReadPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
