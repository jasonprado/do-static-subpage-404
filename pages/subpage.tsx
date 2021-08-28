import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Subpage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Subpage</title>
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          This is a subpage.
        </h1>
      </main>
    </div>
  );
}

export default Subpage;