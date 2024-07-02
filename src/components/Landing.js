import React from "react";
import Image from "next/image";

const introText = {
  title: "Intro Title",
  desc: ["First line of description", "Second line of description", "Third line of description"],
  img: "/font/security.gif" // 정적 파일 경로 수정
};

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro__inner">
        <div className="intro_content1">
          <div className="abstract">
            <h2 className="abstract_name">서 찬</h2>
            <div className="line"></div>
            <p className="text-base">
              {/* <Image src="/font/calendar-days-regular.svg" alt="calendar" width={20} height={20} className="font_calendar" />&nbsp; */}
              생년월일: 99.01.19
              <br />학력: 한국공학대학교(경영학과)
              <br />연락처: 010-3414-0035
              <br />이메일: oso0035@naver.com
            </p>
          </div>
        </div>
        <div className="intro_content2">
          <Image src="/font/security.gif" alt="security" width={100} height={100} className="security" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
