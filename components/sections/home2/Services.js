import Link from "next/link"


export default function Services() {
    return (
        <>
            <section className="service-2-section">
                <div className="auto-container">
                    <div className="section_heading text-center mb_90">
                        <span className="section_heading_title_small">What We Offers</span>
                        <h2 className="section_heading_title_big">Everyone Deserves Our <br/> Best Services</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-2-block-wrap">
                                <div className="service-2-image"><img src="assets/images/resource/service-1.jpg" alt=""/></div>
                                <div className="service-2-block wow fadeInLeft" >
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
                                <div className="service-2-block wow fadeInLeft" >
                                    <div className="service-2-icon"><i className="icon-7"></i></div>
                                    <h4 className="service-2-title">Medical & Health</h4>
                                    <p className="service-2-text">Amet congue lacus, vitae leo molestie <br/> pretium mauris sed nibh. Facilisis lacinia <br /> vesbulum tindunt aliquam.</p>
                                    <div className="service-2-link"><Link href="/service-details" className="btn-1 btn-alt btn-small">Read More<span></span></Link></div>
                                </div>                        
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-2-block-wrap">
                                <div className="service-2-image"><img src="assets/images/resource/service-3.jpg" alt=""/></div>
                                <div className="service-2-block wow fadeInLeft" >
                                    <div className="service-2-icon"><i className="icon-8"></i></div>
                                    <h4 className="service-2-title">Residential Care</h4>
                                    <p className="service-2-text">Amet congue lacus, vitae leo molestie <br/> pretium mauris sed nibh. Facilisis lacinia <br /> vesbulum tindunt aliquam.</p>
                                    <div className="service-2-link"><Link href="/service-details" className="btn-1 btn-alt btn-small">Read More<span></span></Link></div>
                                </div>                        
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
