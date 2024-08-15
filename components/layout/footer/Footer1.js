import Link from "next/link";
import { ElderAssistIndiaLogoIcon } from "@/public/assets/images/icons/company/index";

export default function Footer1() {
  return (
    <>
      <footer className="footer-1">
        <div className="footer-1-top">
          <div className="auto-container">
            <div className="footer-1-top-content d-flex align-items-center justify-content-between">
              <div className="logo">
                <Link href="/">
                  <img src="assets/images/logo.png" alt="" />
                </Link>
              </div>
              <ul className="footer-1-social-icon d-flex align-items-center">
                <li>
                  <Link href="https://www.facebook.com/profile.php?id=61563284027615">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/eldercare07">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/elder-assist-731765309/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/eldercare07/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-1-middle">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="about-widget-1">
                  <div className="footer-widget-title">
                    <h4>About Us</h4>
                  </div>
                  <div className="about-widget-1-text">
                    <p>
                      Welcome to Elder Assist India, your partner in top-tier
                      elderly care. We provide personalized services including{" "}
                      <span className="bold-themes">
                        medical, everyday essentials, financial care, emergency
                        assistance, & wellness activities
                      </span>
                      . Join us in supporting India's growing senior population,
                      projected to reach 173 million by 2026, ensuring they lead
                      dignified and fulfilling lives.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="link-widget-1 px-lg-5">
                  <div className="footer-widget-title">
                    <h4>Quick Links</h4>
                  </div>
                  <ul className="link-widget-1-list">
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/services">Elderly Care Services</Link>
                    </li>
                    {/* <li>
                      <Link href="/subscription-plan">Subscription Plans</Link>
                    </li> */}
                    <li>
                      <Link href="/blogs">Blogs</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="link-widget-1">
                  <div className="footer-widget-title">
                    <h4>Useful Links</h4>
                  </div>
                  <ul className="link-widget-1-list">
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms-and-conditions">Terms & Condition</Link>
                    </li>
                    <li>
                      <Link href="/cookies-policy">Cookies Policy</Link>
                    </li>
                    <li>
                      <Link href="/disclaimer">Disclaimer</Link>
                    </li>
                    <li>
                      <Link href="/faq">Faq</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="contact-widget-1">
                  <div className="footer-widget-title">
                    <h4>Contact Us</h4>
                  </div>
                  <div className="contact-widget-text">
                    You can reach out to us at:
                  </div>
                  <ul className="contact-widget-1-list">
                    <li>
                      <i className="icon-14"></i> Elder Assist India, East
                      Delhi, India
                    </li>
                    <li>
                      <i className="icon-3"></i>
                      <Link href="mailto:elderassistindia@gmail.com">
                      elderassistindia@gmail.com
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/919643492249?text-Hello How can I help you ?"
                        target="_blank"
                        style={{ marginTop: -8, marginLeft: -8 }}
                      >
                        <img
                          src="assets/images/icons/whatsapp.png"
                          alt="whatsapp number"
                          style={{ height: 35 }}
                        />
                        (91)-964-349-2249
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="footer-bottom-row">
              <div className="footer-bottom-text">
                Copyright © 2024 Elder Assist India | Designed by{" "}
                <a href="https://cognitivecoreai.com">CognitiveCoreAI</a> All
                Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
