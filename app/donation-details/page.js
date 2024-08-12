
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Donation Details">
                <div>
                    <section className="section-padding">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="service-details">
                                        <div className="service-details-image"><img src="assets/images/resource/image-14.jpg" alt=""/></div>
                                        <div className="fundraise-1-content alt-2 mb_70">
                                            <div className="fundraise-1-skill-item">
                                                <div className="fundraise-1-skill-bar">
                                                    <div className="progressbar-1-outer">
                                                        <div className="progressbar-1-inner progress-line" data-width="85">
                                                            <div className="progressbar-1-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="85">85</span>%</div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fundraise-1-price d-flex align-items-center justify-content-between">
                                                <div className="fundraise-1-raise">$5,020 Raised</div>
                                                <div className="fundraise-1-target">$8,000 Target</div>
                                            </div>
                                        </div>
                                        <h2 className="service-details-title mb_20">Specialist Nursing Care</h2>
                                        <p className="service-details-desc mb_20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit porta blandit lobortis natoque duis. Sit ac cursus feugiat mattis enim. Elit in enim at purus in congue ornare. Fringilla urna sed et aliquet  nec mi sed ut risus. Interdum in ac lectus fringilla. Non consequat, sodales amet vestibulum eget eros tortor. Commodo volutpat mollis at commodo feugiat facilisis amet. Lacinia sit enim consequat in. Urna  risus, neque, pellentesque placerat sapien cras mauris fermentum.</p>
                                        <p className="service-details-desc mb_40">Gravida blandit elementum aliquet erat in tortor, pulvinar interdum rhoncus. Malesuada vitae mauris eu aliquam. Fames eget velit duis pellentesque eu tincidunt semper id et. At elementum aenean cursus adipiscing nulla sed.</p>
                                        <ul className="service-details-lsit mb_50">
                                            <li>Holiday Trash & Recycling</li>
                                            <li>Things To Do In Govarnex</li>
                                            <li>Rent a Picnic Shelter</li>
                                        </ul>
                                        <div className="row mb_30">
                                            <div className="col-md-6">
                                                <div className="service-details-image mb_30">
                                                    <img src="assets/images/resource/event-18.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h4 className="service-details-title2 mb_20">Overview</h4>
                                                <p className="service-details-desc mb_30">Mauris magna sit elementum elit. Facilis etra lacusacphar etra quam eu urna amet aenean Nunc mattis vitae tellus bibendum.</p>
                                                <ul className="service-details-lsit mb_30">
                                                    <li>Holiday Trash & Recycling</li>
                                                    <li>Things To Do In Govarnex</li>
                                                    <li>Rent a Picnic Shelter</li>
                                                    <li>Contact City Action Center</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4 className="service-details-title2 mb_20">Your Donation</h4>
                                        <div className="form-alt">
                                            <form className="mb_65">
                                                <input type="text" placeholder="Your Amount"/>
                                            </form>
                                        </div>
                                        <h4 className="service-details-title2 mb_20">Personal Info</h4>
                                        <div className="form-alt-2 mb_30">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>First name*</label>
                                                        <div className="form-group"><input type="text"/></div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label>Last name*</label>
                                                        <div className="form-group"><input type="text"/></div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label>Email</label>
                                                        <div className="form-group"><input type="email"/></div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label>Address</label>
                                                        <div className="form-group"><input type="text"/></div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label>City</label>
                                                        <div className="form-group"><input type="text"/></div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label>Country</label>
                                                        <div className="form-group"><input type="text"/></div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-gorup"><button className="btn-1">Donate Now <span></span></button></div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 ps-lg-60">
                                    <div className="appointment-form-widget">
                                        <h4 className="event-info-widget-title">Appointment</h4>
                                        <div className="form-alt-2">
                                            <form>
                                                <div className="form-group"><input type="text" placeholder="Name"/></div>
                                                <div className="form-group"><input type="email" placeholder="Email"/></div>
                                                <div className="form-group"><input type="text" placeholder="Phone"/></div>
                                                <div className="form-group"><textarea type="text" placeholder="Message"></textarea></div>
                                                <div className="form-gorup"><button className="btn-1">Submit Now <span></span></button></div>
                                            </form>
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