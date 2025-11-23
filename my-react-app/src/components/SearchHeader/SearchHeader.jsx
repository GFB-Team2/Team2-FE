// SearchHeader.jsx
import styles from './SearchHeader.module.css';
import LocationSelector from '@/components/LocationSelector/LocationSelector.jsx';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import PopularKeywords from '@/components/PopularKeywords/PopularKeywords.jsx';
import { useState } from 'react';

function SearchHeader({ layout = 'default', className = '' }) {

    const [location, setLocation] = useState('정릉동');
  return (
    <div
      className={`${layout === 'search' ? styles.searchHeaderSearchPage : styles.searchHeader} ${className}`}
    >
      <div className={styles.inner}>
        <div className={styles.searchSection}>
          <LocationSelector
          currentLocation={location}
          onSelectLocation={setLocation}/>
          <SearchBar region={location}/>
        </div>

        <div className={styles.bottomSection}>
          <PopularKeywords />
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
