import styles from './ServiceMenu.module.css';
import ServiceMenuItem from './ServiceMenuItem';

const services = [
  { id: 1, label: '중고거래' },
  { id: 2, label: '알바' },
  { id: 3, label: '부동산' },
  { id: 4, label: '중고차' },
  { id: 5, label: '동네업체' },
  { id: 6, label: '동네생활' },
  { id: 7, label: '모임' },
];

function ServiceMenu() {
  return (
    <div className={styles.menuContainer}>
      {services.map((service) => (
        <ServiceMenuItem key={service.id} label={service.label} />
      ))}
    </div>
  );
}

export default ServiceMenu;
