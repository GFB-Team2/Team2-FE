import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SearchResultPage.module.css';

import TopBanner from '@/components/TopBanner/TopBanner.jsx';
import SearchHeader from '@/components/SearchHeader/SearchHeader.jsx';
import SearchFilterSidebar from '@/components/SearchFilterSidebar/SearchFilterSidebar.jsx';
import ItemGrid from '@/components/ItemGrid/ItemGrid.jsx';

import { mockSearchItems } from '@/data/mockSearchItems';

function SearchResultPage() {
  const { keyword } = useParams();

  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const observerRef = useRef(null);

  const BATCH_SIZE = 100;

  const loadMore = () => {
    const next = mockSearchItems.slice(0, page * BATCH_SIZE);
    setItems(next);
    setPage((prev) => prev + 1);
  };

  //  keyword가 바뀌면 목록 초기화하고 새로 로드
  useEffect(() => {
    setItems([]);
    setPage(1);
    loadMore();
  }, [keyword]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) loadMore();
    });

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
      <div className={styles.pageWrapper}>
        <TopBanner />

        <div className={styles.searchHeaderArea}>
          <SearchHeader />
        </div>

        <div className={styles.layout}>
          <SearchFilterSidebar />

          <div className={styles.itemsSection}>
            <h2 className={styles.title}>“{keyword}” 검색 결과</h2>

            <ItemGrid items={items} />

            <div ref={observerRef} className={styles.observer}></div>
          </div>
        </div>
      </div>
  );
}

export default SearchResultPage;
