// import { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import styles from './SearchResultPage.module.css';
//
// import TopBanner from '@/components/TopBanner/TopBanner.jsx';
// import SearchHeader from '@/components/SearchHeader/SearchHeader.jsx';
// import SearchFilterSidebar from '@/components/SearchFilterSidebar/SearchFilterSidebar.jsx';
// import ItemGrid from '@/components/ItemGrid/ItemGrid.jsx';
//
// import { mockSearchItems } from '@/data/mockSearchItems';
//
// function SearchResultPage() {
//   const { keyword } = useParams();
//
//   const [page, setPage] = useState(1);
//   const [items, setItems] = useState([]);
//   const observerRef = useRef(null);
//
//   const BATCH_SIZE = 40;
//
//   const loadMore = () => {
//     const filtered = mockSearchItems.filter((item) =>
//       item.title.includes(keyword)
//     );
//
//     const next = filtered.slice(0, page * BATCH_SIZE);
//
//     setItems(next);
//     setPage((prev) => prev + 1);
//   };
//
//   useEffect(() => {
//     setItems([]);
//     setPage(1);
//     loadMore();
//   }, [keyword]);
//
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) loadMore();
//     });
//
//     if (observerRef.current) observer.observe(observerRef.current);
//
//     return () => observer.disconnect();
//   }, []);
//
//   if (items.length === 0) {
//     return (
//       <div className={styles.pageWrapper}>
//         <TopBanner />
//
//         <div className={styles.searchHeaderArea}>
//           <SearchHeader />
//         </div>
//
//         <div className={styles.noResult}>
//           <h2>“{keyword}” 에 대한 검색결과가 없어요 </h2>
//           <p>다른 검색어를 입력해보세요!</p>
//         </div>
//       </div>
//     );
//   }
//
//   return (
//     <div className={styles.pageWrapper}>
//       <TopBanner />
//
//       <div className={styles.searchHeaderArea}>
//         <SearchHeader />
//       </div>
//
//       <div className={styles.layout}>
//         <SearchFilterSidebar />
//
//         <div className={styles.itemsSection}>
//           <h2 className={styles.title}>“{keyword}” 검색 결과</h2>
//
//           <ItemGrid items={items} />
//
//           <div ref={observerRef} className={styles.observer}></div>
//         </div>
//       </div>
//     </div>
//   );
// }
//
// export default SearchResultPage;
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom'; // useSearchParams 추가
import styles from './SearchResultPage.module.css';

import TopBanner from '@/components/TopBanner/TopBanner.jsx';
import SearchHeader from '@/components/SearchHeader/SearchHeader.jsx';
import SearchFilterSidebar from '@/components/SearchFilterSidebar/SearchFilterSidebar.jsx';
import ItemGrid from '@/components/ItemGrid/ItemGrid.jsx';

import { getItems } from '@/api/ItemsApi.js';

function SearchResultPage() {
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');
  const region = searchParams.get('regions');
  const category = searchParams.get('categories');

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPageTitle = () => {
    if (keyword) {
      return `"${keyword}" 검색 결과`;
    }
    if (category) {
      return `"${category}" 카테고리 매물`;
    }
    return '전체 상품 목록';
  };

  const getNoResultMessage = () => {
    if (category && !keyword) {
      return `"${category}" 카테고리에 대한 검색결과가 없어요.`;
    }
    if (keyword) {
      return `"${keyword}" 에 대한 검색결과가 없어요.`;
    }
    return `해당 조건에 맞는 상품이 없어요.`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const data = await getItems({
          keyword: keyword,
          regions: region,
          categories: category,
        });

        setItems(data);
      } catch (error) {
        console.error('검색 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [keyword, region, category]);

  if (loading) {
    return (
      <div className={styles.pageWrapper}>
        <TopBanner />
        <div className={styles.searchHeaderArea}>
          <SearchHeader />
        </div>
        <div
          style={{
            padding: '100px',
            textAlign: 'center',
            fontSize: '18px',
            color: '#666',
          }}
        ></div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className={styles.pageWrapper}>
        <TopBanner />
        <div className={styles.searchHeaderArea}>
          <SearchHeader />
        </div>

        <div className={styles.layout}>
          <SearchFilterSidebar />
          <div className={styles.noResult}>
            <h2>{getNoResultMessage()}</h2>
            <p>동네를 변경하거나 다른 검색어를 입력해보세요!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <TopBanner />

      <div className={styles.searchHeaderArea}>
        <SearchHeader />
      </div>

      <div className={styles.layout}>
        <SearchFilterSidebar />

        <div className={styles.itemsSection}>
          <h2 className={styles.title}>
            {/*“{keyword}” 검색 결과*/}
            {getPageTitle()}
            {region && (
              <span
                style={{ fontSize: '0.8em', color: '#888', marginLeft: '10px' }}
              >
                ({region})
              </span>
            )}
          </h2>

          <ItemGrid items={items} />
        </div>
      </div>
    </div>
  );
}

export default SearchResultPage;
