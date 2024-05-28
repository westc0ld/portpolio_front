import Link from "next/link"
import { Link as ScrollLink, Element } from 'react-scroll';



export default function Header() {
    
    return (
        <>
            <header className="header">
                    <Link href="/" className="left">
                        <div className="name" >
                            West_Cold
                        </div>
                    </Link>
                    <div className="menus">
                        <Link href="#chat" passHref>
                            <div className="li">Chat</div>
                        </Link>
                        <Link href="#about" passHref>
                            <div className="li">About</div>
                        </Link>
                        <Link href="#skills" passHref>
                            <div className="li">Skills</div>
                        </Link>
                        <Link href="#projects" passHref>
                            <div className="li">Projects</div>
                        </Link>
                        <Link href="#contact" passHref>
                            <div className="li">Contact</div>
                        </Link>
                    </div>
                    <Link  className="material-symbols-outlined" href="#" passHref></Link>                          
            </header>
        </>
    )
}
