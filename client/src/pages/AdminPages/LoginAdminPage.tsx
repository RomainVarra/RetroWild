import Login from "../../components/User/Login";
import type { loginType } from "../../types/user.type";
import style from "./loginAdminPage.module.css";

function LoginAdminPage() {
  const handleSubmit = (data: loginType) => {
    data;
  };
  return (
    <section className={style.adminLoginSection}>
      <h1 className={style.adminTitle}>Administrateur</h1>
      <Login onSubmit={handleSubmit} />
    </section>
  );
}

export default LoginAdminPage;
