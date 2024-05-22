import Link from "next/link"


export default function Footer() {
    return (
        <>
            <footer className="footer">
                    <div className="container">
                        <div className="copy">© 2024. West Cold. All rights reserved.</div>
                        <div className="logo">
                            <Link className="github" href="https://github.com/westc0ld/portpolio-practice.git/">
                                <img src='font/github-mark.png' className="github_logo" alt='logo' />
                            </Link>
                            <Link className="tistory" href="https://eatitstory.tistory.com/">
                                <img src='font/tistory.png' className="tistory_logo" alt='logo' />
                            </Link>
                            <Link className="instagram" href="https://www.instagram.com/west__cold/">
                                <img src='font/instagram.png' className="instagram_logo" alt='logo' />
                            </Link>
                        </div>
                    </div>
            </footer>
        </>
    )
}