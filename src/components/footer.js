import Link from "next/link"


export default function Footer() {
    return (
        <>
            <footer className="footer">
                    <div className="container">
                        <div className="copy">© 2024. West Cold. All rights reserved.</div>
                        <div className="logo">
                            <button onClick={() => window.open('https://github.com/westc0ld/portpolio-practice.git/', '_blank')}><img src='font/github-mark.png' className="github_logo" alt='logo' /></button>
                            <button onClick={() => window.open('https://eatitstory.tistory.com/', '_blank')}><img src='font/tistory.png' className="tistory_logo" alt='logo' /></button>    
                            <button onClick={() => window.open('https://www.instagram.com/west__cold/', '_blank')}><img src='font/instagram.png' className="instagram_logo" alt='logo' /></button>    
                        </div>
                    </div>
            </footer>
        </>
    )
}