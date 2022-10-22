import Link from "next/link";
import HeroImg from "../../assets/illustrations/hero.svg";
import Wave from "../../assets/textures/wave.svg";
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <section className={`center ${styles.hero}`}>
      <section className={styles.images}>
        <div className={styles.bg}></div>
        <HeroImg className={styles.heroImg} />
        <Wave className={styles.wave} />
      </section>
      <article className={styles.textContainer}>
        <h1>Hello, I’m a software developer.</h1>
        <p>
          From building dashboards to building websites, or apps, I take a
          human-centered approach to problem solving. I believe in assembling
          meaningful connections between companies/freelancers and customers.
        </p>
        <Link href="#">
          <a className={`link-general ${styles.btn}`}>Explore</a>
        </Link>
      </article>
    </section>
  );
};

export default Hero;
