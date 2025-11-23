import styles from './LocationSelector.module.css';
import { FiMapPin, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';

function LocationSelector({currentLocation, onSelectLocation}) {
  const [isOpen, setIsOpen] = useState(false);
  // const [location, setLocation] = useState('정릉동');

  const locationList = ['정릉동', '길음동', '돈암동', '장위동'];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const selectLocation = (location) => {
    onSelectLocation(location);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.locationButton} onClick={() => toggleMenu()}>
        <FiMapPin className={styles.icon} />
        <span>{currentLocation}</span>
        <FiChevronDown className={isOpen ? styles.rotate : ''} />
      </button>

      {isOpen && (
        <ul className={styles.dropdownList}>
          {locationList.map((location) => (
            <li
              key={location}
              className={styles.dropdownItem}
              onClick={() => selectLocation(location)}
            >
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default LocationSelector;
