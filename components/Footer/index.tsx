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
    { icon: <LinkedIn />, link: "https://www.linkedin.com/in/sera-zenginler/" },
    { icon: <Github />, link: "https://github.com/sleths" },
    { icon: <Twitter />, link: "https://twitter.com/seradevs" },
    { icon: <Telegram />, link: "https://telegram.me/sleths" },
  ];
  return (
    <footer className={`center ${styles.footer}`}>
      <section>
        <Link href="/">
          <Logo className={styles.logo} />
        </Link>
        <p>Come say hi</p>
        <ul className={`center ${styles.iconContainer}`}>
          <li>
            <a href="mailto:serazenginler@outlook.com" className="center">
              <Mail />
            </a>
          </li>
          {icons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} className="center" target="_blank" rel="noreferrer">
                {icon.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* <form className={`${styles.form}`}>
          <div className={`${styles.inputContainer}`}>
            <Hire />
            <input
              type="text"
              placeholder="Want to hire me?"
              className={styles.input}
            />
          </div>
          <button className={styles.btn}>Let's Talk</button>
        </form> */}

        <div className={styles.toTop}>
          <div className={styles.up}>
            <a href="#hero" className="center">
              <Up /> Back to top
            </a>
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
