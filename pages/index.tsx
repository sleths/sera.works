import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Logo from "../assets/icons/logo.svg";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>sera.works</title>
        <meta name="description" content="A creative software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/**
       * Header
       */}
      <header>
        <Navbar />
        <Hero />
        <Link href="/">
          <a className={styles.logo}><Logo /></a>
        </Link>
      </header>
    </div>
  );
};

export default Home;
