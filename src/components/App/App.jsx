
import { useEffect, useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery";
import getImages from "../../images-api"
import Loader from "../Loader/Loader";


export default function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchImages() {
            try {
                setIsLoading(true);
                const fetchImages = await getImages();
                setIsLoading(false);
                setImages(fetchImages);
            } caches {

            }
        }
        fetchImages()
    }, []);

    return (
        <div>
            <SearchBar />
            {images.length > 0 && <ImageGallery items={images} />}
            {isError && <ErrorMessage />}
            {isLoading && <Loader />}
        </div>
    )
}