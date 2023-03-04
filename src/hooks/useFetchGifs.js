import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ({category}) => {

    const [objImgs, setObjImg] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs(category)
        setObjImg(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, []);

  return {
    objImgs,
    isLoading,
  }
}

