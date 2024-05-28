import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items }) {
    return (
        <ul>
            {items.map(item => 
                (
                    <li key={items.id}>
                        <ImageCard image={item} />
                    </li>
                )
            ) 
            }
            <li>
                <div>
                    <img src="" alt="" />
                </div>
            </li>
        </ul>
    )
}