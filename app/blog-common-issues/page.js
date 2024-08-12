
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Indian Elder Care: Common Issues and How to Manage Them">
                <div>
                    <section className="blog-1-section">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="blog-1-block mb-0">
                                        <div className="blog-1-image">
                                            <img src="assets/images/resource/blog-1.svg" alt="blog1"/>
                                            <div className="blog-1-date"><span>30 </span><br/> JUNE</div>
                                        </div>
                                        <div className="blog-1-bottom-content alt mb_80">
                                            <h4 className="blog-1-title">Indian Elder Care: Common Issues and How to Manage Them</h4>
                                            <ul className="d-flex blog-1-meta-info">
                                                <li><i className="icon-12"></i>Admin</li>
                                            </ul> 
                                            <h4 className="fs_28 mb_20">The Growing Need for Elder Care in India</h4>   
                                            <ul className="list-style-one mb_40">
                                                <li>With people’s routines getting increasingly hectic with each passing day, the elders need more care and attention now than ever before. The National Policy for Older Persons was established in 1999 by the Ministry of Statistics and Programme Implementation and the National Statistics Office of the Government of India. The older adult population has increased from 24.7 million in the 1961 census to a projected 137.9 million and 158.7 million for the 2022 and 2025 censuses, respectively, accounting for 11.1% of the overall population.
                                                </li>
                                                <li>The senior citizens in the country, in their most lonely time, are left to fend for themselves in their later years. In 1961, the older adult population in India was 24.7 million. According to the Census undertaken in 2011, 8% of India’s total population (100 million) was aged above 60.</li>
                                                <li>In India, 85% of the elderly are living with family, 8% are living with spouse only, 6% are living alone whereas 2% are living with their relatives, revealed the annual report prepared by HelpAge India in 2018.</li>
                                            </ul>
                                            <h4 className="fs_28 mb_20">Common Issues in Indian Elder Care</h4>
                                            <ul className="list-style-one mb_40">
                                                <li><b>Health Problems</b>: Chronic illnesses like diabetes, hypertension, arthritis, and heart diseases are prevalent among the elderly. Mental health issues, including depression and dementia, also pose significant challenges.</li>
                                                <li><b>Financial Dependence</b>: Many elderly individuals in India are financially dependent on their children due to a lack of savings and inadequate pension schemes. This dependency can lead to stress and conflicts within families.</li>
                                                <li><b>Loneliness and Isolation</b>: With the rise of nuclear families and the migration of younger generations to urban areas or abroad, many elderly people are left alone, leading to feelings of loneliness and social isolation.</li>
                                                <li><b>Inadequate Healthcare Services</b>: Access to quality healthcare remains a significant concern, particularly in rural areas. Many elderly individuals struggle to receive timely and effective medical attention.</li>
                                                <li><b>Crime Against Aged Persons</b>: This age group is vulnerable to crimes including murder, attempted murder, bodily harm, deceit, robbery, dacoity, and extortion.</li>
                                            </ul>
                                            <h4 className="fs_28 mb_20">Managing Elder Care Effectively</h4>
                                            <ul className="list-style-one mb_40">
                                                <li><b>Regular Health Check-ups</b>: Encourage routine medical examinations to monitor and manage chronic conditions. Preventive healthcare and timely medical intervention can significantly improve the quality of life for the elderly.</li>
                                                <li><b>Financial Planning</b>: Promote financial literacy and planning among the elderly. Encourage them to invest in pension schemes, health insurance, and savings plans early on. For those already dependent, families should strive to create a supportive financial environment.
                                                </li>
                                                <li><b>Community Engagement</b>: Combat loneliness by encouraging participation in community groups and activities. Senior citizen clubs, religious gatherings, and local events can provide much-needed social interaction and a sense of belonging.
                                                </li>
                                                <li><b>Accessible Healthcare</b>: Advocate for better healthcare infrastructure, especially in rural areas. Telemedicine can play a crucial role in providing remote consultations and reducing the need for frequent travel.
                                                </li>
                                                <li><b>Awareness and Support for Elder Abuse</b>: Educate the elderly and their families about the signs of abuse and the resources available for help. Establish helplines and support groups to provide immediate assistance and counselling.
                                                </li>
                                            </ul>    
                                        
                                            <p className="mb_40">Elder care in India requires a compassionate and comprehensive approach. By addressing health, financial, social, and safety concerns, we can ensure our elders live with dignity and respect, honouring their invaluable contributions to society.</p>
                                                         
                                        </div>
                                        {/* <div className="comments-area">
                                            <h4 className="fs_28 mb_30">2 Comments</h4>
                                            
                                            <div className="comment-box">
                                                <div className="comment">
                                                    <div className="author-thumb"><img src="assets/images/resource/testimonial-5.jpg" alt=""/></div>
                                                    <div className="comment-inner">
                                                        <h5>Mike Hardson</h5>
                                                        <div className="text">Lorem ipsum is simply free text used by copytyping eque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                                                        <Link className="reply-comment-btn" href="#"> Reply</Link>
                                                    </div>
                                                </div>
                                            </div>        
                                           
                                            <div className="comment-box">
                                                <div className="comment">
                                                    <div className="author-thumb"><img src="assets/images/resource/testimonial-7.jpg" alt=""/></div>
                                                    <div className="comment-inner">
                                                        <h5>Sarah Albert</h5>
                                                        <div className="text">Lorem ipsum is simply free text used by copytyping eque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                                                        <Link className="reply-comment-btn" href="#"> Reply</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* <div className="comment-form form-alt-2">  
                                            <h4 className="fs_28 mb_30">Leave a Comments</h4>
                                            <form method="post">
                                                <div className="row row-10">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="text" name="username" placeholder="Name*" required=""/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="email" name="email" placeholder="Email*" required=""/>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <textarea name="message" placeholder="Write Message"></textarea>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <button className="btn-1" type="submit" name="submit-form">Post Comment<span></span></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <div className="col-lg-4 ps-lg-60">
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
                                            <li><Link href="/blog-grid">Eldercare <i className="icon-40"></i></Link></li>
                                            <li className="active"><Link href="/blog-details">Home Care <i className="icon-40"></i></Link></li>
                                            <li><Link href="/blog-grid">Insurance <i className="icon-40"></i></Link></li>
                                            <li><Link href="/blog-grid">Memory Care <i className="icon-40"></i></Link></li>
                                            <li><Link href="/blog-grid">Nursing <i className="icon-40"></i></Link></li>
                                            <li><Link href="/blog-grid">Senior Care <i className="icon-40"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="tp-default-widget alt">
                                        <h4 className="category-widget-title">Recent Article</h4>
                                        <div className="recent-post-widget">
                                            <div className="single-recent-post d-flex">
                                                <div className="single-recent-post-feature-image mr_20"><img src="assets/images/resource/blog-15.jpg" alt=""/></div>
                                                <div className="single-recent-post-content">
                                                    <h5 className="single-recent-post-title mb_10 fs_16"><Link href="/blog-grid">Project Concepts or <br/>
                                                        Related Queries</Link></h5>
                                                    <p className="single-recent-post-date">Apr 17, 2022</p>
                                                </div>
                                            </div>
                                            <div className="single-recent-post d-flex">
                                                <div className="single-recent-post-feature-image mr_20"><img src="assets/images/resource/blog-16.jpg" alt=""/></div>
                                                <div className="single-recent-post-content">
                                                    <h5 className="single-recent-post-title mb_10 fs_16"><Link href="/blog-grid">To Improve Your <br/> Express Application</Link></h5>
                                                    <p className="single-recent-post-date">Apr 17, 2022</p>
                                                </div>
                                            </div>
                                            <div className="single-recent-post d-flex">
                                                <div className="single-recent-post-feature-image mr_20"><img src="assets/images/resource/blog-17.jpg" alt=""/></div>
                                                <div className="single-recent-post-content">
                                                    <h5 className="single-recent-post-title mb_10 fs_16"><Link href="/blog-grid">Ensure that Copies of <br/> Documents</Link></h5>
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
                                                <li><Link href="/blog-grid">Caring</Link></li>
                                                <li><Link href="/blog-grid">Love & Care</Link></li>
                                                <li><Link href="/blog-grid">Old</Link></li>
                                                <li><Link href="/blog-grid">Nurseing</Link></li>
                                                <li><Link href="/blog-grid">Senior</Link></li>
                                                <li><Link href="/blog-grid">Team</Link></li>
                                                <li><Link href="/blog-grid">Community</Link></li>
                                                <li><Link href="/blog-grid">Elder</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                            </div>            
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}