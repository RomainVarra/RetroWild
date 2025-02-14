import { useForm } from "react-hook-form";
import type { loginType } from "../../types/user.type";
import style from "./login.module.css";

type UserLoginType = {
  onSubmit: (data: loginType) => void;
};

function Login({ onSubmit }: UserLoginType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>();

  return (
    <form className={style.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <section className={style.loginSection}>
        <label className={style.loginEmail} htmlFor="email">
          Email
          <input
            {...register("email", {
              required: "Le champ est requis",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                message: "Adresse email invalide",
              },
            })}
            type="email"
            id="email"
            placeholder="toto@hotmail.fr"
            className={style.inputEmail}
          />
          {typeof errors.email?.message === "string" && (
            <span className={style.errorMessage}>{errors.email.message}</span>
          )}
        </label>

        <label className={style.loginPassword} htmlFor="password">
          Mot de passe
          <input
            {...register("password", {
              required: "Le champ est requis",
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\d\s:])[^\s]{12,30}$/,
                message:
                  "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.",
              },
              minLength: {
                value: 12,
                message: "Le mot de passe doit contenir au moins 12 caractères",
              },
              maxLength: {
                value: 30,
                message:
                  "Le mot de passe ne peut pas contenir plus de 30 caractères",
              },
            })}
            type="password"
            id="password"
            placeholder="••••••••••••"
            className={style.inputPassword}
          />
          {typeof errors.password?.message === "string" && (
            <span className={style.errorMessage}>
              {errors.password.message}
            </span>
          )}
        </label>
      </section>

      <section className={style.buttonSection}>
        <button type="submit" className={style.loginButton}>
          Valider
        </button>
      </section>
    </form>
  );
}

export default Login;
