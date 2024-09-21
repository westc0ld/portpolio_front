import React from 'react';

function ResumeDownload() {
  const downloadResume = async () => {
    try {
      // API 엔드포인트
      const apiUrl = 'https://api.example.com/download-resume'; // 실제 API 엔드포인트 사용

      // fetch를 사용하여 API 호출
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('이력서 다운로드에 실패했습니다.');
      }

      // Blob으로 변환하여 파일 다운로드
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'resume.pdf'; // 다운로드될 파일 이름 설정
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('이력서 다운로드 오류:', error);
      alert('이력서 다운로드 중 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <h1>이력서 다운로드</h1>
      <button onClick={downloadResume}>이력서 다운로드</button>
    </div>
  );
}

export default ResumeDownload;
