import styles from './ServiceMenu.module.css';

function ServiceMenuItem({ label }) {
  return (
    <button className={styles.menuItem}>
      <span className={styles.iconPlaceholder}>ICON</span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
export default ServiceMenuItem;
