import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LinesDuoTone from "../../assets/icons/lines.svg";
import CloseDuoTone from "../../assets/icons/close.svg";
import Dots from "../../assets/textures/dots.svg";
import styles from "./styles.module.scss";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const ref = useRef<any>();

  const openNav = () => setVisible(true);

  const closeNav = () => setVisible(false);

  useEffect(() => {
    if (ref.current === undefined || ref.current === null) return;
    let handler = (event: any) => {
      if (!ref!.current.contains(event.target)) {
        closeNav();
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav className={`center ${styles.nav}`}>
      {/* Open Icon */}
      <LinesDuoTone onClick={openNav} className={styles.openIcon} />

      {visible && (
        <aside ref={ref}>
          {/* Close Icon */}
          <div className={`center ${styles.close}`} onClick={closeNav}>
            <CloseDuoTone />
          </div>
          <ul>
            <li onClick={closeNav}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={closeNav}>
              <Link href="#about">About</Link>
            </li>
            {/* <li>
              <Link href="#work">Work</Link>
            </li> */}
            <li onClick={closeNav}>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          {/*  <Dots className={styles.dots} /> */}
        </aside>
      )}
    </nav>
  );
};

export default Navbar;
