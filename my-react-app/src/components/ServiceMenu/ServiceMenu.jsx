import styles from './ServiceMenu.module.css';
import ServiceMenuItem from './ServiceMenuItem';
import jungogeore from '@/assets/images/jungogeore.svg';
import alba from '@/assets/images/alba.svg';
import budongsan from '@/assets/images/budongsan.svg';
import jungocar from '@/assets/images/jungocar.svg';
import dongnaeupchae from '@/assets/images/dongnaeupchae.svg';
import dongnaeseng from '@/assets/images/dongnaeseng.svg';
import moim from '@/assets/images/moim.svg';
import { useNavigate } from 'react-router-dom';

const services = [
  { id: 1, label: '중고거래', icon: jungogeore },
  { id: 2, label: '알바', icon: alba },
  { id: 3, label: '부동산', icon: budongsan },
  { id: 4, label: '중고차', icon: jungocar },
  { id: 5, label: '동네업체', icon: dongnaeupchae },
  { id: 6, label: '동네생활', icon: dongnaeseng },
  { id: 7, label: '모임', icon: moim },
];

function ServiceMenu() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/search?categories=${encodeURIComponent(category)}`);
  };

  return (
    <div className={styles.menuContainer}>
      {services.map((service) => (
        <ServiceMenuItem
          key={service.id}
          label={service.label}
          icon={service.icon}
          onClick={() => handleCategoryClick(service.label)}
        />
      ))}
    </div>
  );
}

export default ServiceMenu;
