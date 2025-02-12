import { useNavigate } from "react-router-dom";
import Login from "../../../components/User/Login";
import type { loginType } from "../../../types/user.type";
import style from "./loginAdminPage.module.css";

function LoginAdminPage() {
  const navigate = useNavigate();

  const handleSubmit = async (data: loginType) => {
    try {
      const login = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: "include",
        },
      );
      if (login.ok) {
        navigate("/admin/account");
      } else {
        navigate("/");
      }
    } catch (err) {
      err;
    }
  };
  return (
    <section className={style.adminLoginSection}>
      <h1 className={style.adminTitle}>Administrateur</h1>
      <Login onSubmit={handleSubmit} />
    </section>
  );
}

export default LoginAdminPage;
