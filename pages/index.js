import Head from 'next/head'
import Image from 'next/image'
import BeerList from '../components/BeerList'
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Home({beers}) {

  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)

  useEffect(()=>{
    console.log(currentPage)
    if(fetching){
      console.log('fetching')
      axios.get(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=25`)
      .then(response =>{
        setItems([...items, ...response.data])
        setCurrentPage(prevState => prevState +1)
      })
      .finally(()=>setFetching(false))
    }
    
  }, [fetching])

  useEffect(()=>{
    document.addEventListener('scroll', scrollHandler)
    return function(){
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) =>{
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && items.length< 325){
      setFetching(true);
    }
  }

  const [value, setValue] = useState('');

  const filtredBeers = beers.filter(beer =>{
    return beer.name.toLowerCase().includes(value.toLocaleLowerCase())
  })

  return (
    <div>
        <main>
         <input type='text' placeholder='Поиск пива' onChange={(e)=>{setValue(e.target.value)}}></input>
         {
          value.length ? <BeerList beers = {filtredBeers}/> : <BeerList beers={items}/>
         }
        
        </main>
    </div>
  )
}

// тут получаем фулл  массив для поиска а для рендера будет по типу постраничной пагинации
export async function getStaticProps() {
  let beers = [];
  for(let i=0; i<5; i++){
    const res = await fetch(`https://api.punkapi.com/v2/beers?page=${i+1}&per_page=80`);
    const data =  await res.json();
    beers = [...beers, ...data]
  }
  return {
    props: {
      beers: beers
    },
  }
}
