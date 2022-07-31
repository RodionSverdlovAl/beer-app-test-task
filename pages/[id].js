import { useEffect } from "react";

export const getStaticPaths = async () => {
    let beers = [];
    for(let i=0; i<5; i++){
        const res = await fetch(`https://api.punkapi.com/v2/beers?page=${i+1}&per_page=80`);
        const data =  await res.json();
        beers = [...beers, ...data]
    }
  
    const paths = beers.map(beer => {
      return {
        params: { id: beer.id.toString() }
      }
    });
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    const data = await res.json();
  
    return {
      props: { beer: data }
    }
  }

const Beer = ({beer}) =>{
    useEffect(()=>{
        console.log(beer)
    },[])
    return(
        <main>
          <h1>Название: {beer[0].name}</h1>
          <div className="beer-page">
            <div className="beer-image">
              <img src={beer[0].image_url}></img>
            </div>
            <div className="description">
                <p>{beer[0].tagline}</p>
                <p>abv: {beer[0].abv}</p>
                <p>Description: {beer[0].description}</p>

               
                <ul>
                <p>Food pairing:</p>
                  {beer[0].food_pairing.map(li=> <li>{li}</li>)}
                </ul>
            </div>
          </div>
          
        </main>
        
    )
}
export default Beer