import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { KijijiPage } from "./kijiji-page";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Key Gee Gee</title>
        <meta
          name="description"
          content="Kenny's sick fuckin' kijiji dashboard. Fuck yeah."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <KijijiPage />
      </main>
    </div>
  );
}
