import styles from './TopBanner.module.css';
import CarrotMarketLogo from '@/components/CarrotMarketLogo/CarrotMarketLogo.jsx';
import Button from '@/components/Button/Button.jsx';

import { useAuth } from '@/context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

function TopBanner() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleMyPageClick = () => {
    navigate('/mypage'); // ← 여기!
  };

  const handleLogout = () => {
    alert('로그아웃 되었습니다');
    logout();
    navigate('/');
  };

  return (
    <header className={styles.topBanner}>
      <div className={styles.contentWrapper}>
        <div className={styles.logoWrapper}>
          <CarrotMarketLogo size="small" />
        </div>

        <div className={styles.buttonWrapper}>
          {!isLoggedIn ? (
            <Button onClick={() => navigate('/login')}>로그인</Button>
          ) : (
            <div className={styles.buttonGroup}>
              <Button
                onClick={handleMyPageClick}
                className={styles.myPageButton}
              >
                마이페이지
              </Button>
              <Button onClick={handleLogout} className={styles.logoutButton}>
                로그아웃
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default TopBanner;
