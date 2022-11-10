import Tech from "../../assets/illustrations/about-tech.svg";
import Design from "../../assets/illustrations/about-design.svg";
import Learning from "../../assets/illustrations/about-learning.svg";
import styles from "./styles.module.scss";
import Link from "next/link";

const About = () => {
  return (
    <section className={`${styles.container}`}>
      <article>
        <h3>This is Sera.</h3>
        <p>
        I am a software engineer, Bilkent alumni, and amateur cyclist based in İzmir, Turkey. React, TypeScript, JavaScript and Next.js are my go-to technologies. Currently, I’m learning Three.js and React Three Fiber and working as a front-end developer at GoWit.
        </p>
      </article>
      <section className={`center ${styles.images}`}>
        <div>
          <Tech />
          <div className={`${styles.bg}`}></div>
        </div>
        <div>
          <Design />
          <div className={`${styles.bg} ${styles.middle}`}></div>
        </div>
        <div>
          <Learning />
          <div className={`${styles.bg}`}></div>
        </div>
      </section>
      <Link href="/about"><a className={`link-general ${styles.btn}`}>Read More</a></Link>
    </section>
  );
};

export default About;
