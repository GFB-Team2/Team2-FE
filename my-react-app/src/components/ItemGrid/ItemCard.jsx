import { Link } from 'react-router-dom';
import styles from './ItemCard.module.css';
import { formatTimeAgo } from '@/utils/timeUtils.js';



function ItemCard({ item }) {
  const formattedDate = item.createdAt ? item.createdAt.split('T')[0] : '';

    const timeAgo = formattedDate ? formatTimeAgo(formattedDate) : '방금 전';

  return (
    <Link to={`/item/${item.id}`} className={styles.card}>
      <img src={item.thumbnailUrl} className={styles.image} alt={item.title} />

      <div className={styles.info}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.price}>{item.price.toLocaleString()}</p>
        <p className={styles.meta}>
          {item.region} · {timeAgo}
        </p>
      </div>
    </Link>
  );
}

export default ItemCard;
