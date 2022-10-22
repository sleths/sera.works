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
          Graduated from Bilkent University in 2020 with high honors. I decided
          to leave academia and found myself in the world of startups. Since
          then, I’ve been improving myself as a frontend developer all the while
          solving problems in an agile environment. At my leisure, you can find
          me cycling in my hometown İzmir, or daydreaming about Web 3.0.
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
