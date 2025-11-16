import styles from './NeighborhoodMenu.module.css';

function NeighborhoodButton({ children }) {
  return <button className={styles.button}>{children}</button>;
}
export default NeighborhoodButton;
