import Link from "next/link"


export default function Skill() {
    return (
        <>
            <section className="skill-1-section section-padding half-bg">
                <div className="auto-container full-width">
                    <div className="row align-items-center">                
                        <div className="col-lg-6 order-lg-2 ps-lg-5">
                            <div className="skill-1-inner-container p_relative">
                                <div className="section_heading mb_30">
                                    <span className="section_heading_title_small">Skills</span>
                                    <h2 className="section_heading_title_big">Most <span>Experience</span> Care <br />
                                        For Senior Person</h2>
                                </div>
                                <div className="skill-1-text">Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec felis suscipit mi urna nulla at tincidunt feugiat vulputate. Ante facilisis face pellentesque quis egestas metus.</div>
                                <div className="skill-1-progressbar-item">
                                    <p className="skill-1-progressbar-title">Medical Care</p>
                                    <div className="progressbar-1-outer">
                                        <div className="progressbar-2-inner progress-line" data-width="75">
                                            <div className="progressbar-1-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="75">75</span>%</div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-1-progressbar-item">
                                    <p className="skill-1-progressbar-title">Home Nursing</p>
                                    <div className="progressbar-1-outer">
                                        <div className="progressbar-3-inner progress-line" data-width="90">
                                            <div className="progressbar-1-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="90">90</span>%</div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-1-progressbar-item">
                                    <p className="skill-1-progressbar-title">Food & Health</p>
                                    <div className="progressbar-1-outer">
                                        <div className="progressbar-4-inner progress-line" data-width="80">
                                            <div className="progressbar-1-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="80">80</span>%</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-0 pe-lg-5">
                            <div className="skill-1-image-wrap">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="skill-1-image2 mb_30"><img src="assets/images/resource/feature-image-5.jpg" alt="" /></div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="skill-1-image2 mb_30"><img src="assets/images/resource/feature-image-4.jpg" alt="" /></div>
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
