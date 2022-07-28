import Image from "next/image"

const BeerItem = ({beer}) =>{
    return(
        <div>
            <div>
                {/* <Image src={beer.image_url} alt='beerImage' layout='fill'/> */}
                <img src={beer.image_url} alt="BeerImage" width='100px' />
            </div>
            <div>
                <h2>{beer.name}</h2>
            </div>
        </div>
    )
}

export default BeerItem