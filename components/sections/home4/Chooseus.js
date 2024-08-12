import Link from "next/link"


export default function Chooseus() {
    return (
        <>
            <section className="why-chooseus-2-section">
                <div className="auto-container">
                    <div className="why-chooseus-2-wrap">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section_heading mb_20">
                                    <span className="section_heading_title_small">Why Choose Us</span>
                                    <h2 className="section_heading_title_big">Why People Choose <br /> LoveGiver</h2>
                                </div>
                                <p className="mb_30">Lorem ipsum dolor sit amet consect adipiscing elit. Donec felis <br />
                                    urna at tincidunt feugiat vulputate. Ante facilisis pellentesque <br />
                                    quis egestas metus, mauris dictum.</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="service-details-lsit mb_30">
                                            <li>Retirement Advice</li>
                                            <li>Medical Alert Systems</li>
                                            <li>Light Housekeeping</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="service-details-lsit mb_30">
                                            <li>Senior Care Resourse</li>
                                            <li>Condos for Seniors</li>
                                        </ul>
                                    </div>
                                </div>                        
                            </div>
                            <div className="col-lg-6">
                                <div className="why-chooseus-2-image"><img src="assets/images/resource/feature-image-6.jpg" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
