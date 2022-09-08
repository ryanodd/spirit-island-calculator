import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import { sim } from '../game/Sim'
// import { GameSelect } from '../components/GameSelect'
import styles from '../styles/Home.module.css'

const Simulator = dynamic(
  () => import("../components/Simulator"),
  { ssr: false },
)


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spirit Island Sim</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <Simulator />
      </main>
    </div>
  )
}
