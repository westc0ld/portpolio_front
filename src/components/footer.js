import Link from "next/link"

export default function Footer() {
    return (
        <>
            <footer className="footer">
                    <div className="container">
                        <div className="copy">© 2024. West Cold. All rights reserved.
                        </div>
                        <div className="logo">
                            <Link className="github" href="https://github.com/westc0ld/portpolio-practice.git/" target="_blank" rel="noopener noreferrer" passHref>
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </Link>
                            <Link className="tistory" href="https://eatitstory.tistory.com/" target="_blank" rel="noopener noreferrer" passHref>
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </Link>
                            <Link className="instagram" href="https://www.instagram.com/west__cold/" target="_blank" rel="noopener noreferrer" passHref>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
            </footer>
        </>
    )
}