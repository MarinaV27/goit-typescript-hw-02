import axios from "axios"
import { useEffect, useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchImages(){
            const response = await  axios.get(
                collections/:id/related
            ) 
            setImages(response.data.hits);
        }
        fetchImages()
    }, []);

    return (
        <div>
            <SearchBar />
            <ImageGallery items={images} />
        </div>
    )
}