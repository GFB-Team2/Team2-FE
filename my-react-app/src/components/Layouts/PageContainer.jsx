import styles from './PageContainer.module.css';

function PageContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default PageContainer;
