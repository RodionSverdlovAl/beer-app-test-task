import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
        <main>
          BEER APP
        </main>
      <Footer/>
    </div>
  )
}
