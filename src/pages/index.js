import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "../../components/layout";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
    <Head>
      <title>westcold</title>
      <meta name="description" content="westcold"/>
      <link rel="icon" type="/favicon.ico" />
    </Head>
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">간단한 자기소개</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please enter your credentials:</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="credentials" className="leading-7 text-sm text-gray-600">Credentials</label>
                  <input type="text" id="credentials" name="credentials" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Enter your credentials..."></input>
                </div>
              </div>
            </div> 
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
          </div>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <output type="text" id="credentials" name="credentials" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Enter your credentials..."></output>
          </div>
        </div>
      </section>
      </>

    </Layout>
  )
}
