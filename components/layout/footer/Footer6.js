import Link from "next/link"
export default function Footer6() {
    return (
        <>
            <footer className="footer-style-six">
                <div className="auto-container">
                    <div className="footer-top">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 footer-column">
                                <div className="footer-widget logo-widget">
                                    <figure className="footer-logo"><Link href="/index-6"><img src="assets/images-2/footer-logo.png" alt="" /></Link></figure>
                                    <div className="text">
                                        <p>Our goal is to help our companies maintains achieve best  positions their respective industries &amp; our team work occur that works have to be repudiated.</p>
                                    </div>
                                    <div className="download-box">
                                        <Link href="/index-6"><i className="far fa-arrow-to-bottom" /></Link>
                                        <h5>Download Firm <br />Profile</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/index-6">About Us</Link></li>
                                            <li><Link href="/index-6">Careers</Link></li>
                                            <li><Link href="/index-6">Meet Team</Link></li>
                                            <li><Link href="/index-6">Features</Link></li>
                                            <li><Link href="/index-6">News</Link></li>
                                            <li><Link href="/index-6">Policies</Link></li>
                                            <li><Link href="/index-6">Projects</Link></li>
                                            <li><Link href="/index-6">FAQ’s</Link></li>
                                            <li><Link href="/index-6">Services</Link></li>
                                            <li><Link href="/index-6">Contact</Link></li>
                                            <li><Link href="/index-6">Testimonials</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-column">
                                <div className="footer-widget counter-widget">
                                    <div className="widget-title">
                                        <h3>Success In Numbers</h3>
                                    </div>
                                    <div className="inner-content">
                                        <div className="single-item">
                                            <div className="icon-box"><i className="fas fa-users" /></div>
                                            <div className="count-outer count-box">
                                                <span className="count-text" data-speed={3000} data-stop="3.6">0</span><span>K</span>
                                            </div>
                                            <h6>Trusted Clients</h6>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="fas fa-star" /></div>
                                            <div className="count-outer count-box">
                                                <span className="count-text" data-speed={3000} data-stop={100}>0</span><span>%</span>
                                            </div>
                                            <h6>Case Successful rate</h6>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="fas fa-balance-scale" /></div>
                                            <div className="count-outer count-box">
                                                <span className="count-text" data-speed={3000} data-stop={28}>0</span><span>+</span>
                                            </div>
                                            <h6>Years of Experience</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-column">
                                <div className="footer-widget location-widget">
                                    <div className="widget-title">
                                        <h3>Our Location</h3>
                                    </div>
                                    <div className="map-outer">
                                        <div className="google-map" id="contact-google-map" data-map-lat="40.167519" data-map-lng="124.434547" data-icon-path="assets/images-2/icons/map-marker.png" data-map-title="Head Office" data-map-zoom={5} data-markers="{
                                  &quot;marker-2&quot;: [40.646100, -73.958559, &quot;<h5>Head Office</h5>&quot;],
                                  &quot;marker-3&quot;: [40.623575, -73.910592, &quot;<h5>Branch Office</h5>&quot;],
                                  &quot;marker-4&quot;: [40.637562, -73.713406, &quot;<h5>Branch Office</h5>&quot;]
                              }">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom clearfix">
                        <div className="copyright pull-left">
                            <p>© 2021 <Link href="/index-6">Lovegiver</Link>, All Rights Reserved.</p>
                        </div>
                        <ul className="footer-nav clearfix pull-right">
                            <li><Link href="/index-6">Privacy Policy</Link></li>
                            <li><Link href="/index-6">Terms &amp; Conditions</Link></li>
                            <li><Link href="/index-6">Site Map</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}
