import { Inter } from "next/font/google";
import Layout from "./layout";
import Intro from "../components/Landing";
import ChatGPT from "../components/ChatGPT"; // 파일 이름 대소문자 확인
import About from "../components/about";
import Contents from "../components/projects";
import Contact from "../components/contact";
import Skills_info from "@/components/skills_info";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="body">
        <section id="Landing" style={{ paddingTop: "100px" }}>
          <Intro />
        </section>
        <section id="chat" style={{ paddingTop: "100px" }}>
          <ChatGPT />
        </section>
        <section id="about" style={{ paddingTop: "0px" }}>
          <About />
        </section>
        {/* <section id="skills_info" style={{ paddingTop: "100px" }}>
          <Skills_info />
        </section> */}
        <section id="projects" style={{ paddingTop: "120px" }}>
          <Contents />
        </section>
        <section id="contact" style={{ paddingTop: "10px" }}>
          <Contact />
        </section>
      </div>
    </Layout>
  );
}
