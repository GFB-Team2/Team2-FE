import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyPage.module.css";
import TopBanner from '@/components/TopBanner/TopBanner.jsx';

const mockUser = {
    nickname: "거제 에겐남",
    temperature: 36.5,
    profileImage: "https://placehold.co/100x100?text=User"  // 정상 출력되는 placeholder
};

const mockSellItems = [
    {
        id: 1,
        title: "에어컨 팝니다",
        price: "150,000원",
        image: "https://placehold.co/150x150?text=AC",
    },
    {
        id: 2,
        title: "자전거 판매",
        price: "80,000원",
        image: "https://placehold.co/150x150?text=Bike",
    },
    {
        id: 3,
        title: "모니터 팝니다",
        price: "120,000원",
        image: "https://placehold.co/150x150?text=Monitor",
    },
];

function MyPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [sellItems, setSellItems] = useState([]);

    useEffect(() => {
        setUser(mockUser);
        setSellItems(mockSellItems);
    }, []);

    if (!user) return null;

    return (
        <>
            <TopBanner />

            <div className={styles.wrapper}>
                <button className={styles.backBtn} onClick={() => navigate(-1)}>
                    ← 뒤로가기
                </button>

                {/* 프로필 카드 */}
                <div className={styles.profileCard}>
                    <img src={user.profileImage} className={styles.profileImg} />

                    <div className={styles.profileInfo}>
                        <h2 className={styles.nickname}>{user.nickname}</h2>
                        <p className={styles.temperature}>당근 온도: {user.temperature}°C</p>

                        <div className={styles.temperatureBar}>
                            <div
                                className={styles.temperatureFill}
                                style={{ width: `${(user.temperature / 50) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* 판매 목록 */}
                <h3 className={styles.sectionTitle}>나의 판매 목록</h3>

                <div className={styles.itemList}>
                    {sellItems.map((item) => (
                        <div
                            key={item.id}
                            className={styles.itemCard}
                            onClick={() => navigate(`/item/${item.id}`)}
                        >
                            <img src={item.image} className={styles.itemImg} />

                            <div className={styles.itemInfo}>
                                <p className={styles.itemTitle}>{item.title}</p>
                                <p className={styles.itemPrice}>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MyPage;
