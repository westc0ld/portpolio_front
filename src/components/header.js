import Nav from "./nav"
import Link from "next/link"
// import "./header.css";

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="left">
                        <Link href="/" passHref>
                            <div className="image"><img src=""/></div>
                            <div className="name">West_Cold</div>
                        </Link>
                    </div>
                    <div>
                    <nav className="menus">
                            <div className="mr-5 hover:text-gray-900">about</div>&nbsp;
                            <div className="mr-5 hover:text-gray-900">skill</div>&nbsp;
                            <div className="mr-5 hover:text-gray-900">contact</div>
                        </nav>
                        <div className="button">
                            <div className="home">
                                <Link href="/" passHref>
                                    <button className="home">home</button>
                                </Link>
                            </div>
                            <div className="more">
                                <Link href="/contents" passHref>
                                    <button className="more">more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </header>
        </>
    )
}
