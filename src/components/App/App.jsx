
import { useEffect, useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery";
import getImages from "../../images-api"

export default function App() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchImages() {
            const fetchImages = await getImages();
            setImages(fetchImages);
        }
        fetchImages()
    }, []);

    return (
        <div>
            <SearchBar />
            {images.length > 0 && <ImageGallery items={images} />}
        </div>
    )
}