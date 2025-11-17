import styles from './CarrotMarketLogo.module.css';
import logo from '@/assets/images/carrot_market_logo.svg';

function CarrotMarketLogo({size = 'large'}) {

    const containerClass = `${styles.logoContainer} ${size === 'small' ? styles.small : ''}`;
  return (
    <div className={containerClass}>
      <img src={logo} alt="당근마켓 로고" className={styles.logoImage} />
      <span className={styles.logoText}>당근마켓</span>
    </div>
  );
}

export default CarrotMarketLogo;
