
import { useEffect, useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery";
import getImages from "../../images-api"
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


export default function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchImages() {
            try {
                setIsLoading(true);
                const fetchImages = await getImages();
                setImages(fetchImages);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchImages()
    }, []);

    return (
        <div>
            <SearchBar onSubmit={} />
            {images.length > 0 && <ImageGallery items={images} />}
            {isError && <ErrorMessage />}
            {isLoading && <Loader />}
        </div>
    )
}