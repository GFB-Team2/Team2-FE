import styles from './LoginPage.module.css';
import AuthLayout from '@/components/Layouts/AuthLayout';
import CustomInput from '@/components/CustomInput/CustomInput';
import PasswordInput from '@/components/PasswordInput/PasswordInput';
import Button from '@/components/Button/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    alert('로그인 되었습니다.');
    navigate('/');
  };

  return (
    <AuthLayout>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>로그인</h2>
        <p className={styles.subtitle}>계정에 로그인 하세요</p>

        <form className={styles.form} onSubmit={handleLogin}>
          <label className={styles.label}>이메일</label>
          <CustomInput type="email" placeholder="example@gmail.com" />
          <label className={styles.label}>비밀번호</label>
          <PasswordInput />

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
