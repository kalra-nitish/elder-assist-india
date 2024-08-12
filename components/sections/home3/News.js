import Link from "next/link"


export default function News() {
    return (
        <>
            <section className="blog-1-section">
                <div className="auto-container">
                    <div className="section_heading text-center mb_60">
                        <span className="section_heading_title_small">Blogs</span>
                        {/* <h2 className="section_heading_title_big">Get More Update For <br />LoveGiver</h2> */}
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="blog-1-block wow fadeInLeft" >
                                <div className="blog-1-image">
                                    <Link href="/blog-common-issues"><img src="assets/images/resource/blog-1.svg" alt="blog1" /></Link>
                                    <div className="blog-1-date"><span>30 </span><br /> June</div>
                                </div>
                                <div className="blog-1-bottom-content alt">
                                    <h4 className="blog-1-title"><Link href="/blog-common-issues">Indian Elder Care: Common Issues and How to Manage Them</Link></h4>
                                    <ul className="d-flex blog-1-meta-info">
                                        <li><i className="icon-12"></i>Admin</li>
                                        {/* <li><i className="icon-13"></i>0 Comnt</li> */}
                                    </ul>
                                    <p className="blog-1-excerpt">Caring for the elderly is a universal challenge, but in India, the cultural, economic, and social dynamics create unique issues and opportunities. As the population ages, the need for effective elder care becomes increasingly pressing. Here are some common issues faced in Indian elder care and practical ways to manage them.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="blog-1-block wow fadeInLeft" >
                                <div className="blog-1-image">
                                    <Link href="/blog-ensure-quality"><img src="assets/images/resource/blog-2.svg" alt="blog2" /></Link>
                                    <div className="blog-1-date"><span>30</span> <br /> June</div>
                                </div>
                                <div className="blog-1-bottom-content alt">
                                    <h4 className="blog-1-title"><Link href="/blog-ensure-quality">How to Ensure Quality Care for Elder People</Link></h4>
                                    <ul className="d-flex blog-1-meta-info">
                                        <li><i className="icon-12"></i>Admin</li>
                                        {/* <li><i className="icon-13"></i>0 Comnt</li> */}
                                    </ul>
                                    <p className="blog-1-excerpt">Caring for the elderly is a sacred duty that demands a blend of empathy, insight, and practicality. As our beloved seniors navigate the golden years of their lives, they deserve comprehensive care that encompasses not just physical assistance, but also emotional support, social connection, and a safe environment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
