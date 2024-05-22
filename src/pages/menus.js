import Layout from "../components/layout";
import Link from "next/link";


const Contents = () => {
  return (
    <Layout>
      <div className="menus_1">
        <div className="container">
          <div className="flex">
            <div className="section-box">
              <h2 className="title">about</h2>
              <p className="text-base">about 정보</p>
              <Link href="/about">
                <div className="inline-flex">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="section-box">
              <h2 className="title">skill</h2>
              <p className="text-base">skill 정보</p>
              <Link href="/skills">
                <div className="inline-flex">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="section-box">
              <h2 className="title">blog</h2>
              <p className="text-base">blog 내용</p>
              <Link href="/blog">
                <div className="inline-flex">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="section-box">
              <h2 className="title">contact</h2>
              <p className="text-base">contact 내용</p>
              <Link href="/contact">
                <div className="inline-flex">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contents;
