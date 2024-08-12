import Link from "next/link"


export default function About() {
    return (
        <>
            <section className="about-3-section pt-0">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-3-image-wrap">
                                <div className="about-3-shape-1"><img src="assets/images/shape/pattern-6.png" alt="" /></div>
                                <div className="about-3-image-1"><img className="ms-lg-5" src="assets/images/resource/about-4.jpg" alt="" /></div>
                                <div className="about-3-experinece-year">
                                    <div className="about-3-shape-2"><img src="assets/images/shape/pattern-7.png" alt="" /></div>
                                    <div className="about-3-experinece-year-content d-flex">
                                        <h3>20</h3>
                                        <p>Years of <br /> Expericence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-5">
                            <div className="section_heading mb_50">
                                <span className="section_heading_title_small">About LoveGiver</span>
                                <h2 className="section_heading_title_big">All the <span>Senior Care </span> You <br /> Need in One Place</h2>
                            </div>
                            
                            <div className="tab-content about-3-tab-content" id="aboutTabContent">
                                <div className="tab-pane fadeInUp animated show active" id="about-tab-1" role="tabpanel" aria-labelledby="tab-1">
                                    <div className="row">
                                        <div className="col-md-6">                            
                                            <p className="aboout-3-desc">Lorem ipsum dolor sit amet consect adipiscing elit.Donec felis suscipit mi urna nulla at tincidunt feugiat vulput facilisis face pellentesque egestas metus mauris dictum.</p>
                                            <ul className="about-1-list">
                                                <li>Retirement Advice</li>
                                                <li>Medical Alert Systems</li>
                                                <li>Light Housekeeping</li>
                                            </ul>
                                            <div className="about-3-signature mb_30">
                                                <img src="assets/images/resource/sign.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="image text-md-end"><img src="assets/images/resource/about-5.jpg" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fadeInUp animated" id="about-tab-2" role="tabpanel" aria-labelledby="tab-2">
                                    <div className="row">
                                        <div className="col-md-6">                            
                                            <p className="aboout-3-desc">Lorem ipsum dolor sit amet consect adipiscing elit.Donec felis suscipit mi urna nulla at tincidunt feugiat vulput facilisis face pellentesque egestas metus mauris dictum.</p>
                                            <ul className="about-1-list">
                                                <li>Retirement Advice</li>
                                                <li>Medical Alert Systems</li>
                                                <li>Light Housekeeping</li>
                                            </ul>
                                            <div className="about-3-signature mb_30">
                                                <img src="assets/images/resource/sign.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="image"><img src="assets/images/resource/about-5.jpg" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fadeInUp animated" id="about-tab-3" role="tabpanel" aria-labelledby="tab-3">
                                    <div className="row">
                                        <div className="col-md-6">                            
                                            <p className="aboout-3-desc">Lorem ipsum dolor sit amet consect adipiscing elit.Donec felis suscipit mi urna nulla at tincidunt feugiat vulput facilisis face pellentesque egestas metus mauris dictum.</p>
                                            <ul className="about-1-list">
                                                <li>Retirement Advice</li>
                                                <li>Medical Alert Systems</li>
                                                <li>Light Housekeeping</li>
                                            </ul>
                                            <div className="about-3-signature mb_30">
                                                <img src="assets/images/resource/sign.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="image"><img src="assets/images/resource/about-5.jpg" alt="" /></div>
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
