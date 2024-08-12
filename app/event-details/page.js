import React from 'react';
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Event Details">
                <div>
                    <section className="section-padding">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="service-details">
                                        <div className="service-details-image mb_60"><img src="assets/images/resource/event-17.jpg" alt=""/></div>
                                        <h2 className="service-details-title mb_20">Independent Living for Senior Couples</h2>
                                        <p className="service-details-desc mb_20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames at egestas amet feugiat laoreet sed potenti integer. Viverra at maecenas convallis condimentum egestas nunc sagittis eu. Semper faucibus facilisis vitae sollicitudin.</p>
                                        <p className="service-details-desc mb_70">Fringilla mauris magna sit elementum elit. Facilisi lacus, pharetra quam eu urna amet aenean. Nunc mattis vitae tellus bibendum a eu, nunc. Consequat commodo ac cursus in donec orci tempus. Massa sed sit faucibus neque  habitant consequat.</p>
                                        <h4 className="service-details-title2 mb_20">Event Overview</h4>
                                        <p className="service-details-desc mb_30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nunc, consequat sed aliquam tortor aliquam faucibus sed. Semper turpis tortor mi semper ornare velit morbi. Et mattis viverra aenean varius amet sed viverra. Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio. Morbi rhoncus ut pellentesque quis enim donec nec duis.</p>
                                        <p className="service-details-desc mb_60">Scelerisque eget sodales ultrices consectetur malesuada iaculis. Quis in tellus consequat massa eget faucibus tortor ultrices fringilla. Sapien at mi et pulvinar blandit mauris interdum gravida. Etiam magna dignissim leo placerat.</p>
                                        <div className="row mb_30">
                                            <div className="col-md-6">
                                                <div className="service-details-image mb_30">
                                                    <img src="assets/images/resource/event-18.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="service-details-image mb_30">
                                                    <img src="assets/images/resource/event-19.jpg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="service-details-title2 mb_20">Living Benefits</h4>
                                        <p className="service-details-desc mb_30">Mauris celerisque eget sodales ultrices consectetur malesuada iaculis. Quis in tellus consequat massa eget faucibus tortor ultrices fringilla. Sapien at mi et pulvinar blandit mauris interdum gravida. Etiam magna dignissim leo placerat.</p>
                                        <ul className="service-details-lsit mb_30">
                                            <li>Holiday Trash & Recycling</li>
                                            <li>Things To Do In Govarnex</li>
                                            <li>Rent a Picnic Shelter</li>
                                            <li>Contact City Action Center</li>
                                        </ul>
                                        <h4 className="service-details-title2 mb_20">Financial Benefits</h4>
                                        <p className="service-details-desc mb_50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nunc, consequat sed aliquam tortor aliquam faucibus sed. Semper turpis tortor mi semper ornare velit morbi. Et mattis viverra aenean varius amet sed viverra. Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio. Morbi rhoncus ut pellentesque quis enim donec nec duis.</p> 
                                        <div className="service-details-map mb-30">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3071.2910802067827!2d90.45905169331171!3d23.691532202989123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1577214205224!5m2!1sen!2sbd"
                                                width="600"
                                                height="390"
                                                style={{ border: '0', width: '100%' }}
                                                allowFullScreen=""
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 ps-lg-60">
                                    <div className="event-info-widget">
                                        <h4 className="event-info-widget-title">Living Options</h4>
                                        <div className="event-info-widget-icon-box-wrap">
                                            <div className="event-info-widget-icon-box hvr-zoom-2-wrap d-flex">
                                                <div className="event-info-widget-icon-box-icon hvr-zoom-2 hvr-zoom-2-dark"><i className="icon-45"></i></div>
                                                <div className="event-info-widget-icon-box-content">
                                                    <h4 className="event-info-widget-icon-box-title mb_10">Start Time:</h4>
                                                    <p className="event-info-widget-icon-box-desc">17 Sep, 2022 - 21 Sep, 2013</p>
                                                </div>
                                            </div>
                                            <div className="event-info-widget-icon-box hvr-zoom-2-wrap d-flex">
                                                <div className="event-info-widget-icon-box-icon hvr-zoom-2 hvr-zoom-2-dark"><i className="icon-45"></i></div>
                                                <div className="event-info-widget-icon-box-content">
                                                    <h4 className="event-info-widget-icon-box-title mb_10">End Time:</h4>
                                                    <p className="event-info-widget-icon-box-desc">17 Sep, 2022 - 21 Sep, 2013</p>
                                                </div>
                                            </div>
                                            <div className="event-info-widget-icon-box hvr-zoom-2-wrap d-flex">
                                                <div className="event-info-widget-icon-box-icon hvr-zoom-2 hvr-zoom-2-dark"><i className="icon-46"></i></div>
                                                <div className="event-info-widget-icon-box-content">
                                                    <h4 className="event-info-widget-icon-box-title mb_10">Category:</h4>
                                                    <p className="event-info-widget-icon-box-desc">Elder Care, Nursing</p>
                                                </div>
                                            </div>
                                            <div className="event-info-widget-icon-box hvr-zoom-2-wrap d-flex">
                                                <div className="event-info-widget-icon-box-icon hvr-zoom-2 hvr-zoom-2-dark"><i className="icon-47"></i></div>
                                                <div className="event-info-widget-icon-box-content">
                                                    <h4 className="event-info-widget-icon-box-title mb_10">Location:</h4>
                                                    <p className="event-info-widget-icon-box-desc mb-0">Flat 20, Reynolds Neck, North <br/> Helenaville.</p>
                                                </div>
                                            </div>
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