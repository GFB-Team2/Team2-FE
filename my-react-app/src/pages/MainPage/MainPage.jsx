import styles from './MainPage.module.css';
import TopBanner from '@/components/TopBanner/TopBanner.jsx';
import SearchHeader from '@/components/SearchHeader/SearchHeader.jsx';
import ServiceMenu from '@/components/ServiceMenu/ServiceMenu.jsx';
import NeighborhoodMenu from '@/components/NeighborhoodMenu/NeighborhoodMenu.jsx';
import CreatePostModal from '@/components/Modal/CreatePostModal.jsx';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext.jsx';

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [needsRefresh, setNeedsRefresh] = useState(0);
  const { isLoggedIn } = useAuth();

  return (
    <div className={styles.pageContainer}>
      <TopBanner />
      <SearchHeader />

      <main className={styles.mainContent}>
        <ServiceMenu />
        <NeighborhoodMenu />
      </main>

      {isLoggedIn && (
        <button
          className={styles.writeButton}
          onClick={() => setIsModalOpen(true)}
        >
          + 글쓰기
        </button>
      )}

      <CreatePostModal
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPostSuccess={() => {
          setNeedsRefresh((prev) => prev + 1);
        }}
      />
    </div>
  );
}
export default MainPage;
