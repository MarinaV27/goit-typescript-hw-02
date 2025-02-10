import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";
import {Image} from '../../types'

interface ImageGalleryProps {
  items: Image[];
  onImageClick: (Image: Image) => void;

}

export default function ImageGallery({ items, onImageClick }: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li className={css.item} key={item.id}>
          <ImageCard image={item} onClick={() => onImageClick(item)} />
        </li>
      ))}
    </ul>
  );
}
