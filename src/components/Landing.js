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
            <div className="abstract_name">서 찬</div>
            <div className="line"></div>
            <div className="text_base">
              안녕하세요 보안 전문가를 꿈꾸는 서찬입니다.
              <br />저의 장점이자 무기는 성실입니다.
              <br />제 웹 포트폴리오를 방문해 주셔서 감사합니다
            </div>
          </div>
        </div>
        <div className="intro_content2">
          <Image src="/font/security2.gif" alt="security" width={600} height={600} className="security" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
