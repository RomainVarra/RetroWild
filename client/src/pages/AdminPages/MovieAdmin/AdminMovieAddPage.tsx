import { useNavigate } from "react-router-dom";
import AdminMovieAdd from "../../../components/Admin/AdminMovieAdd";
import type { MovieType } from "../../../types/movie.type";

function AdminMovieAddPage() {
  const navigate = useNavigate();
  const handleArticleSubmit = async (data: MovieType) => {
    try {
      const newArticle = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/account/movie/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: "include",
        },
      );

      if (newArticle.ok) {
        setTimeout(() => {
          navigate("/admin/account/movie");
        }, 2000);
      }
    } catch (err) {
      err;
    }
  };
  return (
    <>
      <AdminMovieAdd onSubmit={handleArticleSubmit} />
    </>
  );
}

export default AdminMovieAddPage;
