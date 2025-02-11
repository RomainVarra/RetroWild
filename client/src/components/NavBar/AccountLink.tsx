import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bobine from "../../assets/images/bobine.jpg";
import { useAuth } from "../../contexts/AuthContext";
import type { registerType } from "../../types/user.type";
import style from "./accountLink.module.css";

function AccountLink() {
  const { userId } = useAuth();
  const navigate = useNavigate();
  const handleAccountClick = () => navigate("/account");

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
    <div>
      <section>
        {userId ? (
          <section className={style.userSection}>
            <img
              className={style.userPicture}
              src={
                userAccount?.photo
                  ? `${import.meta.env.VITE_API_URL}/uploads/${userAccount.photo}`
                  : bobine
              }
              alt="photographie du candidat"
            />
            <article className={style.pictureAndLinkSection}>
              <h3 className={style.pseudoName}>
                {" "}
                Bienvenue {userAccount?.pseudo}
              </h3>
              <button
                className={style.linkAccount}
                type="button"
                onClick={handleAccountClick}
              >
                {" "}
                Mon compte
              </button>
            </article>
          </section>
        ) : null}
      </section>
    </div>
  );
}

export default AccountLink;
