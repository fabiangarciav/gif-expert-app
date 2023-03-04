import { useEffect, useState } from "react";
import { CardGif } from "./CardGif";
import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({category}) => {

    const [objImgs, setObjImg] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(category)
        setObjImg(newImages)
    }

    useEffect(() => {
        getImages()
    }, []);
    
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
