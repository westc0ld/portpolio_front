import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  // 상태(State) 정의
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // 이력서 다운로드 처리
  const handleResumeDownload = async () => {
    try {
      const response = await axios.get('https://api.westcold0035.com/download-resume', {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement('a');
      a.href = url;
      a.setAttribute('download', 'resume.pdf');
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  // 폼 제출 처리
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const response = await axios.post('https://api.westcold0035.com/send-email', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert('Email sent successfully');
        // 입력 필드 초기화
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };

  // 입력 값 변경 핸들러
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='contact_container'>
      <div className='contact_info'>
        <h2>Contact Us</h2>
        <p>문의사항은 전화 혹은 메일을 통하여 연락 부탁드립니다.</p>
        <p><i className="fas fa-phone"></i> 010-3414-0035</p>
        <p><i className="fas fa-envelope"></i> oso0035@naver.com</p>
        <button className="resume_download" onClick={handleResumeDownload}>이력서 다운로드</button>
      </div>
      <div className="contactform">
        <form onSubmit={handleSubmit}>
          <div className="input_container">
            <div className="contact_name">
              <label htmlFor="name">이름(업체명)</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="contact_email">
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="contact_phone">
              <label htmlFor="phone">전화번호</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="contact_message">
              <label htmlFor="message">문의내용</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="contact_send">메일 보내기</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
