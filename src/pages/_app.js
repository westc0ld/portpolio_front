import "@/styles/globals.css";
import Layout from "../../components/Layout";
import HeadInfo from "../../components/HeadInfo";

export default function App({ Component, pageProps }) {
  return( 
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
