import WalkingMen from "../../assets/illustrations/nav.svg";
import styles from "./styles.module.scss";

const Feature = () => {
  return (
    <section className={`main-section center ${styles.container}`} id="explore">
      <article>
        <h2>“Anything one man can imagine, other men can make real.”</h2>
        <p>― Jules Verne, Around the World in Eighty Days</p>
      </article>
      <WalkingMen />
    </section>
  );
};

export default Feature;
