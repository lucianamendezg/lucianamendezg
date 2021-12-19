import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Desktop from '../components/desktop/desktop'
import Taskbar from '../components/taskbar/taskbar'
import Screen from '../components/screen'

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>Luciana Mendez Gonzalez</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Screen
        Desktop={Desktop}
        Taskbar={Taskbar}
        />
    </div>
  )
}
