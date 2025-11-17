import styles from './Button.module.css';

function Button({ children, type = 'submit' }) {
  return (
    <button type={type} className={styles.loginButton}>
      {children}
    </button>
  );
}

export default Button;
