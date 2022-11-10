import Link from "next/link";
import { useState } from "react";
import LinesDuoTone from "../../assets/icons/lines.svg";
import CloseDuoTone from "../../assets/icons/close.svg";
import Dots from "../../assets/textures/dots.svg";
import styles from "./styles.module.scss";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const openNav = () => setVisible(true);

  const closeNav = () => setVisible(false);

  return (
    <nav className={`center ${styles.nav}`}>
      {/* Open Icon */}
      <LinesDuoTone onClick={openNav} className={styles.openIcon} />

      {visible && (
        <aside>
          {/* Close Icon */}
          <div className={`center ${styles.close}`} onClick={closeNav}>
            <CloseDuoTone />
          </div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <Dots className={styles.dots} />
        </aside>
      )}
    </nav>
  );
};

export default Navbar;
