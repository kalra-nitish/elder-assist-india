"use client";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import ModalVideo from "react-modal-video";
export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="About Us">
        <section className="about-1-section">
          <div className="auto-container">
            <div className="section_heading mb_20">
              <span className="section_heading_title_small">About Us</span>
              <h2 className="section_heading_title_big">
                Elder Assist India: Quality Elderly Care for a Growing
                Population
              </h2>
            </div>
            <p className="about-1-desc">
              Welcome to Elder Assist India, a team dedicated to providing
              top-tier care for the elderly. We are uniquely positioned to
              address the evolving needs of India's rapidly growing senior
              population. We ensure seniors lead a dignified and fulfilling life
              through our personalized, holistic services. We offer a
              comprehensive suite of services designed to meet the diverse needs
              of our elderly clientele. Our range of services spans from{" "}
              <span className="bold-theme">
                Medical & Healthcare Solutions, Everyday Essentials Hub,
                Financial Care, Emergency Services, Fun & Wellness activities
              </span>
              .<br />
              <span className="bold-theme">Meeting the Demand of India's Changing Demographics</span>
              <br />
              In light of India's demographic shifts, the need for professional
              elderly care is more important than ever. The United Nations
              Population Fund projects that by 2026, India's senior population
              will reach 173 million. This underlines the vital role that{" "}
              <span className="bold-theme">Elder Assist India</span> team plays in responding to the
              escalating demand for professional elderly care services in the
              country.
              <br />
              <span className="bold-theme">
                Join us as we strive to make a significant difference in the
                lives of India's elderly population, ensuring they receive the
                care and respect they deserve.
              </span>
            </p>
           
          </div>
        </section>

        {/* <section className="service-2-section">
                    <div className="auto-container">
                        <div className="section_heading text-center mb_90">
                            <span className="section_heading_title_small">What We Offers</span>
                            <h2 className="section_heading_title_big">Everyone Deserves Our <br/> Best Services</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="service-2-block-wrap">
                                    <div className="service-2-image"><img src="assets/images/resource/service-1.jpg" alt=""/></div>
                                    <div className="service-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                                        <div className="service-2-icon"><i className="icon-6"></i></div>
                                        <h4 className="service-2-title">Assisted Living</h4>
                                        <p className="service-2-text">Amet congue lacus, vitae leo molestie <br/> pretium mauris sed nibh. Facilisis lacinia <br/> vesbulum tindunt aliquam.</p>
                                        <div className="service-2-link"><Link href="/service-details" className="btn-1 btn-alt btn-small">Read More<span></span></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-2-block-wrap">
                                    <div className="service-2-image"><img src="assets/images/resource/service-2.jpg" alt=""/></div>
                                    <div className="service-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1s">
                                        <div className="service-2-icon"><i className="icon-7"></i></div>
                                        <h4 className="service-2-title">Medical & Health</h4>
                                        <p className="service-2-text">Amet congue lacus, vitae leo molestie <br/> pretium mauris sed nibh. Facilisis lacinia <br/> vesbulum tindunt aliquam.</p>
                                        <div className="service-2-link"><Link href="/service-details" className="btn-1 btn-alt btn-small">Read More<span></span></Link></div>
                                    </div>                        
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-2-block-wrap">
                                    <div className="service-2-image"><img src="assets/images/resource/service-3.jpg" alt=""/></div>
                                    <div className="service-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1.2s">
                                        <div className="service-2-icon"><i className="icon-8"></i></div>
                                        <h4 className="service-2-title">Residential Care</h4>
                                        <p className="service-2-text">Amet congue lacus, vitae leo molestie <br/> pretium mauris sed nibh. Facilisis lacinia <br/> vesbulum tindunt aliquam.</p>
                                        <div className="service-2-link"><Link href="/service-details" className="btn-1 btn-alt btn-small">Read More<span></span></Link></div>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

        {/* <section className="funfact-1-section">
                    <div className="auto-container">
                        <div className="funfact-1-wrapper">
                            <div className="funfact-1-shape" style={{backgroundimage: "url('assets/images/shape/map2.png')"}}></div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="funfact-1-block text-center">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <h2 className="funfact-1-number odometer"><CounterUp end={80} /></h2>
                                            <h2 className="funfact-1-number-prefix">+</h2>
                                        </div>
                                        <p className="funfact-1-title">Country Coverage</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="funfact-1-block">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <h2 className="funfact-1-number odometer"><CounterUp end={620} /></h2>
                                            <h2 className="funfact-1-number-prefix">+</h2>
                                        </div>
                                        <p className="funfact-1-title">Award Wining</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="funfact-1-block">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <h2 className="funfact-1-number-prefix">$</h2>
                                            <h2 className="funfact-1-number odometer"><CounterUp end={290} /></h2>
                                        </div>
                                        <p className="funfact-1-title">Saticfied People</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="funfact-1-block">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <h2 className="funfact-1-number odometer"><CounterUp end={730} /></h2>
                                            <h2 className="funfact-1-number-prefix">+</h2>
                                        </div>
                                        <p className="funfact-1-title">Volunteers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

        {/* <section className="testimonial-1-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="section_heading mb_20">
                                    <span className="section_heading_title_small">Testimonials</span>
                                    <h2 className="section_heading_title_big">What <br/> They’re Say <br/> About Us?</h2>
                                </div>
                                <p className="testimonial-1-desc">Amet dui scelerisque vel habitant eget <br/> tincidunt facilisis pretium. Porttitor mi <br/> nisi, non vitae tempus.</p>
                            </div>
                            <div className="col-lg-8">
                                <div className="testimonial-1-block-wrap">
                                    <div className="testimonial-1-shape-1"><img src="assets/images/shape/pattern-1.png" alt=""/></div>
                                    <div className="testimonial-1-shape-2"><img src="assets/images/shape/pattern-1.png" alt=""/></div>
                                    <TestimonialSlider1/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
        {/* 
                <section className="team-2-section theme-gray-bg">
                    <div className="auto-container">
                        <div className="section_heading text-center mb_70">
                            <span className="section_heading_title_small">Exclusive Team</span>
                            <h2 className="section_heading_title_big">We Have A Professional Team <br/> Members</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="team-2-block">
                                    <div className="team-2-image">                              
                                        <div className="team-2-image-wrap"><img src="assets/images/resource/team-5.jpg" alt=""/></div>
                                        <div className="team-2-share-icon-area">
                                            <ul className="team-2-social-icon">
                                                <li><Link href="/about"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                            <div className="team-2-share-icon"><i className="icon-11"></i></div>
                                        </div>
                                    </div>
                                    <h4 className="team-2-title">Wade Warren</h4>
                                    <p className="team-2-designaiton">Volunteer</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-2-block">
                                    <div className="team-2-image">                             
                                        <div className="team-2-image-wrap"><img src="assets/images/resource/team-6.jpg" alt=""/></div>
                                        <div className="team-2-share-icon-area">
                                            <ul className="team-2-social-icon">
                                                <li><Link href="/about"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                            <div className="team-2-share-icon"><i className="icon-11"></i></div>
                                        </div>
                                    </div>
                                    <h4 className="team-2-title">Guy Hawkins</h4>
                                    <p className="team-2-designaiton">Volunteer</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-2-block">
                                    <div className="team-2-image">                             
                                        <div className="team-2-image-wrap"><img src="assets/images/resource/team-7.jpg" alt=""/></div>
                                        <div className="team-2-share-icon-area">
                                            <ul className="team-2-social-icon">
                                                <li><Link href="/about"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                            <div className="team-2-share-icon"><i className="icon-11"></i></div>
                                        </div>
                                    </div>
                                    <h4 className="team-2-title">Bessie Cooper</h4>
                                    <p className="team-2-designaiton">Volunteer</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-2-block">
                                    <div className="team-2-image">                               
                                        <div className="team-2-image-wrap"><img src="assets/images/resource/team-8.jpg" alt=""/></div>
                                        <div className="team-2-share-icon-area">
                                            <ul className="team-2-social-icon">
                                                <li><Link href="/about"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                            <div className="team-2-share-icon"><i className="icon-11"></i></div>
                                        </div>
                                    </div>
                                    <h4 className="team-2-title">Devon Lane</h4>
                                    <p className="team-2-designaiton">Volunteer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="vfhzo499OeA"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}
