import styles from './PopularKeywords.module.css';

const keywords = [
  '에어컨',
  '에어컨청소',
  '노트북',
  '현대 중고차',
  '이사짐 알바',
  '근처 맛집',
  '동네 친구',
  '투표',
  '난방',
  '냉장고',
];

function PopularKeywords() {
  return (
    <div className={styles.keywordsContainer}>
      <span className={styles.title}>인기 검색어:</span>
      <div className={styles.keywordsList}>
        {keywords.map((keyword) => (
          <a href="#" key={keyword} className={styles.keyword}>
            {keyword}
          </a>
        ))}
      </div>
    </div>
  );
}
export default PopularKeywords;
