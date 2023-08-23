import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import SocialMediaLinkItem from "./SocialMediaLink/SocialMediaLinkItem";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";

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

  // ----------connect wallet ======
  const [walletConnected, setWalletConnected] = useState(false);
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const providerOptions = {};

        const web3Modal = new Web3Modal({
          network: "mainnet",
          cacheProvider: true,
          providerOptions,
        });

        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);

        web3.eth.net.getId();

        const addresses = await web3.eth.getAccounts();

        const address = addresses[0];
        await axios.post("http://localhost:5000/api/v1/login", address);
        const { ethereum } = window;

        const networkId = await ethereum.request({
          method: "net_version",
        });

        setWalletConnected(true);
      } else {
        window.open("https://metamask.io/download/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

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
              <div className="left-side d-flex algin-items-center">
                <li className="nav-list">
                  <HashLink
                    to="/mint"
                    className="nav-link"
                    onClick={_toggleSidebar}
                  >
                    Mint
                  </HashLink>
                </li>
                <li className="nav-list">
                  <Link
                    to="/whitelist"
                    className="nav-link"
                    onClick={_toggleSidebar}
                  >
                    Whitelist
                  </Link>
                </li>
                <li className="nav-list">
                  <Link
                    to="/userlist"
                    className="nav-link"
                    onClick={_toggleSidebar}
                  >
                    User list
                  </Link>
                </li>
                <li className="nav-list">
                  <HashLink
                    to="/gallery"
                    className="nav-link"
                    onClick={_toggleSidebar}
                  >
                    Gallery
                  </HashLink>
                </li>
                <li className="nav-list">
                  <HashLink
                    to="#faq"
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
              <div className="left-side d-flex algin-items-center justify-content-center">
                <SocialMediaLinkItem />
                <div className="nav-list mt-2">
                  <Link
                    to="/login"
                    className="nav-link"
                    onClick={_toggleSidebar}
                  >
                    Login
                  </Link>
                </div>
                <button className="connect-wallet-btn" onClick={connectWallet}>
                  {walletConnected ? "CONNECTED" : "CONNECT WALLET"}
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
