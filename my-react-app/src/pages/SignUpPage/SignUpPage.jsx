import styles from './SignUpPage.module.css';
import AuthLayout from '@/components/Layouts/AuthLayout';
import CustomInput from '@/components/CustomInput/CustomInput';
import Button from '@/components/Button/Button';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
    navigate('/login');
  };

  return (
    <AuthLayout>
      <div className={styles.signupBox}>
        <h2 className={styles.title}>회원가입</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>이름</label>
          <CustomInput placeholder="이름을 입력하세요" />
          <label className={styles.label}>이메일</label>
          <CustomInput type="email" placeholder="example@gmail.com" />
          <label className={styles.label}>비밀번호</label>
          <CustomInput placeholder="비밀번호를 입력하세요" />
          <label className={styles.label}>닉네임</label>
          <CustomInput placeholder="사용하실 닉네임을 입력해주세요" />
          <div className={styles.buttonWrapper}>
            <Button>회원가입</Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
export default SignUpPage;
