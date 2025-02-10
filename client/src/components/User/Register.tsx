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
    <form className={style.formRegister}>
      <section className={style.pseudo}>
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
      </section>
      <button type="submit">S'enregistrer</button>
    </form>
  );
}

export default Register;
