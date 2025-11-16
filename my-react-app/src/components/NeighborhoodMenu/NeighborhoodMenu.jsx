import styles from './NeighborhoodMenu.module.css';
import NeighborhoodButton from './NeighborhoodButton';

const neighborhoods = [
  '송도동',
  '역삼동',
  '불금동',
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
  return (
    <div className={styles.container}>
      {neighborhoods.map((name) => (
        <NeighborhoodButton key={name}>{name}</NeighborhoodButton>
      ))}
    </div>
  );
}
export default NeighborhoodMenu;
