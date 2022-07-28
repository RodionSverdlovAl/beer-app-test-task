import Head from 'next/head'
import Image from 'next/image'
import BeerList from '../components/BeerList'
import styles from '../styles/Home.module.css'

export default function Home({beers}) {
  console.log(beers)
  return (
    <div className={styles.container}>
        <main>
         <input type='text' placeholder='Поиск пива'></input>
         <BeerList beers={beers}/>
         
        </main>
    </div>
  )
}


export async function getStaticProps() {
  const res = await fetch('https://api.punkapi.com/v2/beers');
  const data = await res.json();
  return {
    props: {
      beers: data
    },
  }
}
