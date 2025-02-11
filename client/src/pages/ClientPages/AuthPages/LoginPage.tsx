import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Login from "../../../components/User/Login";
import { useAuth } from "../../../contexts/AuthContext";
import type { loginType } from "../../../types/user.type";
import style from "./register.module.css";

function LoginPage() {
  const navigate = useNavigate();
  const { setUserId } = useAuth();

  const handleLoginSubmit = async (userData: loginType) => {
    try {
      const login = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
      });
      if (login.ok) {
        const data = await login.json();
        setUserId(data.userId);
        toast.success("Vous êtes bien connecté !");
        navigate("/account");
      } else {
        toast.error(
          "Un problème est survenu lors de votre connexion ! Veuillez réessayer",
        );
      }
    } catch (err) {
      err;
    }
  };
  return (
    <section className={style.loginSection}>
      <h1 className={style.loginTitle}>Connexion</h1>
      <Login onSubmit={handleLoginSubmit} />
    </section>
  );
}
export default LoginPage;
