
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Volunteer Details">
                
                <section className="section-padding">
                    <div className="auto-container">
                        <div className="single-team-info mb_95">
                            <div className="row no-gutters align-items-center">
                                <div className="col-lg-6">
                                    <div className="single-team-info-image"><img src="assets/images/resource/team-13.jpg" alt=""/></div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-team-info-content">
                                        <h2 className="fs_40">Bessie Cooper</h2>
                                        <p className="single-team-info-designation mb_25">Nursing</p>
                                        <p className="single-team-info-desc mb_30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Semper sagittis dolor aliquet quam feugiat nisi a ultrices <br/> feugiat. Viverra facilisi turpis eget tempor. Mattis risus amet <br/> euismod eleifend. Proin ut eget sagittis mi quis viverra.</p>
                                        <ul className="single-team-info-list">
                                            <li><span>Expertise:</span> Strategy, Leadership</li>
                                            <li><span>Experience: </span> 20 Years</li>
                                            <li><span>Email: </span> bessiecooper@gmail.com</li>
                                            <li><span>Phone: </span> (+91) 333 666 0021</li>
                                        </ul>
                                        <ul className="single-team-info-social-icon d-flex align-items-center">
                                            <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 className="fs_28 mb_30">Bessie Cooper Biography</h4>
                        <p className="mb_30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero turpis blandit blandit mauris aliquam condimentum quam suspendisse. Sit bibendum adipiscing enim lacus quis. A nec accumsan aliquam magnis orci. Dui amet scelerisque lectus commodo iaculis semper. Arcu eget vestibulum amet faucibus eugi augue Odio viverra odio tempor porttitor orci, gravida orci consequat. Aliquet aliquet nibh sit massa. Molestie proin facilisis ac vulputate sed quam et, arcu mattis. In egestas rutrum pharetra sit dictum augue. </p>
                        <p className="mb_80">Imperdiet consectetur gravida vel rutrum. Tempus, mattis sit massa lacus morbi. Feugiat aliquam aenean sagittis nunc neque sit. Nec lorem tincidunt arcu nunc ac accumsan risus felis in. Mi ornare convallis tincidunt maecenas dui auctor cursus platea velit. Augue eget turpis facilisi dui vel at faucibus diam. Semper non vitae elit mattis eu sodales. Sapien pellentesque sagittis enim.</p>
                        <div className="row">
                            <div className="col-lg-4 pe-lg-4">
                                <h4 className="fs_28 mb_20">Volunteer Skills</h4>
                                <p className="mb_30">Consectetur adipiscing elit. Semper sagittis <br/> dolor aliquet quam feugiat ultrices feugiat <br/> Viverra facilisi turpis.</p>
                                <div className="skill-1-progressbar-item">
                                    <p className="skill-1-progressbar-title">Donation</p>
                                    <div className="progressbar-1-outer">
                                        <div className="progressbar-2-inner progress-line" data-width="75">
                                            <div className="progressbar-1-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="75">75</span>%</div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-1-progressbar-item">
                                    <p className="skill-1-progressbar-title">Medical Help</p>
                                    <div className="progressbar-1-outer">
                                        <div className="progressbar-3-inner progress-line" data-width="90">
                                            <div className="progressbar-1-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="90">90</span>%</div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-1-progressbar-item">
                                    <p className="skill-1-progressbar-title">Poor Education</p>
                                    <div className="progressbar-1-outer">
                                        <div className="progressbar-4-inner progress-line" data-width="80">
                                            <div className="progressbar-1-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="80">80</span>%</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 pe-lg-4">
                                <h4 className="fs_28 mb_20">Education</h4>
                                <p className="mb_20">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Libero</p>
                                <ul className="single-team-info-list2">
                                    <li>
                                        <h5>University of Iowa</h5>
                                        <p>Master's degree - Macroeconomics <br/> <span>2012 - 2013</span></p>
                                    </li>
                                    <li>
                                        <h5>University of Chicago</h5>
                                        <p>Honours - Macroeconomics <br/> <span>2008 - 2011</span></p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 pe-lg-4">
                                <h4 className="fs_28 mb_20">Experience</h4>
                                <p className="mb_20">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Libero</p>
                                <ul className="single-team-info-list2">
                                    <li>
                                        <h5>Jr. Graphic Designer</h5>
                                        <p>Arpin Van Lines <br/> <span>Jun 2017-Sep 2019</span></p>
                                    </li>
                                    <li>
                                        <h5>Sr. UI/UX Designer</h5>
                                        <p>Berkery MandASoft <br/> <span>Jun 2019-Present</span></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}