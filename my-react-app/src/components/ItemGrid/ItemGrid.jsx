import styles from './ItemGrid.module.css';
import ItemCard from './ItemCard.jsx';

function ItemGrid({ items }) {
  console.log('받은데이터: ', items);
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemGrid;
