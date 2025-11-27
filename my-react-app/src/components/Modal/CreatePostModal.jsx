import React, { useState } from 'react';
import styles from './CreatePostModal.module.css';
import { createItemApi } from '@/api/ItemsApi.js'; // 👈 등록 API 호출
import CustomInput from '@/components/CustomInput/CustomInput';
import Button from '@/components/Button/Button';

const INITIAL_FORM_DATA = {
  title: '',
  price: '',
  content: '',
  region: '정릉동',
  category: '중고거래',
  thumbnailUrl: '',
};

function CreatePostModal({ isVisible, onClose, onPostSuccess }) {
  if (!isVisible) return null;

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.content || !formData.price) {
      alert('제목, 내용, 가격은 필수 항목입니다.');
      return;
    }

    try {
      const dataToSend = {
        ...formData,
        price: Number(formData.price),
      };

      await createItemApi(dataToSend);

      alert('상품이 성공적으로 등록되었습니다!');
      onPostSuccess();
      onClose();
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      alert('등록 실패: ' + error.message);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>중고 물품 등록</h2>
        <p className={styles.subtitle}>판매할 상품의 정보를 입력해주세요</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>제목</label>
          <CustomInput
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="상품의 이름을 입력해주세요"
            required
          />

          <label className={styles.label}>가격 (원)</label>
          <CustomInput
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="가격 (무료나눔은 0)"
            required
          />

          <label className={styles.label}>상세 설명</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="상품의 상태, 거래 방법, 네고 가능 여부 등을 상세히 적어주세요."
            className={styles.textarea}
            rows="5"
            required
          />

          <label className={styles.label}>썸네일 이미지 URL</label>
          <CustomInput
            name="thumbnailUrl"
            value={formData.thumbnailUrl}
            onChange={handleChange}
            placeholder="상품 이미지 주소를 입력해주세요"
          />

          <label className={styles.label}>지역/카테고리</label>
          <div className={styles.selectGroup}>
            <select
              name="region"
              value={formData.region}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="정릉동">정릉동</option>
              <option value="길음동">길음동</option>
              <option value="돈암동">돈암동</option>
              <option value="장위동">장위동</option>
            </select>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="중고거래">중고거래</option>
              <option value="알바">알바</option>
            </select>
          </div>

          <div className={styles.buttonWrapper}>
            <Button
              type="button"
              onClick={onClose}
              className={styles.cancelBtn}
            >
              취소
            </Button>
            <Button type="submit" className={styles.submitBtn}>
              등록하기
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePostModal;
