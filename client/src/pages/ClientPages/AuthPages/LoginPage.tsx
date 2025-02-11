import Login from "../../../components/User/Login";
import type { loginType } from "../../../types/user.type";
import style from "./register.module.css";

function LoginPage() {
  const handleLoginSubmit = (data: loginType) => {
    data;
  };
  return (
    <section className={style.loginSection}>
      <h1 className={style.loginTitle}>Connexion</h1>
      <Login onSubmit={handleLoginSubmit} />
    </section>
  );
}
export default LoginPage;
