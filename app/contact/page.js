
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Contact Us">
                <div>

                    <section className="section-padding pb-0 p_relative">
                        <div className="gray-bg h_280 l_0 b_0 r_0 p_absolute"></div>
                        <div className="auto-container">
                            <div className="row align-items-end">
                                <div className="col-lg-5">
                                    <div className="section_heading mb_40">
                                        <span className="section_heading_title_small">Find Our Location</span>
                                        <h2 className="section_heading_title_big">Explore Our Office <br/> Worldwide</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="contact-info-1 d-flex flex-wrap justify-content-lg-end mb_40">
                                        <li>
                                            <h4 className="fs_16 mb_10"><i className="icon-14 mr_10 fs_18"></i>Location</h4>
                                            <p className="fs_12">Elder Assist India, East Delhi, India</p>
                                        </li>
                                        <li>
                                            <h4 className="fs_16 mb_10"><i className="icon-16 mr_10 fs_18"></i>Phone No</h4>
                                            <p className="fs_12"><Link href="tel:(+91)9643492249">(+91) 964 349 2249</Link></p>
                                        </li>
                                        <li>
                                            <h4 className="fs_16 mb_10"><i className="icon-15 mr_10 fs_15"></i>Email</h4>
                                            <p className="fs_12"><Link href="mailto:elderassistindia@gmail.com">elderassistindia@gmail.com</Link></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact-map p_relative">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14004.553466003963!2d77.28314836458547!3d28.697054301357507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0f34f5d6c3%3A0xa3c7e2b8c0cf75bb!2sElder%20Assist%20India!5e0!3m2!1sen!2sin!4v1691326341692!5m2!1sen!2sin" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="contact-form-section" className="section-padding gray-bg">
                        <div className="auto-container">  
                            <div className="section_heading text-center mb_40">
                                <span className="section_heading_title_small">Let’s Contact</span>
                                <h2 className="section_heading_title_big">Have Something To Say?</h2>
                            </div>          
                            <div className="form-alt-3">
                                <form method="post" action="sendemail.php" id="contact-form">
                                    <div className="row clearfix">
                                        <div className="form-group col-md-6">
                                            <input type="text" name="form_name" placeholder="Your Name" required/>
                                        </div>
                                        
                                        <div className="form-group col-md-6">
                                            <input type="email" name="email" placeholder="Your Email" required/>
                                        </div>

                                        <div className="form-group col-md-12">
                                            <input type="text" name="phone"placeholder="Phone Number" required/>
                                        </div>
                                        
                                        <div className="form-group col-md-12">
                                            <textarea name="form_message" placeholder="Message"></textarea>
                                        </div>
                                        
                                        <div className="form-group col-md-12 text-center">
                                            <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden"/>
                                            <button className="btn-1 btn-small" type="submit" data-loading-text="Please wait...">Send Message <i className="flaticon-right-arrow-1"></i><span></span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}