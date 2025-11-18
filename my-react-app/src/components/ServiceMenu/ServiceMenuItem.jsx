import styles from './ServiceMenu.module.css';

function ServiceMenuItem({ label, icon }) {
  return (
    <button className={styles.menuItem}>
      <div className={styles.iconPlaceholder}>
        <img src={icon} alt={label} className={styles.image} />
      </div>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
export default ServiceMenuItem;
