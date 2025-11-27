// src/components/ItemDetail/ItemImageSlider.jsx

import styles from './ItemImageSlider.module.css';

function ItemImageSlider({ images }) {
  return (
    <div className={styles.slider}>
      <img src={images[0]} className={styles.mainImage} />
    </div>
  );
}

export default ItemImageSlider;
