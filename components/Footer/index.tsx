import Link from "next/link";
import Logo from "../../assets/icons/logo-footer.svg";
import Mail from "../../assets/icons/mail.svg";
import LinkedIn from "../../assets/icons/linkedIn.svg";
import Github from "../../assets/icons/github.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Hire from "../../assets/icons/hire.svg";
import Up from "../../assets/icons/up.svg";
import Brush from "../../assets/textures/brush.svg";
import styles from "./styles.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  const icons = [
    { icon: <Mail />, link: "#" },
    { icon: <LinkedIn />, link: "#" },
    { icon: <Github />, link: "#" },
    { icon: <Twitter />, link: "#" },
    { icon: <Telegram />, link: "#" },
  ];
  return (
    <footer className={styles.footer}>
      <section>
        <Link href="/">
          <Logo />
        </Link>
        <p>Come say hi...</p>
        <ul className={`center ${styles.iconContainer}`}>
          {icons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} className="center">
                {icon.icon}
              </a>
            </li>
          ))}
        </ul>

        <form className={`${styles.form}`}>
          <div className={`${styles.inputContainer}`}>
            <Hire />
            <input
              type="text"
              placeholder="Want to hire me?"
              className={styles.input}
            />
          </div>
          <button className={styles.btn}>Let's Talk</button>
        </form>

        <div className={styles.toTop}>
          <div className={styles.up}>
            <Up />
            <a href="#hero">Back to top</a>
          </div>
          <Brush className={styles.brush} />
        </div>
        <p className={styles.copy}>
          &copy; {year} Sera Zenginler. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
