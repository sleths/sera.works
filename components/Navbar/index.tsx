import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
/* import Dots from "../../assets/textures/dots.svg"; */
import styles from "./styles.module.scss";
import useWindowSize from "../../hooks/useWindowSize";

const Navbar = () => {
  const size = useWindowSize();

  const [visible, setVisible] = useState(false);

  const ref = useRef<any>();

  const closeNav = () => setVisible(false);

  const animateProperty = size.width! < 1440 ? "height" : "width";

  const animatePercentage = size.width! < 1440 ? "100%" : "35%";

  const transition = {
    type: "spring",
    stiffness: 85,
    damping: 10,
    mass: 1,
    bounce: 0.25,
  };

  const variants = {
    hidden: {
      [animateProperty]: 0,
      transition: transition,
    },
    visible: {
      [animateProperty]: animatePercentage,
      transition: transition,
    },
  };

  const item = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, transition: { duration: 0.3 } },
  };

  const toggle = () => setVisible(!visible);

  return (
    <nav className={`center ${styles.nav}`} onClick={toggle}>
      {/* Open Icon */}
      <ChevronLeftIcon
        onClick={toggle}
        className={`${styles.icon} ${
          visible ? styles.closeIcon : styles.openIcon
        }`}
      />

      <AnimatePresence>
        {visible && (
          <motion.aside
            ref={ref}
            initial="hidden"
            animate="visible"
            variants={variants}
            exit={{
              [animateProperty]: 0,
            }}
          >
            {/* Close Icon */}

            <motion.ul variants={item} exit={{ opacity: 0 }}>
              <motion.li onClick={closeNav}>
                <Link href="/">Home</Link>
              </motion.li>
              <motion.li onClick={closeNav}>
                <Link href="#about">About</Link>
              </motion.li>
              {/* <li>
              <Link href="#work">Work</Link>
            </li> */}
              <motion.li onClick={closeNav}>
                <Link href="#contact">Contact</Link>
              </motion.li>
            </motion.ul>
            {/*  <Dots className={styles.dots} /> */}
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
