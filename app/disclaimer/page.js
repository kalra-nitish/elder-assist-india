"use client";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import ModalVideo from "react-modal-video";
export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Disclaimer">
        <section className="disclaimer-1-section">
          <div className="auto-container">
            <div className="section_heading mb_20">
             
            </div>
            <p className="disclaimer-1-desc">
            This website (‘Website’) is designed and maintained by Cognitive Core AI Private Limited (‘Company’) to provide information to the users on "As-Is" basis and does not guarantee the accuracy or reliability of such information and Company shall not be liable for any losses that occur as a result of reliance on the information provided through the Website . The Company cannot guarantee and does not promise any specific results from use of the Website and/or the service or information provided through the Website.
The Website is merely a platform to provide information regarding the services of the Company. The Company makes no representations or guarantees regarding the Website, or any content on it, of the Website, including, but not limited to, broken links, hyperlinks, inaccuracies or typographical and/or clerical errors, nor does it warrant that the Website will work/operate error-free or that the Website or its servers are free of computer viruses or other harmful mechanisms. The Company is, therefore, not responsible for, and expressly disclaims all liability for, damages of any kind arising out of use of the Website, reference to, or reliance on any information contained and/or collected in the Website. While the information contained within the Website is periodically updated, the Company gives no guarantee that the information provided in this Website is correct, complete, and up-to-date. Nothing on the Website shall be considered an endorsement, representation or warranty with respect to any user or third party, whether in regard to its contents, information, services or otherwise. Further, although the Company is committed towards protecting the privacy of its users, but the Company cannot ensure or warrant the security of any information you transmit to us. As a user of the Website you agree and acknowledge that under no circumstances the Company/Website shall be liable to its users and/or any person claiming through such users and/or any third party(ies) for any action, suit, losses, cost, expenses or damage which is indirect, incidental, consequential, special or exemplary, or liabilities to third parties arising from any source. The users assume all responsibility and risk for using/accessing the Website.
The users acknowledge and undertake that they are using/accessing the Website at their own risk and are using at their best and prudent judgment. The Company shall not be liable nor responsible for any actions or inactions of its users and/or for any breach of conditions, representations or warranties by other users of the Website and hereby expressly disclaim any and all responsibility and liability in that regard.
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
