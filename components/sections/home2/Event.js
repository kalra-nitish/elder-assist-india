
import Link from "next/link"
export default function Event() {
    return (
        <>
            <section className="event-1-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section_heading mb_20">
                                <span className="section_heading_title_small">Events</span>
                                <h2 className="section_heading_title_big">Let’s Join to Our <br/> Next <span>Events</span></h2>
                            </div>
                            <p className="event-1-desc mb_30">Lorem ipsum dolor sit amet consectetur adipiscing <br/> elit. Donec felis suscipit mi urna nulla at tincidunt <br/> feugiat vulputate. Ante facilisis face pellentesque <br /> quis egestas metus.</p>
                            <div className="link-bt mb_30"><Link href="/event-grid" className="btn-1">More Events <span></span></Link></div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="event-1-block wow fadeInLeft" >
                                        <div className="event-1-image">
                                            <Link href="/event-details"><img src="assets/images/resource/event-1.jpg" alt=""/></Link>
                                            <div className="event-1-date"><span>15 </span><br/> APRIL</div>
                                        </div>
                                        <div className="event-1-bottom-content">
                                            <h4 className="event-1-title"><Link href="/event-details">Independent Living for
                                                Senior Couples</Link></h4>
                                            <ul className="d-flex event-1-meta-info">
                                                <li><i className="icon-21"></i>775 Rolling Green Rd.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="event-1-block wow fadeInLeft" >
                                        <div className="event-1-image">
                                            <Link href="/event-details"><img src="assets/images/resource/event-2.jpg" alt=""/></Link>
                                            <div className="event-1-date"><span>12 </span><br/> APRIL</div>
                                        </div>
                                        <div className="event-1-bottom-content">
                                            <h4 className="event-1-title"><Link href="/event-details">Happyness Is Main Goals To Our Service Life</Link></h4>
                                            <ul className="d-flex event-1-meta-info">
                                                <li><i className="icon-21"></i>775 Rolling Green Rd.</li>
                                            </ul>
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
