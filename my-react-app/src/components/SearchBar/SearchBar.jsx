import styles from './SearchBar.module.css';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar({region}) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('중고거래');
  const [keyword, setKeyword] = useState('');

  const navigate = useNavigate();

  const categories = ['중고거래', '알바', '직거래'];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleCategory = (selected) => {
    setCategory(selected);
    setIsOpen(false);
  };

  const handleSearch = () => {
    if (!keyword.trim()) return;
    // navigate(`/search/${encodeURIComponent(keyword)}`);
      navigate(`/search?keyword=${encodeURIComponent(keyword)}&categories=${encodeURIComponent(category)}&regions=${encodeURIComponent(region)}`);
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
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
      />

      <button className={styles.searchButton} onClick={handleSearch}>
        <FiSearch />
      </button>
    </div>
  );
}

export default SearchBar;
