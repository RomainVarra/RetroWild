import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Register from "../../../components/User/Register";
import type { registerType } from "../../../types/user.type";
import style from "./register.module.css";

function RegisterPage() {
  const navigate = useNavigate();

  const handleUserFormSubmit = async (data: registerType) => {
    try {
      const formData = new FormData();

      if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
      }
      formData.append("pseudo", data.pseudo);
      formData.append("email", data.email);
      formData.append("password", data.password);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/register`,
        {
          method: "POST",
          body: formData,
        },
      );

      if (response.status === 201) {
        toast.success("Les informations sont bien mis à jour");
        setTimeout(() => {
          navigate("/account");
        }, 3000);
      } else {
        toast.error("Une erreur s'est produite ! Veuillez réessayer");
      }
    } catch (err) {
      err;
    }
  };
  return (
    <section className={style.registerSection}>
      <h1 className={style.registerTitle}>Enregistrement</h1>
      <Register onSubmit={handleUserFormSubmit} />
    </section>
  );
}

export default RegisterPage;
