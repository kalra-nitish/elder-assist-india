'use client'
import Link from "next/link"

export default function News() {
    return (
        <>
            <section className="blog-1-section theme-gray-bg">
                <div className="auto-container">
                    <div className="section_heading text-center mb_60">
                        <span className="section_heading_title_small">Articles</span>
                        <h2 className="section_heading_title_big">Get More Update For <br />LoveGiver</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-1-block wow fadeInLeft" >
                                <div className="blog-1-image">
                                    <Link href="/blog-details"><img src="assets/images/resource/blog-1.jpg" alt="" /></Link>
                                    <div className="blog-1-date"><span>15 </span><br /> APRIL</div>
                                </div>
                                <div className="blog-1-bottom-content">
                                    <h4 className="blog-1-title"><Link href="/blog-details">How to Handle Unexpected Situations on Road</Link></h4>
                                    <ul className="d-flex blog-1-meta-info">
                                        <li><i className="icon-12"></i>Admin</li>
                                        <li><i className="icon-13"></i>0 Comnt</li>
                                    </ul>
                                    <p className="blog-1-excerpt">Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                    <div className="blog-1-link-btn"><Link href="/blog-details" className="btn-1 btn-small">Read More <span></span></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-1-block wow fadeInLeft" >
                                <div className="blog-1-image">
                                    <Link href="/blog-details"><img src="assets/images/resource/blog-2.jpg" alt="" /></Link>
                                    <div className="blog-1-date"><span>15</span> <br /> APRIL</div>
                                </div>
                                <div className="blog-1-bottom-content">
                                    <h4 className="blog-1-title"><Link href="/blog-details">Inspire Design Decisions Was With Giovanni Pintorie</Link></h4>
                                    <ul className="d-flex blog-1-meta-info">
                                        <li><i className="icon-12"></i>Admin</li>
                                        <li><i className="icon-13"></i>0 Comnt</li>
                                    </ul>
                                    <p className="blog-1-excerpt">Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                    <div className="blog-1-link-btn"><Link href="/blog-details" className="btn-1 btn-small">Read More <span></span></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInLeft" >
                            <div className="blog-1-block">
                                <div className="blog-1-image">
                                    <Link href="/blog-details"><img src="assets/images/resource/blog-3.jpg" alt="" /></Link>
                                    <div className="blog-1-date"><span>15 </span><br /> APRIL</div>
                                </div>
                                <div className="blog-1-bottom-content">
                                    <h4 className="blog-1-title"><Link href="/blog-details">5 Ways To Help Seniors Fight Loneliness</Link></h4>
                                    <ul className="d-flex blog-1-meta-info">
                                        <li><i className="icon-12"></i>Admin</li>
                                        <li><i className="icon-13"></i>0 Comnt</li>
                                    </ul>
                                    <p className="blog-1-excerpt">Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                    <div className="blog-1-link-btn"><Link href="/blog-details" className="btn-1 btn-small">Read More <span></span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
