import styles from './SearchRelatedKeywords.module.css';

function SearchRelatedKeywords({ keyword }) {
  const related = [
    `${keyword} 청소`,
    `${keyword} 설치`,
    `${keyword} 이전설치`,
    `${keyword} 중고`,
    `${keyword} 고장`,
  ];

  return (
    <div className={styles.container}>
      <span className={styles.title}>연관 검색어:</span>

      <div className={styles.list}>
        {related.map((r) => (
          <a href={`/search/${r}`} key={r} className={styles.word}>
            {r}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SearchRelatedKeywords;
