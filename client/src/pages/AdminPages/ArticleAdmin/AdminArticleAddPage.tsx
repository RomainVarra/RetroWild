import AdminArticleAdd from "../../../components/Admin/AdminArticleAdd";
import type { articleType } from "../../../types/article.type";

function AdminArticleAddPage() {
  const handleArticleSubmit = (data: articleType) => {
    data;
  };
  return (
    <>
      <AdminArticleAdd onSubmit={handleArticleSubmit} />
    </>
  );
}

export default AdminArticleAddPage;
