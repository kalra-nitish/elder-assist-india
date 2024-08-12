import TestimonialSlider2 from "@/components/slider/TestimonialSlider2"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Elderly Care Services">
                <div>
                <section className="service-4-section">
                    <div className="auto-container">
                        <div className="section_heading text-center mb_60">
                            <span className="section_heading_title_small">Discover our Expertise - Tailored Solutions for You</span>
                            <h2 className="section_heading_title_big">Welcome to Our Service Galaxy</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="service-4-block text-center wow fadeInLeft" >
                                    <div className="service-4-icon"><i className="icon-6"></i></div>
                                    <h4 className="service-4-title mb_60"><Link href="/medical-health">Medical &amp; Health Solutions</Link></h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-4-block text-center wow fadeInLeft">
                                    <div className="service-4-icon"><i className="icon-7"></i></div>
                                    <h4 className="service-4-title mb_60"><Link href="/everyday-essentials">Everyday Essentials Hub</Link></h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-4-block text-center wow fadeInLeft">
                                    <div className="service-4-icon"><i className="icon-8"></i></div>
                                    <h4 className="service-4-title mb_60"><Link href="/financial-care">Financial Care</Link></h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-4-block text-center wow fadeInLeft" >
                                    <div className="service-4-icon"><i className="icon-36"></i></div>
                                    <h4 className="service-4-title"><Link href="/emergency-services">Emergency Services</Link></h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-4-block text-center wow fadeInLeft">
                                    <div className="service-4-icon"><i className="icon-37"></i></div>
                                    <h4 className="service-4-title"><Link href="/fun-wellness">Fun &amp; Wellness</Link></h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-4-block text-center wow fadeInLeft">
                                    <div className="service-4-icon"><i className="icon-38"></i></div>
                                    <h4 className="service-4-title"><Link href="/other-care">Other Care</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    
                {/* <section className="testimonial-2-section">
                    <div className="testimonial-2-left-column" style={{backgroundImage: ' url(assets/images/resource/feature-image-1.jpg)'}}>
                        <div className="testimonial-2-feature-image">
                            <img className="d-block d-lg-none" src="assets/images/resource/feature-image-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="testimonial-2-right-column">
                        <div className="section_heading mb_40">
                            <span className="section_heading_title_small alt">Our Testimonials</span>
                            <h2 className="section_heading_title_big alt">What People’s Say</h2>
                        </div>
                        <TestimonialSlider2/>
                    </div>
                </section> */}

                {/* <section className="blog-1-section">
                    <div className="auto-container">
                        <div className="section_heading text-center mb_60">
                            <span className="section_heading_title_small">Articles</span>
                            <h2 className="section_heading_title_big">Get More Update For <br/>LoveGiver</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-1-block wow fadeInLeft" >
                                    <div className="blog-1-image">
                                        <Link href="/blog-details"><img src="assets/images/resource/blog-1.jpg" alt="" /></Link>
                                        <div className="blog-1-date"><span>15 </span><br /> APRIL</div>
                                    </div>
                                    <div className="blog-1-bottom-content alt">
                                        <h4 className="blog-1-title"><Link href="/blog-details">How to Handle Unexpected Situations on Road</Link></h4>
                                        <ul className="d-flex blog-1-meta-info">
                                            <li><i className="icon-12"></i>Admin</li>
                                            <li><i className="icon-13"></i>0 Comnt</li>
                                        </ul>
                                        <p className="blog-1-excerpt">Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-1-block wow fadeInLeft" >
                                    <div className="blog-1-image">
                                        <Link href="/blog-details"><img src="assets/images/resource/blog-2.jpg" alt="" /></Link>
                                        <div className="blog-1-date"><span>15</span> <br /> APRIL</div>
                                    </div>
                                    <div className="blog-1-bottom-content alt">
                                        <h4 className="blog-1-title"><Link href="/blog-details">Inspire Design Decisions Was With Giovanni Pintorie</Link></h4>
                                        <ul className="d-flex blog-1-meta-info">
                                            <li><i className="icon-12"></i>Admin</li>
                                            <li><i className="icon-13"></i>0 Comnt</li>
                                        </ul>
                                        <p className="blog-1-excerpt">Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInLeft" >
                                <div className="blog-1-block">
                                    <div className="blog-1-image">
                                        <Link href="/blog-details"><img src="assets/images/resource/blog-3.jpg" alt="" /></Link>
                                        <div className="blog-1-date"><span>15 </span><br /> APRIL</div>
                                    </div>
                                    <div className="blog-1-bottom-content alt">
                                        <h4 className="blog-1-title"><Link href="/blog-details">5 Ways To Help Seniors Fight Loneliness</Link></h4>
                                        <ul className="d-flex blog-1-meta-info">
                                            <li><i className="icon-12"></i>Admin</li>
                                            <li><i className="icon-13"></i>0 Comnt</li>
                                        </ul>
                                        <p className="blog-1-excerpt">Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                </div>

            </Layout>
        </>
    )
}