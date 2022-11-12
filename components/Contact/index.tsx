import ContactImg from "../../assets/illustrations/contact.svg";
import Texture from "../../assets/textures/acc.svg";
import styles from "./styles.module.scss";

const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <article>
        <h5>“No wise fish would go anywhere without a porpoise.”</h5>
        <p>― Lewis Carroll, Alice in Wonderland</p>
      </article>
      <div className={styles.images}>
        <Texture className={styles.texture} />
        <ContactImg className={styles.bike} />
      </div>
    </section>
  );
};

export default Contact;
