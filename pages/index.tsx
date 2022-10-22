import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Logo from "../assets/icons/logo.svg";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
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
          <a className={styles.logo}>
            <Logo />
          </a>
        </Link>
      </header>
      {/**
       * Main Content
       */}
      <main>
        <Feature />
      </main>
    </>
  );
};

export default Home;
