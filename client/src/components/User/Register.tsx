import { useForm } from "react-hook-form";
import type { registerType } from "../../types/user.type";
import style from "./register.module.css";

type UserFormRegisterType = {
  onSubmit: (data: registerType) => void;
};

function Register({ onSubmit }: UserFormRegisterType) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<registerType>();

  return (
    <form className={style.formRegister} onSubmit={handleSubmit(onSubmit)}>
      <section className={style.sectionRegister}>
        <label htmlFor="pseudo" className={style.pseudoLabel}>
          Pseudo :
          <input
            placeholder="TotoDu59"
            {...register("pseudo", {
              required: "Le champ est requis",
              minLength: {
                value: 2,
                message: "Votre pseudo doit au moins contenir 2 caractères",
              },
              maxLength: {
                value: 30,
                message:
                  "Votre pseudo ne peut pas contenir plus de 30 caractères",
              },
            })}
            type="text"
            id="pseudo"
            className={style.pseudoInput}
          />
          {typeof errors.pseudo?.message === "string" && (
            <span className={style.errorMessage}>{errors.pseudo.message}</span>
          )}
        </label>
        <label htmlFor="photo" className={style.photoLabel}>
          Photo de profil :
          <input
            type="file"
            id="photo"
            accept=".jpg,.png,.jpeg"
            className={style.photoInput}
            {...register("photo")}
          />
        </label>
        {errors.photo && (
          <span className={style.errorMessage}>{errors.photo.message}</span>
        )}
        <label htmlFor="email" className={style.emailLabel}>
          Adresse Mail :
          <input
            placeholder="toto@hotmail.com"
            {...register("email", {
              required: "Le champ est requis",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                message: "Adresse email invalide",
              },
            })}
            className={style.emailInput}
            type="email"
            id="email"
          />
          {typeof errors.email?.message === "string" && (
            <span className={style.errorMessage}>{errors.email.message}</span>
          )}
        </label>
        <label htmlFor="password" className={style.passwordLabel}>
          Mot de passe :
          <input
            placeholder="••••••••••••"
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
            className={style.passwordInput}
          />
          {typeof errors.password?.message === "string" && (
            <span className={style.errorMessage}>
              {errors.password.message}
            </span>
          )}
        </label>
        <label htmlFor="confirmPassword" className={style.confirmPasswordLabel}>
          Confirmez votre mot de passe :
          <input
            placeholder="••••••••••••"
            {...register("confirmPassword", {
              required: "Le champ est requis",
              validate: (value) => {
                if (watch("password") !== value) {
                  return "Les mots de passe ne correspondent pas";
                }
              },
            })}
            type="password"
            id="confirmPassword"
            className={style.confirmPasswordInput}
          />
          {typeof errors.confirmPassword?.message === "string" && (
            <span className={style.errorMessage}>
              {errors.confirmPassword.message}
            </span>
          )}
        </label>
      </section>
      <button type="submit" className={style.submitButton}>
        S'enregistrer
      </button>
    </form>
  );
}

export default Register;
