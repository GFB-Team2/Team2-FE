import styles from './CarrotMarketLogo.module.css';
import logo from '@/assets/images/carrot_market_logo.svg';
import { useNavigate } from "react-router-dom";

function CarrotMarketLogo({ size = 'large' }) {
    const navigate = useNavigate();

    const containerClass = `${styles.logoContainer} ${size === 'small' ? styles.small : ''}`;

    return (
        <div
            className={containerClass}
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}  // 클릭 가능한 느낌
        >
            <img src={logo} alt="당근마켓 로고" className={styles.logoImage} />
            <span className={styles.logoText}>당근마켓</span>
        </div>
    );
}

export default CarrotMarketLogo;
