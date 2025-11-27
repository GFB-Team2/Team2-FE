import styles from './SignUpPage.module.css';
import AuthLayout from '@/components/Layouts/AuthLayout';
import CustomInput from '@/components/CustomInput/CustomInput';
import Button from '@/components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signUpApi } from '@/api/LoginSignUp.js';

function SignUpPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    nickname: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signUpApi(formData);
      alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
      navigate('/login');
    } catch (error) {
      alert(error.message || '회원가입에 실패했습니다.');
    }
  };

  return (
    <AuthLayout>
      <div className={styles.signupBox}>
        <h2 className={styles.title}>회원가입</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>이름</label>
          <CustomInput
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="이름을 입력하세요"
          />
          <label className={styles.label}>이메일</label>
          <CustomInput
            type="email"
            placeholder="example@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label className={styles.label}>비밀번호</label>
          <CustomInput
            placeholder="비밀번호를 입력하세요"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <label className={styles.label}>닉네임</label>
          <CustomInput
            placeholder="사용하실 닉네임을 입력해주세요"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />
          <div className={styles.buttonWrapper}>
            <Button>회원가입</Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
export default SignUpPage;
