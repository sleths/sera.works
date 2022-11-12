import Tech from "../../assets/illustrations/about-tech.svg";
import styles from "./styles.module.scss";
import Link from "next/link";

const About = () => {
  return (
    <section className={`${styles.container}`} id="about">
      <article>
        <h3>Hello, I'm Sera. </h3>
        <p>
          I am a software developer, Bilkent alumni, and amateur cyclist based in
          İzmir, Turkey. React, TypeScript, JavaScript and Next.js are my go-to
          technologies. Currently, I’m learning Three.js and React Three Fiber
          and working as a front-end developer at GoWit.
        </p>
        <Link href="#contact">
          <a className={`link-general ${styles.btn} ${styles.desktopBtn}`}>
            Contact Me
          </a>
        </Link>
      </article>
      <section>
        <Tech />
        <Link href="#contact">
          <a className={`link-general ${styles.btn} ${styles.mobileBtn}`}>
            Contact Me
          </a>
        </Link>
      </section>
    </section>
  );
};

export default About;
