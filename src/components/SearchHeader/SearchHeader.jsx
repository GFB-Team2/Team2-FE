import styles from './SearchHeader.module.css';
import LocationSelector from '@/components/LocationSelector/LocationSelector.jsx';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import PopularKeywords from '@/components/PopularKeywords/PopularKeywords.jsx';

function SearchHeader() {
  return (
    <div className={styles.searchHeader}>
      <div className={styles.searchSection}>
        <LocationSelector />
        <SearchBar />
      </div>
      <div className={styles.bottomSection}>
        <PopularKeywords />
      </div>
    </div>
  );
}

export default SearchHeader;
