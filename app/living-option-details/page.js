
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Living Option Details">
                <div>
                    <section className="section-padding">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-4 pe-lg-60">
                                    <div className="category-widget">
                                        <h4 className="category-widget-title">Living Options</h4>
                                        <ul className="category-widget-list">
                                            <li><Link href="/living-option-details">Assisted Living<i className="icon-40"></i></Link></li>
                                            <li className="active"><Link href="/living-option-details">Independent Living <i className="icon-40"></i></Link></li>
                                            <li><Link href="/living-option-details">Skilled Nursing <i className="icon-40"></i></Link></li>
                                            <li><Link href="/living-option-details">Memory Care <i className="icon-40"></i></Link></li>
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
                                        <h2 className="service-details-title mb_20">Independent Living</h2>
                                        <p className="service-details-desc mb_20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames at egestas amet feugiat laoreet sed potenti integer. Viverra at maecenas convallis condimentum egestas nunc sagittis eu. Semper faucibus facilisis vitae sollicitudin. </p>
                                        <p className="service-details-desc mb_70">Fringilla mauris magna sit elementum elit. Facilisi lacus, pharetra quam eu urna amet aenean. Nunc mattis vitae tellus bibendum a eu, nunc. Consequat commodo ac cursus in donec orci tempus. Massa sed sit faucibus neque  habitant consequat.</p>
                                        <div className="service-details-image mb_60"><img src="assets/images/resource/image-9.jpg" alt="" /></div>
                                        <h4 className="service-details-title2 mb_20">Living Community</h4>
                                        <p className="service-details-desc mb_30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nunc, consequat sed aliquam tortor aliquam faucibus sed. Semper turpis tortor mi semper ornare velit morbi. Et mattis viverra aenean varius amet sed viverra. Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio. Morbi rhoncus ut pellentesque quis enim donec nec duis.</p>
                                        <p className="service-details-desc mb_60">Scelerisque eget sodales ultrices consectetur malesuada iaculis. Quis in tellus consequat massa eget faucibus tortor ultrices fringilla. Sapien at mi et pulvinar blandit mauris interdum gravida. Etiam magna dignissim leo placerat.</p>
                                        <div className="row mb_30">
                                            <div className="col-md-6">
                                                <div className="service-details-image mb_30">
                                                    <img src="assets/images/resource/service-8.jpg" alt=""/>
                                                </div>
                                            </div>
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
                                        </div>
                                        <h4 className="service-details-title2 mb_20">Living Benefits</h4>
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
                                        <h4 className="service-details-title2 mb_25">Financial Benefits</h4>
                                        <p className="service-details-icon-box-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nunc, consequat sed aliquam tortor aliquam faucibus sed. Semper turpis tortor mi semper ornare velit morbi. Et mattis viverra aenean varius amet sed viverra. Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio. Morbi rhoncus ut pellentesque quis enim donec nec duis.</p>
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