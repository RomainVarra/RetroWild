import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logoRW from "../../assets/images/retrowildLogo.webp";
import style from "./navbar.module.css";

function NavBar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleKeyUp = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);

  return (
    <nav className={style.navBarStyle}>
      <section className={style.firstPartNav}>
        <div className={style.navLeftSection}>
          <img
            className={style.myLogo}
            onKeyUp={handleKeyUp}
            src={logoRW}
            alt="Logo du site"
            onClick={handleClick}
          />
          <h1 className={style.mainTitle}>RetroWild</h1>
        </div>

        <div className={style.desktopButton}>
          <button className={style.loginButton} type="button">
            Connection
          </button>
          <button
            onClick={handleRegister}
            className={style.registerButton}
            type="button"
          >
            S'inscrire
          </button>
        </div>

        <button
          type="button"
          className={style.burgerButton}
          onClick={toggleMenu}
        >
          <span className={style.burgerBar1}> </span>
          <span className={style.burgerBar2}> </span>
          <span className={style.burgerBar3}> </span>
        </button>
      </section>

      <section className={style.mobileNavLink}>
        <ul className={`${style.navLink} ${menu ? style.showMenu : ""}`}>
          <li>
            <NavLink to={"/"} onClick={() => setMenu(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/articles"} onClick={() => setMenu(false)}>
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink to={"/streaming"} onClick={() => setMenu(false)}>
              Streaming
            </NavLink>
          </li>
          <li>
            <NavLink to={"/tops"} onClick={() => setMenu(false)}>
              Tops
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"} onClick={() => setMenu(false)}>
              Se connecter
            </NavLink>
          </li>
          <li>
            <NavLink to={"/register"} onClick={() => setMenu(false)}>
              S'inscrire
            </NavLink>
          </li>
        </ul>
      </section>

      <ul className={style.navLinkDesktop}>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/articles"}>Articles</NavLink>
        </li>
        <li>
          <NavLink to={"/streaming"}>Streaming</NavLink>
        </li>
        <li>
          <NavLink to={"/tops"}>Tops</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
