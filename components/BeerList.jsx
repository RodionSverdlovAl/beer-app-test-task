import BeerItem from "./BeerItem"

const BeerList = ({beers}) =>{
    return(
        beers.map(beer=><BeerItem key={beer.id} beer={beer}/>)
    )
}
export default BeerList




