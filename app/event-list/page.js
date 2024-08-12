
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Events List">
                <div>
                <section className="event-1-section white-bg">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="event-2-block alt d-flex wow fadeInLeft">
                                    <div className="event-2-image">
                                        <Link href="/event-details"><img src="assets/images/resource/event-3.jpg" alt=""/></Link>
                                    </div>
                                    <div className="event-2-bottom-content">
                                        <div className="event-2-date"><span>15 </span><br/> APRIL</div>
                                        <h4 className="event-2-title"><Link href="/event-details">Independent Living for <br/> Senior Couples</Link></h4>
                                        <ul className="d-flex event-2-meta-info">
                                            <li><i className="icon-21"></i>775 Rolling Green Rd.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="event-2-block alt d-flex wow fadeInLeft">
                                    <div className="event-2-image">
                                        <Link href="/event-details"><img src="assets/images/resource/event-4.jpg" alt=""/></Link>
                                    </div>
                                    <div className="event-2-bottom-content">
                                        <div className="event-2-date"><span>15 </span><br/> APRIL</div>
                                        <h4 className="event-2-title"><Link href="/event-details">Happyness Is Main Goals <br/> To Our Service Life</Link></h4>
                                        <ul className="d-flex event-2-meta-info">
                                            <li><i className="icon-21"></i>775 Rolling Green Rd.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="event-2-block alt d-flex wow fadeInLeft">
                                    <div className="event-2-image">
                                        <Link href="/event-details"><img src="assets/images/resource/event-5.jpg" alt=""/></Link>
                                    </div>
                                    <div className="event-2-bottom-content">
                                        <div className="event-2-date"><span>15 </span><br/> APRIL</div>
                                        <h4 className="event-2-title"><Link href="/event-details">Independent Living for <br/> Senior Couples</Link></h4>
                                        <ul className="d-flex event-2-meta-info">
                                            <li><i className="icon-21"></i>775 Rolling Green Rd.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="event-2-block alt d-flex wow fadeInLeft">
                                    <div className="event-2-image">
                                        <Link href="/event-details"><img src="assets/images/resource/event-6.jpg" alt=""/></Link>
                                    </div>
                                    <div className="event-2-bottom-content">
                                        <div className="event-2-date"><span>15 </span><br/> APRIL</div>
                                        <h4 className="event-2-title"><Link href="/event-details">Happyness Is Main Goals <br/> To Our Service Life</Link></h4>
                                        <ul className="d-flex event-2-meta-info">
                                            <li><i className="icon-21"></i>775 Rolling Green Rd.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="event-2-block alt d-flex wow fadeInLeft">
                                    <div className="event-2-image">
                                        <Link href="/event-details"><img src="assets/images/resource/event-14.jpg" alt=""/></Link>
                                    </div>
                                    <div className="event-2-bottom-content">
                                        <div className="event-2-date"><span>15 </span><br/> APRIL</div>
                                        <h4 className="event-2-title"><Link href="/event-details">Independent Living for <br/> Senior Couples</Link></h4>
                                        <ul className="d-flex event-2-meta-info">
                                            <li><i className="icon-21"></i>775 Rolling Green Rd.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="event-2-block alt d-flex wow fadeInLeft">
                                    <div className="event-2-image">
                                        <Link href="/event-details"><img src="assets/images/resource/event-15.jpg" alt=""/></Link>
                                    </div>
                                    <div className="event-2-bottom-content">
                                        <div className="event-2-date"><span>15 </span><br/> APRIL</div>
                                        <h4 className="event-2-title"><Link href="/event-details">Happyness Is Main Goals <br/> To Our Service Life</Link></h4>
                                        <ul className="d-flex event-2-meta-info">
                                            <li><i className="icon-21"></i>775 Rolling Green Rd.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>

            </Layout>
        </>
    )
}