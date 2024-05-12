import Nav from "./nav"
import Link from "next/link"


export default function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                        <Link className="left" href="/" passHref>
                            <div className="image"><img src="https://i.namu.wiki/i/Pv9NYWGfEhphXAKEef1jRvyPlp_d1DJ2ZeQVY5zSo7b8rfHh7RzVGgggNHPthCd5zITHV9m4d9ZjZhOK4I6Mbw.svg"/></div>
                            <div className="name">West_Cold</div>
                        </Link>
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
