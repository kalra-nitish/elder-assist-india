'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Services 1">

                <section className="service-2-section alt-2">
                    <div className="auto-container">
                        <div className="section_heading text-center mb_90">
                            <span className="section_heading_title_small">What We Offers</span>
                            <h2 className="section_heading_title_big">Everyone Deserves Our <br /> Best Services</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="service-2-block-wrap">
                                    <div className="service-2-image"><img src="assets/images/resource/service-1.jpg" alt=""/></div>
                                    <div className="service-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                                        <div className="service-2-icon"><i className="icon-6"></i></div>
                                        <h4 className="service-2-title">Assisted Living</h4>
                                        <p className="service-2-text">Amet congue lacus, vitae leo molestie <br /> pretium mauris sed nibh. Facilisis lacinia <br /> vesbulum tindunt aliquam.</p>
                                        <div className="service-2-link"><a href="/service-details" className="btn-1 btn-alt btn-small">Read More<span></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-2-block-wrap">
                                    <div className="service-2-image"><img src="assets/images/resource/service-2.jpg" alt=""/></div>
                                    <div className="service-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1s">
                                        <div className="service-2-icon"><i className="icon-7"></i></div>
                                        <h4 className="service-2-title">Medical & Health</h4>
                                        <p className="service-2-text">Amet congue lacus, vitae leo molestie <br /> pretium mauris sed nibh. Facilisis lacinia <br /> vesbulum tindunt aliquam.</p>
                                        <div className="service-2-link"><a href="/service-details" className="btn-1 btn-alt btn-small">Read More<span></span></a></div>
                                    </div>                        
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-2-block-wrap">
                                    <div className="service-2-image"><img src="assets/images/resource/service-3.jpg" alt=""/></div>
                                    <div className="service-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1.2s">
                                        <div className="service-2-icon"><i className="icon-8"></i></div>
                                        <h4 className="service-2-title">Residential Care</h4>
                                        <p className="service-2-text">Amet congue lacus, vitae leo molestie <br /> pretium mauris sed nibh. Facilisis lacinia <br /> vesbulum tindunt aliquam.</p>
                                        <div className="service-2-link"><a href="/service-details" className="btn-1 btn-alt btn-small">Read More<span></span></a></div>
                                    </div>                        
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-2-block-wrap">
                                    <div className="service-2-image"><img src="assets/images/resource/service-4.jpg" alt=""/></div>
                                    <div className="service-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                                        <div className="service-2-icon"><i className="icon-35"></i></div>
                                        <h4 className="service-2-title">Nursing Care</h4>
                                        <p className="service-2-text">Amet congue lacus, vitae leo molestie <br /> pretium mauris sed nibh. Facilisis lacinia <br /> vesbulum tindunt aliquam.</p>
                                        <div className="service-2-link"><a href="/service-details" className="btn-1 btn-alt btn-small">Read More<span></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-2-block-wrap">
                                    <div className="service-2-image"><img src="assets/images/resource/service-5.jpg" alt=""/></div>
                                    <div className="service-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1s">
                                        <div className="service-2-icon"><i className="icon-36"></i></div>
                                        <h4 className="service-2-title">Physical Assistance</h4>
                                        <p className="service-2-text">Amet congue lacus, vitae leo molestie <br /> pretium mauris sed nibh. Facilisis lacinia <br /> vesbulum tindunt aliquam.</p>
                                        <div className="service-2-link"><a href="/service-details" className="btn-1 btn-alt btn-small">Read More<span></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-2-block-wrap">
                                    <div className="service-2-image"><img src="assets/images/resource/service-6.jpg" alt=""/></div>
                                    <div className="service-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1.2s">
                                        <div className="service-2-icon"><i className="icon-37"></i></div>
                                        <h4 className="service-2-title">Personal Care</h4>
                                        <p className="service-2-text">Amet congue lacus, vitae leo molestie <br /> pretium mauris sed nibh. Facilisis lacinia <br /> vesbulum tindunt aliquam.</p>
                                        <div className="service-2-link"><a href="/service-details" className="btn-1 btn-alt btn-small">Read More<span></span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-1-section">
                    <div className="cta-1-bg" data-parallax='{"y": 30}' style={{backgroundImage: 'url(assets/images/background/parallax-bg.jpg)'}}></div>
                    <div className="auto-container">
                        <div className="section_heading text-center mb_40">
                            <span className="section_heading_title_small alt">New Technology</span>
                            <h2 className="section_heading_title_big alt">Book An <span>Appointment</span> <br />
                                Today!</h2>
                        </div>
                        <div className="text-center">
                            <div className="cta-1-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec <br /> felis suscipit mi urna nulla at tincidunt feugiat vulputate. Ante <br /> face pellentesque.</div>
                            <div className="cta-1-link-bt"><a href="/event-grid" className="btn-1">Get Appointment <span></span></a></div>
                        </div>
                    </div>
                </section>

                <section className="faq-1-section">
                    <div className="auto-container">
                        <div className="row">                
                            <div className="col-lg-6">
                                <div className="faq-1-image">
                                    <div className="faq-1-shape"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
                                    <div className="faq-2-shape"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
                                    <img src="assets/images/resource/feature-image-2.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 ps-lg-5">
                                <div className="section_heading mb_20">
                                    <span className="section_heading_title_small">Faq’s</span>
                                    <h2 className="section_heading_title_big">Frequently Asked <br />
                                        Questions</h2>
                                </div>
                                <p className="faq-1-text mb_30">Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec felis suscipit mi urna nulla at tincidunt feugiat vulputate. Ante facilisis face pellentesque quis egestas metus.</p>
                              
                                    <div className="accordian-boxed">
                                        {/*Accordian Box*/}
                                        <ul className="accordion-box alt">                            
                                            {/*Block*/}
                                            <li className="accordion block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Is there support for me at home?</div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet
                                                            amet mattis commodo Nunc tempor amet massa diam mauris
                                                            Risus sodales interdum.</div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*Block*/}
                                            <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>How can I manage my breathlessness?</div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet
                                                            amet mattis commodo Nunc tempor amet massa diam mauris
                                                            Risus sodales interdum.</div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*Block*/}
                                            <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>I am worried about a loved one</div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet
                                                            amet mattis commodo Nunc tempor amet massa diam mauris
                                                            Risus sodales interdum.</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}