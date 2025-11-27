import styles from './NeighborhoodMenu.module.css';

function NeighborhoodButton({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
export default NeighborhoodButton;
