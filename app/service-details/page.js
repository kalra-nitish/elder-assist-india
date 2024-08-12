

import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Service Details">
                
                <section className="section-padding">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-4 pe-lg-60">
                                <div className="category-widget">
                                    <h4 className="category-widget-title">All Services</h4>
                                    <ul className="category-widget-list">
                                        <li><Link href="/assisted-living">Assisted Living <i className="icon-40"></i></Link></li>
                                        <li className="active"><Link href="/resident-care">Resident Care <i className="icon-40"></i></Link></li>
                                        <li><Link href="/medical-health">Medicale &amp; Health <i className="icon-40"></i></Link></li>
                                        <li><Link href="/nursing-care">Nursing Care <i className="icon-40"></i></Link></li>
                                        <li><Link href="/personal-care">Personal Care <i className="icon-40"></i></Link></li>
                                        <li><Link href="/memory-care">Memory Care <i className="icon-40"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="contact-widget">
                                    <h4 className="contact-widget-title">Do You Need <br /> Any <span>Help?</span></h4>
                                    <div className="contact-widget-icon"><i className="icon-41"></i></div>
                                    <div className="contact-widget-bottom-info">
                                        <p className="contact-widget-mail"><Link href="mailto:example@lovegiver.com">example@lovegiver.com</Link></p>
                                        <h3 className="contact-widget-phone"><Link href="tel:(+91) 333 666 0021">(+91) 333 666 0021</Link></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="service-details">
                                    <div className="service-details-image mb_60"><img src="assets/images/resource/service-7.jpg" alt="" /></div>
                                    <h2 className="service-details-title mb_20">Resident Care</h2>
                                    <p className="service-details-desc mb_20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames at egestas amet feugiat laoreet sed potenti integer. Viverra at maecenas convallis condimentum egestas nunc sagittis eu. Semper faucibus facilisis vitae sollicitudin.</p>
                                    <p className="service-details-desc mb_70">Fringilla mauris magna sit elementum elit. Facilisi lacus, pharetra quam eu urna amet aenean. Nunc mattis vitae tellus bibendum a eu, nunc. Consequat commodo ac cursus in donec orci tempus. Massa sed sit faucibus neque  habitant consequat.</p>
                                    <div className="row mb_30">
                                        <div className="col-md-6">
                                            <h4 className="service-details-title2 mb_15">Overview</h4>
                                            <p className="service-details-desc mb_20">Mauris magna sit elementum elit. Facilis etra lacusacphar etra quam eu urna amet aenean Nunc mattis vitae tellus bibendum.</p>
                                            <ul className="service-details-lsit mb_30">
                                                <li>Holiday Trash &amp; Recycling</li>
                                                <li>Things To Do In Govarnex</li>
                                                <li>Rent a Picnic Shelter</li>
                                                <li>Contact City Action Center</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="service-details-image mb_30">
                                                <img src="assets/images/resource/service-8.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="service-details-title2 mb_20">Benefits</h4>
                                    <p className="service-details-desc mb_30">Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames at egestas amet feugiat laoreet sed potenti integer.</p>
                                    <div className="row mb_40">
                                        <div className="col-md-6">
                                            <div className="service-details-icon-box hvr-zoom-2-wrap d-flex">
                                                <div className="service-details-icon-box-icon hvr-zoom-2 hvr-zoom-2-dark"><i className="icon-42"></i></div>
                                                <div className="service-details-icon-box-content">
                                                    <h4 className="service-details-icon-box-title mb_10">Hospice Care</h4>
                                                    <p className="service-details-icon-box-desc">Mauris magna sit elementum facilis <br />
                                                        etra lacusacphar.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="service-details-icon-box hvr-zoom-2-wrap d-flex">
                                                <div className="service-details-icon-box-icon hvr-zoom-2 hvr-zoom-2-dark"><i className="icon-42"></i></div>
                                                <div className="service-details-icon-box-content">
                                                    <h4 className="service-details-icon-box-title mb_10">Hospice Care</h4>
                                                    <p className="service-details-icon-box-desc">Mauris magna sit elementum facilis <br /> etra lacusacphar.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="service-details-title2 mb_25">Download Resources</h4>
                                    <div className="service-details-download-wrap mb_20 d-flex align-items-center justify-content-between">
                                        <div className="d-flex">
                                            <div className="service-details-download-wrap-icon"><i className="icon-44"></i></div>
                                            <div className="service-details-download-wrap-content flex-grow-1">
                                                <h5 className="service-details-download-wrap-title">Company Briefing Update for the Year</h5>
                                                <p className="service-details-download-wrap-info">Pdf(160kb)</p>
                                            </div>
                                        </div>
                                        <div className="link-btn"><Link href="#" className="service-details-download-wrap-btn">Download</Link></div>
                                    </div>
                                    <div className="service-details-download-wrap mb_20 d-flex align-items-center justify-content-between">
                                        <div className="d-flex">
                                            <div className="service-details-download-wrap-icon"><i className="icon-44"></i></div>
                                            <div className="service-details-download-wrap-content flex-grow-1">
                                                <h5 className="service-details-download-wrap-title">Company Briefing Update for the Year</h5>
                                                <p className="service-details-download-wrap-info">Pdf(160kb)</p>
                                            </div>
                                        </div>
                                        <div className="link-btn"><Link href="#" className="service-details-download-wrap-btn">Download</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}