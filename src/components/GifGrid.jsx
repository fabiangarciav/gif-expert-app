import { CardGif } from "./CardGif";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {objImgs, isLoading} = useFetchGifs(category)
    
    return (
    <>
        <h3>{category}</h3>

        {isLoading && ( <h2>Cargando...</h2>)}

        <div className="card-grid">
            {objImgs.map( (image) => (
                <CardGif
                    key={image.id}
                    {...image}
                />
            ))}
        </div>
    </>
    )
}
