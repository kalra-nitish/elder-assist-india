import Link from "next/link"


export default function Service() {
    return (
        <>
            <section className="service-1-section">
                <div className="auto-container">
                    <div className="section_heading text-center mb_90">
                        <span className="section_heading_title_small">What We Offers</span>
                        <h2 className="section_heading_title_big">Everyone Deserves Our <br /> Best Services</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-1-block text-center wow fadeInLeft">
                                <div className="service-1-icon"><i className="icon-6"></i></div>
                                <h4 className="service-1-title">Assisted Living</h4>
                                <p className="service-1-text">Amet congue lacus, vitae leo molestie <br /> pretium mauris sed nibh. Facilisis lacinia <br /> vesbulum tindunt aliquam.</p>
                                <div className="service-1-link"><Link href="/service-details"><i className="icon-4"></i></Link></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-1-block text-center wow fadeInLeft">
                                <div className="service-1-icon"><i className="icon-7"></i></div>
                                <h4 className="service-1-title">Medical & Health</h4>
                                <p className="service-1-text">Amet congue lacus, vitae leo molestie <br /> pretium mauris sed nibh. Facilisis lacinia <br /> vesbulum tindunt aliquam.</p>
                                <div className="service-1-link"><Link href="/service-details"><i className="icon-4"></i></Link></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-1-block text-center wow fadeInLeft">
                                <div className="service-1-icon"><i className="icon-8"></i></div>
                                <h4 className="service-1-title">Residential Care</h4>
                                <p className="service-1-text">Amet congue lacus, vitae leo molestie <br /> pretium mauris sed nibh. Facilisis lacinia <br /> vesbulum tindunt aliquam.</p>
                                <div className="service-1-link"><Link href="/service-details"><i className="icon-4"></i></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
