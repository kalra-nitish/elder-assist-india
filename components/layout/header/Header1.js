import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top-1">
                    <div className="auto-container">
                        <div className="header-top-1-row d-flex align-items-center justify-content-between">
                            <div className="header-top-1-left-column">
                                <ul className="header-top-1-contact-info d-flex align-items-center">
                                    <li><i className="icon-1"></i><span>Open Hours:</span> Mon-Fri 8:00 am-6:00 pm</li>
                                    <li><i className="icon-2"></i><span>Phone:</span> <Link href="tel:+91-213-666-0027">+91-213-666-0027</Link></li>
                                    <li><i className="icon-3"></i><span>Email:</span> <Link href="mailto:info@example.com">info@example.com</Link></li>
                                </ul>
                            </div>
                            <div className="header-top-1-right-column d-flex align-items-center">
                                <div className="header-top-1-login"><Link href="/">Login</Link></div>
                                <ul className="header-top-1-social-icon d-flex align-items-center">
                                    <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container d-flex align-items-center justify-content-between">
                            <div className="logo-box">
                                <div className="logo"><Link href="/"><img src="assets/images/logo.png" alt="" /></Link></div>
                            </div>
                            <div className="middle-column">
                                <div className="nav-outer">
                                    <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="assets/images/icons/icon-bar.png" alt="" /></div>
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                            <Menu />
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="right-column">                        
                                <div className="header-link-btn"><Link href="/appointment" className="btn-1">Make An Appointment <span></span></Link></div>
                            </div>                        
                        </div>
                    </div>
                </div>

                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container d-flex align-items-center justify-content-between">                    
                            <div className="logo-box">
                                <div className="logo"><Link href="/"><img src="assets/images/logo.png" alt="" /></Link></div>
                            </div>
                            <div className="middle-column">
                                <div className="nav-outer">
                                    <div className="mobile-nav-toggler"><img src="assets/images/icons/icon-bar-2.png" alt="" /></div>                        
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <Menu />
                                    </nav>
                                </div>
                            </div>
                            <div className="right-column">                            
                                <div className="header-link-btn"><Link href="/appointment" className="btn-1">Make An Appointment <span></span></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
            </header>
        </>
    )
}
