import Register from "../../../components/User/Register";
import type { registerType } from "../../../types/user.type";
import style from "./register.module.css";

function RegisterPage() {
  const handleSubmit = (data: registerType) => {
    data;
  };
  return (
    <section className={style.registerSection}>
      <h1 className={style.registerTitle}>Enregistrement</h1>
      <Register onSubmit={handleSubmit} />
    </section>
  );
}

export default RegisterPage;
