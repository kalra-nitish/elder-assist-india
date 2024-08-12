import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container d-flex align-items-center justify-content-between">
                            <div className="logo-box">
                                <div className="logo"><a href="/"><img src="assets/images/logo.png" alt=""/></a></div>
                            </div>
                            <div className="middle-column">
                                <div className="nav-outer">
                                    <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="assets/images/icons/icon-bar.png" alt=""/></div>
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                            <Menu/>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="right-column d-flex align-items-center">                        
                                <div className="header-link-btn"><a href="/contact" className="btn-1 btn-alt">Get A Quote <span></span></a></div>
                                <div className="sidemenu-nav-toggler" onClick={handleSidebar}><i className="icon-17"></i></div>
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
                            <div className="logo"><a href="/"><img src="assets/images/logo.png" alt=""/></a></div>
                        </div>
                        <div className="middle-column">
                            <div className="nav-outer">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="assets/images/icons/icon-bar-2.png" alt=""/></div>
    
                              
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <Menu/> 
                                </nav>
                            </div>
                        </div>
                        <div className="right-column d-flex align-items-center">                        
                            <div className="header-link-btn"><a href="/" className="btn-1 btn-alt">Get A Quote <span></span></a></div>
                            <div className="sidemenu-nav-toggler" onClick={handleSidebar}><i className="icon-17"></i></div>
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
