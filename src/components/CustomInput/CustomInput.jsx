import styles from './CustomInput.module.css';

function CustomInput({ type = 'text', placeholder, ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.inputBox}
      {...props}
    />
  );
}
export default CustomInput;
