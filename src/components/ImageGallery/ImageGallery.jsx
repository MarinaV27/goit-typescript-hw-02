import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css"

export default function ImageGallery({ items }) {
    return (
        <ul className={css.menuList}>
            {items.map(item => 
                (
                    <li className={css.list} key={items.id}>
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