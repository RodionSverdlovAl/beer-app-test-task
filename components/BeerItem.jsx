import Image from "next/image"
import Link from "next/link"

const BeerItem = ({beer}) =>{
    return(
        <div >
            <Link href={`/${beer.id}`} key={beer.id}>
            <a>
                <div className="beer-item">
                    <div>
                        <img src={beer.image_url} alt="BeerImage" width='100px' />
                    </div>
                    <div className="beer-info">
                        <h2>{beer.name}</h2>
                        {
                            beer.description.length > 140 ? <p>{beer.description.slice(0,140)}...</p> :
                            <p>{beer.description}</p>
                        }
                        
                    </div>
                </div>
            </a>
            </Link>
            
        </div>
    )
}

export default BeerItem