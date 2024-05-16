import Nav from "./nav"
import Link from "next/link"


export default function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                        <Link className="left" href="/" passHref>
                            <div className="name">West_Cold</div>
                        </Link>
                            <div className="menus">
                                        <Link className="mr-5 hover:text-gray-900" href="/contents" passHref>menus</Link>
                                        <Link className="mr-5 hover:text-gray-900" href="/about" passHref>about</Link>
                                        <Link className="mr-5 hover:text-gray-900" href="/skills" passHref>skills</Link>
                                        <Link className="mr-5 hover:text-gray-900" href="/blog" passHref>blog</Link>
                                        <Link className="mr-5 hover:text-gray-900" href="/contact" passHref>contact</Link>
                            </div>
                </div>   
            </header>
        </>
    )
}
