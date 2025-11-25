// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './MyPage.module.css';
// import TopBanner from '@/components/TopBanner/TopBanner.jsx';
//
// const mockUser = {
//   nickname: '거제 에겐남',
//   temperature: 36.5,
//   profileImage: 'https://placehold.co/100x100?text=User', // 정상 출력되는 placeholder
// };
//
// const mockSellItems = [
//   {
//     id: 1,
//     title: '에어컨 팝니다',
//     price: '150,000원',
//     image: 'https://placehold.co/150x150?text=AC',
//   },
//   {
//     id: 2,
//     title: '자전거 판매',
//     price: '80,000원',
//     image: 'https://placehold.co/150x150?text=Bike',
//   },
//   {
//     id: 3,
//     title: '모니터 팝니다',
//     price: '120,000원',
//     image: 'https://placehold.co/150x150?text=Monitor',
//   },
// ];
//
// function MyPage() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [sellItems, setSellItems] = useState([]);
//
//   useEffect(() => {
//     setUser(mockUser);
//     setSellItems(mockSellItems);
//   }, []);
//
//   if (!user) return null;
//
//   return (
//     <>
//       <TopBanner />
//
//       <div className={styles.wrapper}>
//         <button className={styles.backBtn} onClick={() => navigate(-1)}>
//           ← 뒤로가기
//         </button>
//
//         {/* 프로필 카드 */}
//         <div className={styles.profileCard}>
//           <img src={user.profileImage} className={styles.profileImg} />
//
//           <div className={styles.profileInfo}>
//             <h2 className={styles.nickname}>{user.nickname}</h2>
//             <p className={styles.temperature}>
//               당근 온도: {user.temperature}°C
//             </p>
//
//             <div className={styles.temperatureBar}>
//               <div
//                 className={styles.temperatureFill}
//                 style={{ width: `${(user.temperature / 50) * 100}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>
//
//         {/* 판매 목록 */}
//         <h3 className={styles.sectionTitle}>나의 판매 목록</h3>
//
//         <div className={styles.itemList}>
//           {sellItems.map((item) => (
//             <div
//               key={item.id}
//               className={styles.itemCard}
//               onClick={() => navigate(`/item/${item.id}`)}
//             >
//               <img src={item.image} className={styles.itemImg} />
//
//               <div className={styles.itemInfo}>
//                 <p className={styles.itemTitle}>{item.title}</p>
//                 <p className={styles.itemPrice}>{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
//
// export default MyPage;
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MyPage.module.css';
import TopBanner from '@/components/TopBanner/TopBanner.jsx';
import { getMyPageApi } from '@/api/UserApi.js'; // 1. API 불러오기

function MyPage() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null); // 유저 정보 + 판매 목록 한 번에 담음
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getMyPageApi(); // 2. API 호출
        setUserInfo(data);
      } catch (error) {
        alert(error.message);
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>로딩중... 🥕</div>
    );
  if (!userInfo) return null;

  return (
    <>
      <TopBanner />

      <div className={styles.wrapper}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          ← 뒤로가기
        </button>

        <div className={styles.profileCard}>
          <img
            src={userInfo.profileUrl}
            className={styles.profileImg}
            alt="프로필"
          />

          <div className={styles.profileInfo}>
            <h2 className={styles.nickname}>{userInfo.nickname}</h2>

            <p className={styles.temperature}>
              당근 온도:{' '}
              <span style={{ color: '#ff8a3d', fontWeight: 'bold' }}>
                {userInfo.mannerTemp}°C
              </span>
            </p>

            <div className={styles.temperatureBar}>
              <div
                className={styles.temperatureFill}
                style={{ width: `${userInfo.mannerTemp}%` }}
              ></div>
            </div>
          </div>
        </div>

        <h3 className={styles.sectionTitle}>
          나의 판매 목록 ({userInfo.myItems.length})
        </h3>

        <div className={styles.itemList}>
          {userInfo.myItems.length > 0 ? (
            userInfo.myItems.map((item) => (
              <div
                key={item.id}
                className={styles.itemCard}
                onClick={() => navigate(`/item/${item.id}`)} // 상세 페이지로 이동
              >
                <img
                  src={
                    item.thumbnailUrl ||
                    'https://placehold.co/150x150?text=No+Image'
                  }
                  className={styles.itemImg}
                  alt={item.title}
                />

                <div className={styles.itemInfo}>
                  <p className={styles.itemTitle}>{item.title}</p>
                  <p className={styles.itemPrice}>
                    {item.price.toLocaleString()}원
                  </p>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#888',
                      marginTop: '5px',
                    }}
                  >
                    {item.region} ·{' '}
                    {item.status === 'SOLD' ? '판매완료' : '판매중'}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: '#999', padding: '20px' }}>
              판매 내역이 없어요.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default MyPage;
