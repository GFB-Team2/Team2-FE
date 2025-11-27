import { useState } from 'react';
import styles from './PasswordInput.module.css';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function PasswordInput({ value, onChange, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.passwordWrapper}>
      <input
        type={showPassword ? 'text' : 'password'}
        className={styles.inputBox}
        value={value}
        onChange={onChange}
        placeholder={placeholder || '비밀번호를 입력하세요'}
      />
      <button
        type="button"
        className={styles.toggleButton}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <FiEyeOff /> : <FiEye />}
      </button>
    </div>
  );
}

export default PasswordInput;
