// src/components/ItemDetail/SellerOtherItems.jsx

import ItemCard from '@/components/ItemGrid/ItemCard.jsx';
import styles from './SellerOtherItems.module.css';

function SellerOtherItems({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className={styles.section}>
      <h3 className={styles.title}>판매자의 다른 상품</h3>

      <div className={styles.grid}>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SellerOtherItems;
