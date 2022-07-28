import Image from "next/image"
import Link from "next/link"

const BeerItem = ({beer}) =>{
    return(
        <div>
            <Link href={`/${beer.id}`} key={beer.id}>
            <a>
                <div>
                    <div>
                        <img src={beer.image_url} alt="BeerImage" width='100px' />
                    </div>
                    <div>
                        <h2>{beer.name}</h2>
                        <p>{beer.description}</p>
                    </div>
                </div>
            </a>
            </Link>
            
        </div>
    )
}

export default BeerItem