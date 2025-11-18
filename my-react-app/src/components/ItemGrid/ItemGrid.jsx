import styles from './ItemGrid.module.css';
import ItemCard from './ItemCard.jsx';

function ItemGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemGrid;
