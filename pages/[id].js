import { useEffect } from "react";

export const getStaticPaths = async () => {
    const res = await fetch('https://api.punkapi.com/v2/beers');
    const data = await res.json();
  
    const paths = data.map(beer => {
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
        <div>Название: {beer[0].name}</div>
    )
}
export default Beer