import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
    
    useEffect(() => {
        const hamburgerMenu = document.querySelector('.header__nav__mobile');
        const menus = document.querySelector('.menus');
        const menuItems = document.querySelectorAll('.menus .li');
        const leftName = document.querySelector('.header .left .name');

        const toggleMenu = () => {
            const isExpanded = menus.classList.toggle('active');
            hamburgerMenu.setAttribute('aria-expanded', isExpanded.toString());
        };

        hamburgerMenu.addEventListener('click', toggleMenu);
        leftName.addEventListener('click', () => {
            menus.classList.remove('active');
            hamburgerMenu.setAttribute('aria-expanded', 'false');
        });

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                menus.classList.remove('active');
                hamburgerMenu.setAttribute('aria-expanded', 'false');
            });
        });

        return () => {
            hamburgerMenu.removeEventListener('click', toggleMenu);
            leftName.removeEventListener('click', () => {
                menus.classList.remove('active');
                hamburgerMenu.setAttribute('aria-expanded', 'false');
            });
            menuItems.forEach(item => {
                item.removeEventListener('click', () => {
                    menus.classList.remove('active');
                    hamburgerMenu.setAttribute('aria-expanded', 'false');
                });
            });
        };
    }, []);

    return (
        <header className="header">
            <Link href="/" className="left">
                <div className="name">West_Cold</div>
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
            <div className="header__nav__mobile" aria-controls="primary-menu" aria-expanded="false" role="button" tabIndex="0">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
}
