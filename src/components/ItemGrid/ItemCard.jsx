import styles from './ItemCard.module.css';

function ItemCard({ item }) {
  return (
    <div className={styles.card}>
      <img src={item.image} className={styles.image} />

      <div className={styles.info}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.price}>{item.price}</p>
        <p className={styles.meta}>{item.location}</p>
      </div>
    </div>
  );
}

export default ItemCard;
