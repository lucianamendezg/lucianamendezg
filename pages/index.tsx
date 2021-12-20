import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Screen from '../components/screen'

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>Luciana Mendez Gonzalez</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Screen/>
    </div>
  )
}
