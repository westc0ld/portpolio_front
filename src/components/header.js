import Nav from "./nav"
import Link from "next/link"
// import "./header.css";

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="left">
                        <div className="image"><img src=""/></div>
                        <div className="name">=포폴 이름</div>
                    </div>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <div className="mr-5 hover:text-gray-900">about</div>&nbsp;
                        <div className="mr-5 hover:text-gray-900">skill</div>&nbsp;
                        <div className="mr-5 hover:text-gray-900">contact</div>
                    </nav>
                    <div>
                        <div>
                            <Link href="/" passHref>
                                <button className="more">more</button>
                            </Link>
                        </div>
                        <div>
                            <Link href="/contents" passHref>
                                <button className="home">home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
