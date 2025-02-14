import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { registerType } from "../../types/user.type";
import Register from "../User/Register";
import style from "./adminUserAdd.module.css";

function AdminUserAdd() {
  const navigate = useNavigate();

  const handleUserSubmit = async (data: registerType) => {
    try {
      const formData = new FormData();

      if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
      }
      formData.append("pseudo", data.pseudo);
      formData.append("email", data.email);
      formData.append("password", data.password);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/account/user/add`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        },
      );

      if (response.status === 201) {
        toast.success("L'utilisateur a bien été ajouté");
        setTimeout(() => {
          navigate("/admin/account/user");
        }, 2000);
      } else {
        toast.error("Une erreur s'est produite ! Veuillez réessayer");
      }
    } catch (err) {
      err;
    }
  };
  return (
    <section className={style.adminUserAddSection}>
      <h1 className={style.adminUserAddTitle}>Ajouter un utilisateur</h1>
      <Register onSubmit={handleUserSubmit} />
      <button
        className={style.buttonGoBack}
        type="button"
        onClick={() => navigate(-1)}
      >
        Revenir à la page précédente
      </button>
    </section>
  );
}

export default AdminUserAdd;
