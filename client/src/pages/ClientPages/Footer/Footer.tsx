import { FaLinkedin } from "react-icons/fa";
import style from "./footer.module.css";

function Footer() {
  return (
    <article className={style.footerSection}>
      <section className={style.footerText}>
        <p>© RetroWild - 2025 </p>
      </section>
      <section>
        <a
          href="https://www.linkedin.com/in/romain-varra/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className={style.footerIcone} />
        </a>
      </section>
    </article>
  );
}

export default Footer;
