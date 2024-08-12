import Link from "next/link"

export default function Sidebar({ isSidebar, handleSidebar }) {
    return (
        <>

            <section className={`hidden-sidebar ${isSidebar ? "" : "close-sidebar"}`} style={{ right: `${isSidebar ? "0" : "-480px"}`, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>
                <div className="wrapper-box">
                    <div className="hidden-sidebar-close" onClick={handleSidebar}><span className="fal fa-times"></span></div>
                    <div className="logo"><Link href="#"><img src="assets/images/logo.png" alt=""/></Link></div>
                    <div className="content">
                        <div className="about-widget-two sidebar-widget">
                            <h3>Finding The Best Senior <br/>
                                Care Services </h3>
                            <div className="text">We denounce with righteous indignation and dislike men who we are to beguiled demoralized by the charms of pleasures that moment, so we blinded desires, that they indignations.</div>
                        </div>
                    
                        <div className="news-widget sidebar-widget">
                            <div className="widget-title">News & Updates</div>
                            <div className="post-wrapper">
                                <div className="image"><Link href="blog-details.html"><img src="assets/images/resource/blog-1.jpg" alt="" /></Link></div>
                                <div className="category">Senior Care</div>
                                <h4><Link href="blog-details.html">How to Handle Unexpected Situations on Road</Link></h4>
                            </div>
                            <div className="post-wrapper">
                                <div className="image"><Link href="blog-details.html"><img src="assets/images/resource/blog-2.jpg" alt="" /></Link></div>
                                <div className="category">Senior Care</div>
                                <h4><Link href="blog-details.html">How to Handle Unexpected Situations on Road</Link></h4>
                            </div>
                        </div>
                    
                        <div className="newsletter-widget">
                            <div className="widget-title">Newsletter Subscription</div>
                            <form action="#">
                                <input type="email" placeholder="Enter Email Address" />
                                <button className="btn-1">Subscribe Us <i className="flaticon-right-arrow-1"></i><span></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
