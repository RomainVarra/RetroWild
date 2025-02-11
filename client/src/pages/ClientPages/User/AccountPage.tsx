import { useEffect, useState } from "react";
import bobine from "../../../assets/images/bobine.jpg";
import { useAuth } from "../../../contexts/AuthContext";
import type { registerType } from "../../../types/user.type";
import style from "./accountPage.module.css";

function AccountPage() {
  const { userId } = useAuth();
  const [userAccount, setUserAccount] = useState<registerType | null>(null);

  useEffect(() => {
    if (userId) {
      fetch(`${import.meta.env.VITE_API_URL}/api/user/${userId}`)
        .then((response) => response.json())
        .then((data) => setUserAccount(data))
        .catch((error) => console.error(error));
    }
  }, [userId]);
  return (
    <section className={style.accountSection}>
      <h2 className={style.accountTitle}>{userAccount?.pseudo}</h2>
      <img
        className={style.accountPicture}
        src={
          userAccount?.photo
            ? `${import.meta.env.VITE_API_URL}/uploads/${userAccount.photo}`
            : bobine
        }
        alt={`illustration de ${userAccount?.pseudo}`}
      />
    </section>
  );
}

export default AccountPage;
