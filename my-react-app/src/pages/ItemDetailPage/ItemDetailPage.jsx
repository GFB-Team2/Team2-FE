// // src/pages/ItemDetailPage/ItemDetailPage.jsx
//
// import { useParams } from 'react-router-dom';
// import styles from './ItemDetailPage.module.css';
//
// import TopBanner from '@/components/TopBanner/TopBanner.jsx';
// import PageContainer from '@/components/Layouts/PageContainer.jsx';
//
// import ItemImageSlider from '@/components/ItemDetail/ItemImageSlider.jsx';
// import SellerInfo from '@/components/ItemDetail/SellerInfo.jsx';
// import SellerOtherItems from '@/components/ItemDetail/SellerOtherItems.jsx';
//
// import { mockItems } from '@/data/mockItems';
//
// function ItemDetailPage() {
//   const { id } = useParams();
//   const item = mockItems.find((x) => x.id === Number(id));
//
//   if (!item) return <div>상품을 찾을 수 없습니다.</div>;
//
//   return (
//     <div className={styles.page}>
//       <TopBanner />
//
//       <PageContainer>
//         <div className={styles.breadcrumb}>
//           홈 &gt; 중고거래 &gt; {item.title}
//         </div>
//       </PageContainer>
//
//       <PageContainer>
//         <div className={styles.mainSection}>
//           <ItemImageSlider images={item.images} />
//
//           <div className={styles.infoSection}>
//             <h1 className={styles.title}>{item.title}</h1>
//
//             <div className={styles.meta}>
//               {item.location} · {item.time}
//             </div>
//
//             <div className={styles.price}>{item.price}</div>
//
//             <div className={styles.description}>{item.description}</div>
//
//             <button className={styles.appButton}>당근 앱에서 보기</button>
//           </div>
//         </div>
//       </PageContainer>
//
//       <PageContainer>
//         <SellerInfo seller={item.seller} />
//       </PageContainer>
//
//       <PageContainer>
//         <SellerOtherItems items={item.otherItems} />
//       </PageContainer>
//     </div>
//   );
// }
//
// export default ItemDetailPage;
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ItemDetailPage.module.css';

import TopBanner from '@/components/TopBanner/TopBanner.jsx';
import PageContainer from '@/components/Layouts/PageContainer.jsx';
import ItemImageSlider from '@/components/ItemDetail/ItemImageSlider.jsx';
import SellerInfo from '@/components/ItemDetail/SellerInfo.jsx';
import SellerOtherItems from '@/components/ItemDetail/SellerOtherItems.jsx';

import { getItemDetail } from '@/api/ItemsApi.js';

function ItemDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    // 2. 상태 관리 (데이터, 로딩)
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    // 3. 데이터 불러오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getItemDetail(id);
                setItem(data);
            } catch (error) {
                console.error(error);
                alert("상품 정보를 불러오지 못했습니다.");
                navigate(-1);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);


    if (loading) return <div style={{padding: '100px', textAlign:'center'}}>로딩중... 🥕</div>;

    if (!item) return <div>상품을 찾을 수 없습니다.</div>;

    const images = item.thumbnail ? [item.thumbnail] : [];

    const sellerInfo = {
        sellerNickname: item.sellerNickname,
        sellerMannerTemp: item.sellerMannerTemp,
        region: item.region,
        sellerProfileUrl: item.sellerProfileUrl
    };

    return (
        <div className={styles.page}>
            <TopBanner />

            <PageContainer>
                <div className={styles.breadcrumb}>
                    홈 &gt; {item.category || '중고거래'} &gt; {item.title}
                </div>
            </PageContainer>

            <PageContainer>
                <div className={styles.mainSection}>
                    <ItemImageSlider images={images} />

                    <div className={styles.infoSection}>
                        <h1 className={styles.title}>{item.title}</h1>

                        <div className={styles.meta}>
                            {item.region} · {item.createdAt}
                        </div>

                        <div className={styles.price}>
                            {item.price ? item.price.toLocaleString() + '원' : '가격 없음'}
                        </div>

                        <div className={styles.description}>
                            {item.content}
                        </div>

                        <button className={styles.appButton}>당근 앱에서 보기</button>
                    </div>
                </div>
            </PageContainer>

            <PageContainer>
                <SellerInfo seller={sellerInfo} />
            </PageContainer>

            <PageContainer>
                <SellerOtherItems items={[]} />
            </PageContainer>
        </div>
    );
}

export default ItemDetailPage;
