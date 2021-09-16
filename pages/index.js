import Image from "next/image";
import styles from "../styles/Home.module.css";

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming Soon <a href="https://nextjs.org">Next.js!</a> OVERHAUL
        </h1>
      </main>
    </Layout>
  );
}
