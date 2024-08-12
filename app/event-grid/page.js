
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Events Grid">
                <div>
                    <section className="event-1-section white-bg">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="event-1-block wow fadeInLeft">
                                        <div className="event-1-image">
                                            <Link href="/event-details"><img src="assets/images/resource/event-7.jpg" alt=""/></Link>
                                            <div className="event-1-date"><span>15 </span><br /> APRIL</div>
                                        </div>
                                        <div className="event-1-bottom-content alt">
                                            <h4 className="event-1-title"><Link href="/event-details">Independent Living for
                                                Senior Couples</Link></h4>
                                            <ul className="d-flex event-1-meta-info">
                                                <li><i className="icon-21"></i>775 Rolling Green Rd.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="event-1-block wow fadeInLeft">
                                        <div className="event-1-image">
                                            <Link href="/event-details"><img src="assets/images/resource/event-8.jpg" alt=""/></Link>
                                            <div className="event-1-date"><span>12 </span><br /> APRIL</div>
                                        </div>
                                        <div className="event-1-bottom-content alt">
                                            <h4 className="event-1-title"><Link href="/event-details">Happyness Is Main Goals To Our Service Life</Link></h4>
                                            <ul className="d-flex event-1-meta-info">
                                                <li><i className="icon-21"></i>775 Rolling Green Rd.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="event-1-block wow fadeInLeft">
                                        <div className="event-1-image">
                                            <Link href="/event-details"><img src="assets/images/resource/event-9.jpg" alt=""/></Link>
                                            <div className="event-1-date"><span>12 </span><br /> APRIL</div>
                                        </div>
                                        <div className="event-1-bottom-content alt">
                                            <h4 className="event-1-title"><Link href="/event-details">Happyness Is Main Goals To Our Service Life</Link></h4>
                                            <ul className="d-flex event-1-meta-info">
                                                <li><i className="icon-21"></i>775 Rolling Green Rd.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="event-1-block wow fadeInLeft">
                                        <div className="event-1-image">
                                            <Link href="/event-details"><img src="assets/images/resource/event-10.jpg" alt=""/></Link>
                                            <div className="event-1-date"><span>15 </span><br /> APRIL</div>
                                        </div>
                                        <div className="event-1-bottom-content alt">
                                            <h4 className="event-1-title"><Link href="/event-details">Detailed discussion of the differences between love</Link></h4>
                                            <ul className="d-flex event-1-meta-info">
                                                <li><i className="icon-21"></i>775 Rolling Green Rd.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="event-1-block wow fadeInLeft">
                                        <div className="event-1-image">
                                            <Link href="/event-details"><img src="assets/images/resource/event-11.jpg" alt=""/></Link>
                                            <div className="event-1-date"><span>12 </span><br /> APRIL</div>
                                        </div>
                                        <div className="event-1-bottom-content alt">
                                            <h4 className="event-1-title"><Link href="/event-details">Inspire Design Decisions Was With Pintorie</Link></h4>
                                            <ul className="d-flex event-1-meta-info">
                                                <li><i className="icon-21"></i>775 Rolling Green Rd.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="event-1-block wow fadeInLeft">
                                        <div className="event-1-image">
                                            <Link href="/event-details"><img src="assets/images/resource/event-12.jpg" alt=""/></Link>
                                            <div className="event-1-date"><span>12 </span><br /> APRIL</div>
                                        </div>
                                        <div className="event-1-bottom-content alt">
                                            <h4 className="event-1-title"><Link href="/event-details">The Technology Behind Medical Alert Systems</Link></h4>
                                            <ul className="d-flex event-1-meta-info">
                                                <li><i className="icon-21"></i>775 Rolling Green Rd.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="styled-pagination text-center">
                                <li><Link href="#" className="active">1</Link></li>
                                <li><Link href="#">2</Link></li>
                                <li><Link href="#"><span className="fa fa-angle-right"></span></Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}