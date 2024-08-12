import Link from "next/link"
export default function Team1() {
    return (
        <>
            <section className="team-1-section">
                <div className="auto-container">
                    <div className="team-1-wrapper">
                        <div className="section_heading text-center mb_70">
                            <span className="section_heading_title_small">Exclusive Team</span>
                            <h2 className="section_heading_title_big">We Have A Professional Team <br /> Members</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="team-1-block">
                                    <div className="team-1-image">
                                        <div className="team-1-shape"></div>                                
                                        <div className="team-1-image-wrap"><img src="assets/images/resource/team-1.jpg" alt="" /></div>
                                        <div className="team-1-share-icon-area">
                                            <ul className="team-1-social-icon">
                                                <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                            <div className="team-1-share-icon"><i className="icon-11"></i></div>
                                        </div>
                                    </div>
                                    <h4 className="team-1-title">Wade Warren</h4>
                                    <p className="team-1-designaiton">Volunteer</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-1-block">
                                    <div className="team-1-image">
                                        <div className="team-1-shape"></div>                                
                                        <div className="team-1-image-wrap"><img src="assets/images/resource/team-2.jpg" alt="" /></div>
                                        <div className="team-1-share-icon-area">
                                            <ul className="team-1-social-icon">
                                                <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                            <div className="team-1-share-icon"><i className="icon-11"></i></div>
                                        </div>
                                    </div>
                                    <h4 className="team-1-title">Guy Hawkins</h4>
                                    <p className="team-1-designaiton">Volunteer</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-1-block">
                                    <div className="team-1-image">
                                        <div className="team-1-shape"></div>                                
                                        <div className="team-1-image-wrap"><img src="assets/images/resource/team-3.jpg" alt="" /></div>
                                        <div className="team-1-share-icon-area">
                                            <ul className="team-1-social-icon">
                                                <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                            <div className="team-1-share-icon"><i className="icon-11"></i></div>
                                        </div>
                                    </div>
                                    <h4 className="team-1-title">Bessie Cooper</h4>
                                    <p className="team-1-designaiton">Volunteer</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-1-block">
                                    <div className="team-1-image">
                                        <div className="team-1-shape"></div>                                
                                        <div className="team-1-image-wrap"><img src="assets/images/resource/team-4.jpg" alt="" /></div>
                                        <div className="team-1-share-icon-area">
                                            <ul className="team-1-social-icon">
                                                <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                            <div className="team-1-share-icon"><i className="icon-11"></i></div>
                                        </div>
                                    </div>
                                    <h4 className="team-1-title">Devon Lane</h4>
                                    <p className="team-1-designaiton">Volunteer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
