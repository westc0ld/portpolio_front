import Header from "./header"
import Footer from "./footer"
import Nav from "./nav"
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