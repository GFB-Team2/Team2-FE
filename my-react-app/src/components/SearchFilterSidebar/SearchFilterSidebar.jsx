import styles from './SearchFilterSidebar.module.css';

function SearchFilterSidebar() {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>필터</h3>

      <div className={styles.section}>
        <label className={styles.checkboxRow}>
          <input type="checkbox" />
          <span>거래 가능한 보기</span>
        </label>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>위치</div>
        <ul className={styles.list}>
          <li className={styles.item}>길음동</li>
          <li className={styles.item}>종암동</li>
          <li className={styles.item}>정릉동</li>
          <li className={styles.item}>장위동</li>
        </ul>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>카테고리</div>
        <ul className={styles.list}>
          <li className={styles.item}>디지털기기</li>
          <li className={styles.item}>생활가전</li>
          <li className={styles.item}>가구/인테리어</li>
          <li className={styles.item}>생활/주방</li>
        </ul>
      </div>
    </aside>
  );
}

export default SearchFilterSidebar;
