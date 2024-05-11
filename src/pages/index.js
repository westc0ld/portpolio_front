import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "../components/layout";
import InteractiveQueryApp from "../components/index.body";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
    <Head>
      <title>westcold</title>
      <meta name="description" content="westcold"/>
      <link rel="icon" type="/favicon.ico" />
    </Head>
    <InteractiveQueryApp/>
    </Layout>
  )
}
