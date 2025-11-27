import styles from './Button.module.css';

function Button({ children, type = 'submit', onClick, className = '' }) {
  return (
    <button
      type={type}
      className={`${styles.loginButton} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
