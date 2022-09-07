import Head from 'next/head'
import Image from 'next/image'
import { sim } from '../game/Sim'
// import { GameSelect } from '../components/GameSelect'
import styles from '../styles/Home.module.css'
import { GameSelect } from '../components/GameSelect'
import { StrategySelect } from '../components/StrategySelect'
import { GameReportDisplay } from '../components/GameReportDisplay'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Spirit Island Calculator
        </h1>
        {/* <GameSelect /> */}
        <GameSelect />
        <StrategySelect />
        <button onClick={sim}>Sim</button>
        <GameReportDisplay />
      </main>
    </div>
  )
}
