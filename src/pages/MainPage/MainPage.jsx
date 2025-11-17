import styles from './MainPage.module.css';
import TopBanner from '@/components/TopBanner/TopBanner.jsx';
import SearchHeader from '@/components/SearchHeader/SearchHeader.jsx';
import ServiceMenu from '@/components/ServiceMenu/ServiceMenu.jsx';
import NeighborhoodMenu from '@/components/NeighborhoodMenu/NeighborhoodMenu.jsx';

function MainPage() {
  return (
    <div className={styles.pageContainer}>
      <TopBanner />
      <SearchHeader />

      <main className={styles.mainContent}>
        <ServiceMenu />
        <NeighborhoodMenu />
      </main>
    </div>
  );
}
export default MainPage;
