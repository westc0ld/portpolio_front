import Header from "./header"
import Footer from "./footer"
import HeadInfo from "./headinfo"

export default function Layout({children}) {
    return (
        <>  
            <HeadInfo/>
            <Header/>
            <div>{children}</div>
            <Footer/>

        </>
    )
}