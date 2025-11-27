import styles from './LoginPage.module.css';
import AuthLayout from '@/components/Layouts/AuthLayout';
import CustomInput from '@/components/CustomInput/CustomInput';
import PasswordInput from '@/components/PasswordInput/PasswordInput';
import Button from '@/components/Button/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginApi } from '@/api/LoginSignUp.js';

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginApi(email, password);
      login();
      alert('로그인 되었습니다.');
      navigate('/');
    } catch (error) {
      alert(error.message || '로그인에 실패했습니다.');
    }
  };

  return (
    <AuthLayout>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>로그인</h2>
        <p className={styles.subtitle}>계정에 로그인 하세요</p>

        <form className={styles.form} onSubmit={handleLogin}>
          <label className={styles.label}>이메일</label>
          <CustomInput
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={styles.label}>비밀번호</label>
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className={styles.buttonWrapper}>
            <Button>로그인</Button>
          </div>
        </form>

        <div className={styles.signupLink}>
          <span>아직 회원이 아니신가요?</span>
          <Link to="/signup" className={styles.link}>
            지금 가입하기
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}

export default LoginPage;
