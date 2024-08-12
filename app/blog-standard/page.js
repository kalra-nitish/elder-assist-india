
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Standard">
                <div>
                    <section className="blog-1-section">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="blog-1-block standard-post wow fadeInLeft">
                                        <div className="blog-1-image">
                                            <Link href="/blog-standard"><img src="assets/images/resource/blog-10.jpg" alt=""/></Link>
                                            <div className="blog-1-date"><span>15 </span><br/> APRIL</div>
                                        </div>
                                        <div className="blog-1-bottom-content alt">
                                            <h4 className="blog-1-title"><Link href="/blog-standard">How to Handle Unexpected Situations <br/> on Road</Link></h4>
                                            <ul className="d-flex blog-1-meta-info">
                                                <li><i className="icon-12"></i>Admin</li>
                                                <li><i className="icon-13"></i>0 Comnt</li>
                                            </ul>
                                            <p className="blog-1-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi felis arcu maecenas pharetra, elementum orci orci. In tincidunt est viverra id. In habitant turpis pretium habitasse sapien, hendrerit. Consectetur auctor etiam purus senectus.</p>
                                        </div>
                                    </div>
                                    <div className="blog-1-block standard-post wow fadeInLeft">
                                        <div className="blog-1-image">
                                            <Link href="/blog-standard"><img src="assets/images/resource/blog-11.jpg" alt=""/></Link>
                                            <div className="blog-1-date"><span>15</span> <br/> APRIL</div>
                                        </div>
                                        <div className="blog-1-bottom-content alt">
                                            <h4 className="blog-1-title"><Link href="/blog-standard">Inspire Design Decisions Was With <br/> Giovanni Pintorie</Link></h4>
                                            <ul className="d-flex blog-1-meta-info">
                                                <li><i className="icon-12"></i>Admin</li>
                                                <li><i className="icon-13"></i>0 Comnt</li>
                                            </ul>
                                            <p className="blog-1-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi felis arcu maecenas pharetra, elementum orci orci. In tincidunt est viverra id. In habitant turpis pretium habitasse sapien, hendrerit. Consectetur auctor etiam purus senectus.</p>
                                        </div>
                                    </div>
                                    <div className="blog-1-block standard-post">
                                        <div className="blog-1-image">
                                            <Link href="/blog-standard"><img src="assets/images/resource/blog-12.jpg" alt=""/></Link>
                                            <div className="blog-1-date"><span>15 </span><br/> APRIL</div>
                                        </div>
                                        <div className="blog-1-bottom-content alt">
                                            <h4 className="blog-1-title"><Link href="/blog-standard">5 Ways To Help Seniors Fight <br/> Loneliness</Link></h4>
                                            <ul className="d-flex blog-1-meta-info">
                                                <li><i className="icon-12"></i>Admin</li>
                                                <li><i className="icon-13"></i>0 Comnt</li>
                                            </ul>
                                            <p className="blog-1-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi felis arcu maecenas pharetra, elementum orci orci. In tincidunt est viverra id. In habitant turpis pretium habitasse sapien, hendrerit. Consectetur auctor etiam purus senectus.</p>
                                        </div>
                                    </div>
                                    <div className="blog-1-block standard-post">
                                        <div className="blog-1-image">
                                            <Link href="/blog-standard"><img src="assets/images/resource/blog-13.jpg" alt=""/></Link>
                                            <div className="blog-1-date"><span>15 </span><br/> APRIL</div>
                                        </div>
                                        <div className="blog-1-bottom-content alt">
                                            <h4 className="blog-1-title"><Link href="/blog-standard">7 steps to turn event attendees into <br/> donors using social media</Link></h4>
                                            <ul className="d-flex blog-1-meta-info">
                                                <li><i className="icon-12"></i>Admin</li>
                                                <li><i className="icon-13"></i>0 Comnt</li>
                                            </ul>
                                            <p className="blog-1-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi felis arcu maecenas pharetra, elementum orci orci. In tincidunt est viverra id. In habitant turpis pretium habitasse sapien, hendrerit. Consectetur auctor etiam purus senectus.</p>
                                        </div>
                                    </div>
                                    <div className="blog-1-block standard-post">
                                        <div className="blog-1-image">
                                            <Link href="/blog-standard"><img src="assets/images/resource/blog-14.jpg" alt=""/></Link>
                                            <div className="blog-1-date"><span>15 </span><br/> APRIL</div>
                                        </div>
                                        <div className="blog-1-bottom-content alt">
                                            <h4 className="blog-1-title"><Link href="/blog-standard">How Family Photo Albums Connect <br/> Seniors and Caregivers</Link></h4>
                                            <ul className="d-flex blog-1-meta-info">
                                                <li><i className="icon-12"></i>Admin</li>
                                                <li><i className="icon-13"></i>0 Comnt</li>
                                            </ul>
                                            <p className="blog-1-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi felis arcu maecenas pharetra, elementum orci orci. In tincidunt est viverra id. In habitant turpis pretium habitasse sapien, hendrerit. Consectetur auctor etiam purus senectus.</p>
                                        </div>
                                    </div>
                                    <ul className="styled-pagination">
                                        <li><Link href="#" className="active">1</Link></li>
                                        <li><Link href="#">2</Link></li>
                                        <li><Link href="#"><span className="fa fa-angle-right"></span></Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 ps-lg-60">
                                    <div className="tp-default-widget">
                                        <div className="search-widget">
                                            <form>
                                                <input type="search" placeholder="Search..."/>
                                                <button type="submit"><i className="icon-52"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="tp-default-widget alt">
                                        <h4 className="category-widget-title">Categories</h4>
                                        <ul className="category-widget-list">
                                            <li><Link href="/blog-standard">Eldercare <i className="icon-40"></i></Link></li>
                                            <li className="active"><Link href="/blog-standard">Home Care <i className="icon-40"></i></Link></li>
                                            <li><Link href="/blog-standard">Insurance <i className="icon-40"></i></Link></li>
                                            <li><Link href="/blog-standard">Memory Care <i className="icon-40"></i></Link></li>
                                            <li><Link href="/blog-standard">Nursing <i className="icon-40"></i></Link></li>
                                            <li><Link href="/blog-standard">Senior Care <i className="icon-40"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="tp-default-widget alt">
                                        <h4 className="category-widget-title">Recent Article</h4>
                                        <div className="recent-post-widget">
                                            <div className="single-recent-post d-flex">
                                                <div className="single-recent-post-feature-image mr_20"><img src="assets/images/resource/blog-15.jpg" alt=""/></div>
                                                <div className="single-recent-post-content">
                                                    <h5 className="single-recent-post-title mb_10 fs_16"><Link href="/blog-standard">Project Concepts or <br/>
                                                        Related Queries</Link></h5>
                                                    <p className="single-recent-post-date">Apr 17, 2022</p>
                                                </div>
                                            </div>
                                            <div className="single-recent-post d-flex">
                                                <div className="single-recent-post-feature-image mr_20"><img src="assets/images/resource/blog-16.jpg" alt=""/></div>
                                                <div className="single-recent-post-content">
                                                    <h5 className="single-recent-post-title mb_10 fs_16"><Link href="/blog-standard">To Improve Your <br/> Express Application</Link></h5>
                                                    <p className="single-recent-post-date">Apr 17, 2022</p>
                                                </div>
                                            </div>
                                            <div className="single-recent-post d-flex">
                                                <div className="single-recent-post-feature-image mr_20"><img src="assets/images/resource/blog-17.jpg" alt=""/></div>
                                                <div className="single-recent-post-content">
                                                    <h5 className="single-recent-post-title mb_10 fs_16"><Link href="/blog-standard">Ensure that Copies of <br/> Documents</Link></h5>
                                                    <p className="single-recent-post-date">Apr 17, 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-default-widget alt">
                                        <h4 className="category-widget-title">Photo Gallery</h4>
                                        <div className="gallery-widget d-flex flex-wrap">
                                            <div className="single-gallery-image">
                                                <Link href="assets/images/resource/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/resource/project-6.jpg" alt=""/></Link>
                                            </div>
                                            <div className="single-gallery-image">
                                                <Link href="assets/images/resource/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/resource/project-7.jpg" alt=""/></Link>
                                            </div>
                                            <div className="single-gallery-image">
                                                <Link href="assets/images/resource/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/resource/project-8.jpg" alt=""/></Link>
                                            </div>
                                            <div className="single-gallery-image">
                                                <Link href="assets/images/resource/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/resource/project-9.jpg" alt=""/></Link>
                                            </div>
                                            <div className="single-gallery-image">
                                                <Link href="assets/images/resource/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/resource/project-10.jpg" alt=""/></Link>
                                            </div>
                                            <div className="single-gallery-image">
                                                <Link href="assets/images/resource/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/resource/project-11.jpg" alt=""/></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-default-widget alt">
                                        <h4 className="category-widget-title">Popular Tags</h4>
                                        <div className="tag-cloud-widget">
                                            <ul className="tag-cloud-widget-list d-flex flex-wrap">
                                                <li><Link href="/blog-standard">Caring</Link></li>
                                                <li><Link href="/blog-standard">Love & Care</Link></li>
                                                <li><Link href="/blog-standard">Old</Link></li>
                                                <li><Link href="/blog-standard">Nurseing</Link></li>
                                                <li><Link href="/blog-standard">Senior</Link></li>
                                                <li><Link href="/blog-standard">Team</Link></li>
                                                <li><Link href="/blog-standard">Community</Link></li>
                                                <li><Link href="/blog-standard">Elder</Link></li>
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