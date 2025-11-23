// src/components/ItemDetail/SellerInfo.jsx

import styles from './SellerInfo.module.css';

function SellerInfo({ seller }) {
  return (
    <div className={styles.sellerBox}>
      <div className={styles.top}>
        <img src={seller.sellerProfileUrl} className={styles.profileImg} />
        <div>
          <div className={styles.name}>{seller.sellerNickname}</div>
          <div className={styles.location}>{seller.region}</div>
        </div>

        <div className={styles.temperature}>{seller.sellerMannerTemp}</div>
      </div>
    </div>
  );
}

export default SellerInfo;
