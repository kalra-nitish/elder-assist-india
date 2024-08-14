"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  return (
    <>
      {/*Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu}></div>
        <div className="close-btn" onClick={handleMobileMenu}>
          <i className="fal fa-times"></i>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
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
          {/*menu-outer*/}
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li
                  className={
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/services" onClick={handleMobileMenu}>
                    Elderly Care Services
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/medical-health">
                        Medical &amp; Health Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/everyday-essentials">
                        Everyday Essentials Hub
                      </Link>
                    </li>
                    <li>
                      <Link href="/financial-care">Financial Care</Link>
                    </li>
                    <li>
                      <Link href="/emergency-services">Emergency Services</Link>
                    </li>
                    <li>
                      <Link href="/fun-wellness">Fun &amp; Wellness</Link>
                    </li>
                    <li>
                      <Link href="/other-care">Other Care</Link>
                    </li>
                  </ul>

                  <div
                    className={
                      isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>

                {/* <li>
                  <Link href="/living-option">Subscription Plan</Link>{" "}
                </li> */}

                {/* <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#" onClick={handleMobileMenu}>Pages</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li><Link href="/about" onClick={handleMobileMenu}>About</Link></li>
                                        <li className={isActive.subMenuKey == 5 ? "dropdown current" : "dropdown"}>
                                            <Link href="/event-grid" onClick={handleMobileMenu}>Event</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 5 ? "block" : "none"}` }}>
                                                <li><Link href="/event-grid" onClick={handleMobileMenu}>Event Grid</Link></li>
                                                <li><Link href="/event-list" onClick={handleMobileMenu}>Event List</Link></li>
                                                <li><Link href="/event-details" onClick={handleMobileMenu}>Event Details</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4, 5)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={isActive.subMenuKey == 6 ? "dropdown current" : "dropdown"}>
                                            <Link href="/donation" onClick={handleMobileMenu}>Donation</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 6 ? "block" : "none"}` }}>
                                                <li><Link href="/donation" onClick={handleMobileMenu}>Donation</Link></li>
                                                <li><Link href="/donation-details" onClick={handleMobileMenu}>Donation Details</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4, 6)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={isActive.subMenuKey == 7 ? "dropdown current" : "dropdown"}>
                                            <Link href="/volunteer" onClick={handleMobileMenu}>Volunteer</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 7 ? "block" : "none"}` }}>
                                                <li><Link href="/volunteer">Volunteer</Link></li>
                                                <li><Link href="/volunteer-details">Volunteer Details</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 7 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4, 7)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li><Link href="/portfolio-grid" onClick={handleMobileMenu}>Portfolio</Link></li>
                                        <li><Link href="/testimonials" onClick={handleMobileMenu}>Testimonials</Link></li>
                                        <li><Link href="/faq" onClick={handleMobileMenu}>Faq</Link></li>
                                        <li><Link href="/career" onClick={handleMobileMenu}>Career</Link></li>
                                        <li><Link href="/error" onClick={handleMobileMenu}>404 Error Page</Link></li>
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                                </li> */}
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link href="/faq">Faq</Link>
                </li>

                {/* <li className={isActive.key == 8 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#" onClick={handleMobileMenu}>Blog</Link>
                                    <ul style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                        <li><Link href="/blog-grid">Blog Grid</Link></li>
                                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                                        <li><Link href="/blog-details">Blog Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 8 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(8)}><span className="fa fa-angle-right" /></div>
                                </li> */}
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link href="https://www.facebook.com/profile.php?id=61562833385732">
                  <span className="fab fa-facebook-square"></span>
                </Link>
              </li>
              <li>
                <Link href="https://x.com/eldercare07">
                  {" "}
                  <span className="fab fa-twitter"></span>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/elder-assit-india-6a184331a/">
                  <span className="fab fa-linkedin-in"></span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/*End Mobile Menu */}

      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
};
export default MobileMenu;
