import { useFetchGifs } from "../hooks/useFetchGifs";
import { CardGif } from "./CardGif";

export const GifGrid = ({category}) => {

    const {objImgs, isLoading} = useFetchGifs(category)
    
    return (
    <>
        <h3>{category}</h3>
        <div className="card-grid">
            {objImgs.map( image => (
                <CardGif
                    key={image.id}
                    {...image}
                />
            ))}
        </div>
    </>
    )
}
