"use client"

import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import { WhatsappIcon } from "@/public/assets/images/icons/company/index";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header3({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <header
        className={`main-header header-style-two ${
          scroll ? "fixed-header" : ""
        }`}
      >
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container d-flex align-items-center justify-content-between">
              <div className="logo-box">
                <div className="logo">
                  <a href="/">
                    <img
                      src="assets/images/logo.png"
                      alt="elder-assist-logo"
                      className="company-logo"
                    />
                  </a>
                </div>
              </div>
              <div className="right-column d-flex align-items-center">
                <div className="nav-outer">
                  <div
                    className="mobile-nav-toggler"
                    onClick={handleMobileMenu}
                  >
                    <img src="assets/images/icons/icon-bar.png" alt="" />
                  </div>
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <Menu />
                    </div>
                  </nav>
                </div>
                <div className="header-upper-phone-number">
                  <a
                    href="https://wa.me/919643492249?text-Hello How can I help you ?"
                    target="_blank"
                  >
                    <img
                      src="assets/images/icons/whatsapp.png"
                      alt="whatsapp number"
                      style={{ height: 50 }}
                    />
                    (91)-964-349-2249
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ... rest of the header code ... */}
      </header>
    </>
  );
}
