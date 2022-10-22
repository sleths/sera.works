import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>sera.works</title>
        <meta name="description" content="A creative software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
