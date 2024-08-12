'use client'
import Link from "next/link"
import { useState } from "react"


export default function Service2() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>


            <section className="service-6-section">
                <div className="auto-container">
                <div className="section_heading text-center mb_60">
                    <span className="section_heading_title_small">Services</span>
                    <h2 className="section_heading_title_big">Everyone Deserves Our <br /> Best Services</h2>
                </div>
                    <div className="tabs-box">
                        <div className="tab-btn-box p_relative mb_100">
                            <ul className="nav nav-tabs service-6-tab-btn" role="tablist">
                                <li className="nav-link" onClick={() => handleOnClick(1)}>
                                    <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}><div className="service-6-tab-title">Assisted Living</div></a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(2)}>
                                    <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}><div className="service-6-tab-title">Medical Care</div></a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(3)}>
                                    <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}><div className="service-6-tab-title">Personal Care</div></a>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(4)}>
                                    <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}><div className="service-6-tab-title">Private Nursing</div></a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                            <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-6">
                                    <h3 className="mb_30 fs_40">Medical Care</h3>
                                    <p className="mb_30 me-lg-5">Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec felis suscipit mi urna nulla at tincidunt feugiat vulputate. Ante facilisis face pellentesque quis egestas metus, mauris dictum. amet consect adipiscing elit. Donec 
                                        urna at tincidunt feugiat vulputate. Ante facilisis pellentesque
                                        quis egestas metus, mauris dictum.</p>
                                    <div className="row mb_30">
                                        <div className="col-md-6">
                                            <ul className="service-6-list">
                                                <li>Retirement Advice</li>
                                                <li>Medical Alert Systems</li>
                                                <li>Light Housekeeping</li>
                                                <li>Campanion Care</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="service-6-list">
                                                <li>Senior Care Resourse</li>
                                                <li>Condos for Seniors</li>
                                                <li>Light Housekeeping</li>
                                            </ul>
                                        </div>
                                    </div>       
                                    <div className="link-btn mb_30">
                                        <Link href="#" className="btn-1">Read More <span></span></Link>
                                    </div>             
                                </div>
                                <div className="col-lg-6">
                                    <div className="p_relative text-lg-end">
                                        <div className="service-6-shape"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
                                        <div className="p_relative">
                                            <img src="assets/images/resource/feature-image-3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row clearfix">
                                    <div className="col-lg-6">
                                        <h3 className="mb_30 fs_40">Medical Care</h3>
                                        <p className="mb_30 me-lg-5">Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec felis suscipit mi urna nulla at tincidunt feugiat vulputate. Ante facilisis face pellentesque quis egestas metus, mauris dictum. amet consect adipiscing elit. Donec 
                                            urna at tincidunt feugiat vulputate. Ante facilisis pellentesque
                                            quis egestas metus, mauris dictum.</p>
                                        <div className="row mb_30">
                                            <div className="col-md-6">
                                                <ul className="service-6-list">
                                                    <li>Retirement Advice</li>
                                                    <li>Medical Alert Systems</li>
                                                    <li>Light Housekeeping</li>
                                                    <li>Campanion Care</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="service-6-list">
                                                    <li>Senior Care Resourse</li>
                                                    <li>Condos for Seniors</li>
                                                    <li>Light Housekeeping</li>
                                                </ul>
                                            </div>
                                        </div>       
                                        <div className="link-btn mb_30">
                                            <Link href="#" className="btn-1">Read More <span></span></Link>
                                        </div>             
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p_relative text-lg-end">
                                            <div className="service-6-shape"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
                                            <div className="p_relative">
                                                <img src="assets/images/resource/feature-image-3.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-6">
                                    <h3 className="mb_30 fs_40">Medical Care</h3>
                                    <p className="mb_30 me-lg-5">Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec felis suscipit mi urna nulla at tincidunt feugiat vulputate. Ante facilisis face pellentesque quis egestas metus, mauris dictum. amet consect adipiscing elit. Donec 
                                        urna at tincidunt feugiat vulputate. Ante facilisis pellentesque
                                        quis egestas metus, mauris dictum.</p>
                                    <div className="row mb_30">
                                        <div className="col-md-6">
                                            <ul className="service-6-list">
                                                <li>Retirement Advice</li>
                                                <li>Medical Alert Systems</li>
                                                <li>Light Housekeeping</li>
                                                <li>Campanion Care</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="service-6-list">
                                                <li>Senior Care Resourse</li>
                                                <li>Condos for Seniors</li>
                                                <li>Light Housekeeping</li>
                                            </ul>
                                        </div>
                                    </div>       
                                    <div className="link-btn mb_30">
                                        <Link href="#" className="btn-1">Read More <span></span></Link>
                                    </div>             
                                </div>
                                <div className="col-lg-6">
                                    <div className="p_relative text-lg-end">
                                        <div className="service-6-shape"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
                                        <div className="p_relative">
                                            <img src="assets/images/resource/feature-image-3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                <div className="row clearfix">
                                    <div className="col-lg-6">
                                        <h3 className="mb_30 fs_40">Medical Care</h3>
                                        <p className="mb_30 me-lg-5">Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec felis suscipit mi urna nulla at tincidunt feugiat vulputate. Ante facilisis face pellentesque quis egestas metus, mauris dictum. amet consect adipiscing elit. Donec 
                                            urna at tincidunt feugiat vulputate. Ante facilisis pellentesque
                                            quis egestas metus, mauris dictum.</p>
                                        <div className="row mb_30">
                                            <div className="col-md-6">
                                                <ul className="service-6-list">
                                                    <li>Retirement Advice</li>
                                                    <li>Medical Alert Systems</li>
                                                    <li>Light Housekeeping</li>
                                                    <li>Campanion Care</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="service-6-list">
                                                    <li>Senior Care Resourse</li>
                                                    <li>Condos for Seniors</li>
                                                    <li>Light Housekeeping</li>
                                                </ul>
                                            </div>
                                        </div>       
                                        <div className="link-btn mb_30">
                                            <Link href="#" className="btn-1">Read More <span></span></Link>
                                        </div>             
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p_relative text-lg-end">
                                            <div className="service-6-shape"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
                                            <div className="p_relative">
                                                <img src="assets/images/resource/feature-image-3.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  
        </>
    )
}

















            
