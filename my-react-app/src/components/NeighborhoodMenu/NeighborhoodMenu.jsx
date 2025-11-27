import styles from './NeighborhoodMenu.module.css';
import NeighborhoodButton from './NeighborhoodButton';
import { useNavigate } from 'react-router-dom';

const neighborhoods = [
  '정릉동',
  '길음동',
  '장위동',
  '백암동',
  '서초동',
  '옥정동',
  '신림동',
  '불당동',
  '청담동',
  '다산동',
  '별내동',
  '화도읍',
  '다사읍',
  '마곡동',
  '압구정동',
  '배곧동',
  '고척동',
  '오창읍',
];

function NeighborhoodMenu() {
  const navigate = useNavigate();

  const handleRegionSearch = (region) => {
    const url = `/search?regions=${encodeURIComponent(region)}`;
    navigate(url);
  };

  return (
    <div className={styles.container}>
      {neighborhoods.map((name) => (
        <NeighborhoodButton key={name} onClick={() => handleRegionSearch(name)}>
          {name}
        </NeighborhoodButton>
      ))}
    </div>
  );
}
export default NeighborhoodMenu;
