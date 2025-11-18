// src/pages/ItemDetailPage/ItemDetailPage.jsx

import { useParams } from 'react-router-dom';
import styles from './ItemDetailPage.module.css';

import TopBanner from '@/components/TopBanner/TopBanner.jsx';
import PageContainer from '@/components/Layouts/PageContainer.jsx';

import ItemImageSlider from '@/components/ItemDetail/ItemImageSlider.jsx';
import SellerInfo from '@/components/ItemDetail/SellerInfo.jsx';
import SellerOtherItems from '@/components/ItemDetail/SellerOtherItems.jsx';

import { mockItems } from '@/data/mockItems';

function ItemDetailPage() {
  const { id } = useParams();
  const item = mockItems.find((x) => x.id === Number(id));

  if (!item) return <div>상품을 찾을 수 없습니다.</div>;

  return (
    <div className={styles.page}>
      <TopBanner />

      <PageContainer>
        <div className={styles.breadcrumb}>
          홈 &gt; 중고거래 &gt; {item.title}
        </div>
      </PageContainer>

      <PageContainer>
        <div className={styles.mainSection}>
          <ItemImageSlider images={item.images} />

          <div className={styles.infoSection}>
            <h1 className={styles.title}>{item.title}</h1>

            <div className={styles.meta}>
              {item.location} · {item.time}
            </div>

            <div className={styles.price}>{item.price}</div>

            <div className={styles.description}>{item.description}</div>

            <button className={styles.appButton}>당근 앱에서 보기</button>
          </div>
        </div>
      </PageContainer>

      <PageContainer>
        <SellerInfo seller={item.seller} />
      </PageContainer>

      <PageContainer>
        <SellerOtherItems items={item.otherItems} />
      </PageContainer>
    </div>
  );
}

export default ItemDetailPage;
