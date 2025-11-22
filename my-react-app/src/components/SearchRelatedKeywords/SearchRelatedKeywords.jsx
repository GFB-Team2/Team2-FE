// SearchRelatedKeywords.jsx
import styles from './SearchRelatedKeywords.module.css';

function SearchRelatedKeywords({ keyword }) {
    // 연관 검색어 "원본 단어 목록"
    const baseRelatedList = ["청소", "설치", "이전설치", "중고", "부품"];

    // keyword 제거된 최종 연관검색어 리스트
    const related = baseRelatedList.filter((word) =>
        word.includes(keyword) || keyword.length === 0
    );

    return (
        <div className={styles.container}>
            <span className={styles.title}>연관 검색어:</span>

            <div className={styles.list}>
                {related.map((word) => (
                    <a href={`/search/${word}`} key={word} className={styles.word}>
                        {word}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default SearchRelatedKeywords;
