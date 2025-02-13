import { useNavigate } from "react-router-dom";
import AdminArticleAdd from "../../../components/Admin/AdminArticleAdd";
import type { articleType } from "../../../types/article.type";

function AdminArticleAddPage() {
  const navigate = useNavigate();
  const handleArticleSubmit = async (data: articleType) => {
    try {
      const newArticle = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/account/article/add`,
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
          navigate("/admin/account/article");
        }, 2000);
      }
    } catch (err) {
      err;
    }
  };
  return (
    <>
      <AdminArticleAdd onSubmit={handleArticleSubmit} />
    </>
  );
}

export default AdminArticleAddPage;
