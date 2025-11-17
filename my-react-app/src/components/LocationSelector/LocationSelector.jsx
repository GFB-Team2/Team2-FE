import styles from './LocationSelector.module.css';
import { FiMapPin, FiChevronDown } from 'react-icons/fi';

function LocationSelector() {
  return (
    <button className={styles.locationButton}>
      <FiMapPin className={styles.icon} />
      <span>정릉동</span>
      <FiChevronDown className={styles.icon} />
    </button>
  );
}
export default LocationSelector;
