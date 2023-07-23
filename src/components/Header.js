
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import SocialMediaLinkItem from "./SocialMediaLink/SocialMediaLinkItem";
function Header() {
  const [navActive, setNavActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  }, [navActive]);

  return (
    // <!-- =====================Navigation=========== -->
    <header className="header">
      <div className="container">
        <nav className="navigation">
          <div className="logo logo-nav">
            <Link to="/" className="logo-link">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>

          <div className={`menu ${sidebarActive ? "active" : ""}`}>
            <div className="close-menu" onClick={() => setSidebarActive(false)}>
              <img src="./images/close.svg" alt="" />
            </div>
            <ul className="menu-nav-ul">
              <div className="left-side d-flex algin-items-center gap-4">
                <li className="nav-list">
                  <HashLink
                    to="/"
                    className="nav-link"
                    onClick={_toggleSidebar}
                  >
                   Mint
                  </HashLink>
                </li>
                <li className="nav-list">
                  <HashLink
                    to="#about"
                    className="nav-link"
                    onClick={_toggleSidebar}
                  >
                    Tokenomics 
                  </HashLink>
                </li>
                <li className="nav-list">
                  <HashLink
                    to="#about"
                    className="nav-link"
                    onClick={_toggleSidebar}
                  >
                   Roadmap 
                  </HashLink>
                </li>
                <li className="nav-list">
                  <HashLink
                    to="#about"
                    className="nav-link"
                    onClick={_toggleSidebar}
                  >
                   Faq
                  </HashLink>
                </li>
              </div>
              <li className="nav-list-logos nav-list-logo">
                <Link to="/" className="logo-link">
                  <img src="/images/logo.png" alt="" className="logo-img" />
                </Link>
              </li>
              <div className="left-side d-flex algin-items-center gap-4">
                <SocialMediaLinkItem/>
                <button className="connect-wallet-btn">
                  Connect wallet
                </button>
              </div>
            </ul>
          </div>
          <div className="show-nav" onClick={_toggleSidebar}>
            <img src="./images/menu.svg" alt="" />
          </div>
        </nav>
      </div>
    </header>
    // {/* <!-- =====================Navigation end =========== --> */}
  );
}
export default Header;
