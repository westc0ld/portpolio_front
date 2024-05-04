import Link from "next/link";
import { useRouter } from "next/router";
import navStyles from "../src/styles/Nav.module.css";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className={navStyles.nav}>
      <ul>
        {/* 현재 페이지의 경로가 "/"이면 "more" 링크를 표시 */}
        {router.pathname === "/" && (
          <li>
            <Link href="/contents">more</Link>
          </li>
        )}

        {/* 현재 페이지의 경로가 "/contents"이면 "home" 링크를 표시 */}
        {router.pathname === "/contents" && (
          <li>
            <Link href="/">home</Link>
          </li>
        )}

        {/* 현재 페이지의 경로가 "/contents"이면 "home" 링크를 표시 */}
        {router.pathname === "/about" && (
          <li>
            <Link href="/">home</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
