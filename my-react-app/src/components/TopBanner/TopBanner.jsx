import styles from './TopBanner.module.css';
import CarrotMarketLogo from '@/components/CarrotMarketLogo/CarrotMarketLogo.jsx';
import Button from '@/components/Button/Button.jsx';

function TopBanner() {
  return (
    <header className={styles.topBanner}>
      <div className={styles.contentWrapper}>
        <div className={styles.logoWrapper}>
          <CarrotMarketLogo size="small" />
        </div>

        <div className={styles.buttonWrapper}>
          <Button>마이페이지</Button>
        </div>
      </div>
    </header>
  );
}
export default TopBanner;
