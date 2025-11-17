import styles from './AuthLayout.module.css';
import CarrotMarketLogo from '@/components/CarrotMarketLogo/CarrotMarketLogo.jsx';

function AuthLayout({ children }) {
  return (
    <div className={styles.container}>
      <CarrotMarketLogo />
      {children}
    </div>
  );
}

export default AuthLayout;
