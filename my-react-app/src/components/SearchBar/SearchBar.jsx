import styles from './SearchBar.module.css';
import { FiSearch, FiChevronDown } from 'react-icons/fi';

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.category}>
        <span>중고거래</span>
        <FiChevronDown />
      </div>
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        className={styles.input}
      />
      <button className={styles.searchButton}>
        <FiSearch />
      </button>
    </div>
  );
}
export default SearchBar;
