import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/layout";
import ChatGPT from "../components/index.body";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="body">
        <section id="chat"style={{ paddingTop: "100px" }}>
          <ChatGPT />
        </section>
        <section id="about" style={{ paddingTop: "100px" }}>
          <About />
        </section>
        <section id="skills"style={{ paddingTop: "150px" }} >
          <Skills />
        </section>
        <section id="projects" style={{ paddingTop: "100px" }}>
          <Projects />
        </section>
        <section id="contact" style={{ paddingTop: "100px" }}>
          <Contact />
        </section>
      </div>
    </Layout>
  );
}
