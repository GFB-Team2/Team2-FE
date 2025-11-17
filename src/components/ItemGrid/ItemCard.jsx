import { Link } from 'react-router-dom';
import styles from './ItemCard.module.css';

function ItemCard({ item }) {
  return (
    <Link to={`/item/${item.id}`} className={styles.card}>
      <img src={item.image} className={styles.image} alt={item.title} />

      <div className={styles.info}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.price}>{item.price}</p>
        <p className={styles.meta}>{item.location}</p>
      </div>
    </Link>
  );
}

export default ItemCard;
