// src/components/ItemDetail/SellerInfo.jsx

import styles from './SellerInfo.module.css';

function SellerInfo({ seller }) {
  return (
    <div className={styles.sellerBox}>
      <div className={styles.top}>
        <img src={seller.profile} className={styles.profileImg} />
        <div>
          <div className={styles.name}>{seller.name}</div>
          <div className={styles.location}>{seller.location}</div>
        </div>

        <div className={styles.temperature}>{seller.temperature}</div>
      </div>
    </div>
  );
}

export default SellerInfo;
