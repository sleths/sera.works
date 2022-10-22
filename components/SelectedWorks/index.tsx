import Work from "../../assets/illustrations/work.svg";
import styles from "./styles.module.scss";

const SelectedWorks = () => {
  return (
    <section className={`center ${styles.container}`}>
      <h4>Selected Works</h4>
      <p>
        work in progress... work in progress... work in...
      </p>
      <Work />
    </section>
  );
};

export default SelectedWorks;
