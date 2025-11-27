import styles from './CustomInput.module.css';

function CustomInput({ type = 'text', placeholder, name, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.inputBox}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
export default CustomInput;
