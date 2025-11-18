import styles from './SearchBar.module.css';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('중고거래');

  const categories = ['중고거래', '알바', '직거래'];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleCategory = (selected) => {
    setCategory(selected);
    setIsOpen(false);
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.dropdownWrapper}>
        <button className={styles.category} onClick={toggleMenu}>
          <span>{category}</span>
          <FiChevronDown className={isOpen ? styles.rotate : ''} />
        </button>

        {isOpen && (
          <ul className={styles.dropdownList}>
            {categories.map((item) => (
              <li
                key={item}
                className={styles.dropdownItem}
                onClick={() => handleCategory(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
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
