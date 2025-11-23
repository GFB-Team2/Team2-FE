import { Link } from 'react-router-dom';
import styles from './ItemCard.module.css';

function ItemCard({ item }) {

    const formattedDate = item.createdAt ? item.createdAt.split('T')[0] : '';

  return (
    <Link to={`/item/${item.id}`} className={styles.card}>
      <img src={item.thumbnailUrl} className={styles.image} alt={item.title} />

      <div className={styles.info}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.price}>{item.price}</p>
        <p className={styles.meta}>
          {item.region} · {formattedDate}
        </p>
      </div>
    </Link>
  );
}

export default ItemCard;
