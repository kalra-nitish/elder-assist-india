import Layout from "@/components/layout/Layout";
import "public/assets/css/style.css";
import {
  AnnualCheckIcon,
  DiscountedMedicinesIcon,
  DoctorsAppointmentIcon,
  NursingHomeIcon,
  BedsideCareIcon,
  PhysiotherapyHomeIcon,
  VisionAidIcon,
  SpeechHearingAidIcon,
} from "@/public/assets/images/icons/services/index";
import Contact from "@/components/sections/contact/contact";
import CategoryWidget from "@/components/elements/CategoryWidget";
import { categories } from "@/components/variables/constants";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Medical & Health Solutions">
        <section className="section-padding">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-4 pe-lg-60">
                <CategoryWidget categories={categories} activeCategory="/medical-health" />
                <Contact />
              </div>
              <div className="col-lg-8">
                <div className="service-details">
                  <div className="service-details-image mb_60">
                    <img
                      src="assets/images/resource/medical_health_solutions.svg"
                      alt="medical-health-solutions-page"
                    />
                  </div>
                  <h2 className="service-details-title mb_20">
                    Medical &amp; Health Solutions
                  </h2>
                  <p className="service-details-desc mb_20">
                    At Elder Assist India, we are dedicated to delivering
                    personalized and comprehensive medical and healthcare
                    services directly to the homes of seniors. Our offerings are
                    carefully tailored to meet the diverse needs of the elderly,
                    combining convenience with compassionate, proactive health
                    management. From routine checkups to continuous bedside
                    care, our solutions are designed to enhance the quality of
                    life for seniors, ensuring they have access to the highest
                    quality of medical support in the comfort and safety of
                    their own homes.
                  </p>
                  <h4 className="service-details-title2 mb_20">Benefits</h4>
                  <div className="row mb_40">
                    <div className="col-md-6">
                      <div className="service-details-icon-box hvr-zoom-2-wrap d-flex">
                        <div className="service-details-icon-box-icon hvr-zoom-2 hvr-zoom-2-dark">
                          <AnnualCheckIcon
                            style={{
                              height: "38px",
                              width: "85px",
                              verticalAlign: "text-top",
                            }}
                          />
                        </div>
                        <div className="service-details-icon-box-content">
                          <h4 className="service-details-icon-box-title mb_10">
                            Annual Home Health Check-Up
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Our proactive approach ensures thorough annual
                            medical checkups at home, facilitating early
                            detection and prevention of health issues.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-details-icon-box hvr-zoom-2-wrap d-flex">
                        <div className="service-details-icon-box-icon hvr-zoom-2 hvr-zoom-2-dark">
                          <DoctorsAppointmentIcon
                            style={{
                              height: "38px",
                              width: "85px",
                              verticalAlign: "text-top",
                            }}
                          />
                        </div>
                        <div className="service-details-icon-box-content">
                          <h4 className="service-details-icon-box-title mb_10">
                            Doctors Appointment
                          </h4>
                          <p className="service-details-icon-box-desc">
                            We provide seamless access to healthcare
                            professionals by effectively scheduling and
                            coordinating doctor appointments tailored to your
                            preference.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-details-icon-box hvr-zoom-2-wrap d-flex">
                        <div className="service-details-icon-box-icon hvr-zoom-2 hvr-zoom-2-dark">
                          <DiscountedMedicinesIcon
                            style={{
                              height: "38px",
                              width: "80px",
                              verticalAlign: "text-top",
                            }}
                          />
                        </div>
                        <div className="service-details-icon-box-content">
                          <h4 className="service-details-icon-box-title mb_10">
                            Discounted Medicines & Diagnostics
                          </h4>
                          <p className="service-details-icon-box-desc">
                            We help you save on healthcare costs by offering
                            discounts on essential medications and diagnostic
                            services.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-details-icon-box hvr-zoom-2-wrap d-flex">
                        <div className="service-details-icon-box-icon hvr-zoom-2 hvr-zoom-2-dark">
                          <NursingHomeIcon
                            style={{
                              height: "38px",
                              width: "80px",
                              verticalAlign: "text-top",
                            }}
                          />
                        </div>
                        <div className="service-details-icon-box-content">
                          <h4 className="service-details-icon-box-title mb_10">
                            Nursing at Home
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Our skilled and compassionate nursing staff delivers
                            personalized care and assistance in the comfort of
                            your home, tailored to your loved one's specific
                            needs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-details-icon-box hvr-zoom-2-wrap d-flex">
                        <div className="service-details-icon-box-icon hvr-zoom-2 hvr-zoom-2-dark">
                          <BedsideCareIcon
                            style={{
                              height: "38px",
                              width: "85px",
                              verticalAlign: "text-top",
                            }}
                          />
                        </div>
                        <div className="service-details-icon-box-content">
                          <h4 className="service-details-icon-box-title mb_10">
                            24-Hour Bedside Care
                          </h4>
                          <p className="service-details-icon-box-desc">
                            We offer reliable round-the-clock bedside care to
                            ensure continuous support and monitoring for those
                            who need constant assistance.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-details-icon-box hvr-zoom-2-wrap d-flex">
                        <div className="service-details-icon-box-icon hvr-zoom-2 hvr-zoom-2-dark">
                          <PhysiotherapyHomeIcon
                            style={{
                              height: "38px",
                              width: "80px",
                              verticalAlign: "text-top",
                            }}
                          />
                        </div>
                        <div className="service-details-icon-box-content">
                          <h4 className="service-details-icon-box-title mb_10">
                            Physiotherapy at Doorstep
                          </h4>
                          <p className="service-details-icon-box-desc">
                            We arrange professional physiotherapy sessions at
                            home to promote strength, flexibility and overall
                            well-being, enhancing physical health and mobility .
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-details-icon-box hvr-zoom-2-wrap d-flex">
                        <div className="service-details-icon-box-icon hvr-zoom-2 hvr-zoom-2-dark">
                          <VisionAidIcon
                            style={{
                              height: "38px",
                              width: "85px",
                              verticalAlign: "text-top",
                            }}
                          />
                        </div>
                        <div className="service-details-icon-box-content">
                          <h4 className="service-details-icon-box-title mb_10">
                            Vision Aid
                          </h4>
                          <p className="service-details-icon-box-desc">
                            We assist in arranging vision aids and support
                            services to optimize visual capabilities and ensure
                            independence and safety in daily activities.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-details-icon-box hvr-zoom-2-wrap d-flex">
                        <div className="service-details-icon-box-icon hvr-zoom-2 hvr-zoom-2-dark">
                          <SpeechHearingAidIcon
                            style={{
                              height: "38px",
                              width: "80px",
                              verticalAlign: "text-top",
                            }}
                          />
                        </div>
                        <div className="service-details-icon-box-content">
                          <h4 className="service-details-icon-box-title mb_10">
                            Speech &amp; Hearing Aids
                          </h4>
                          <p className="service-details-icon-box-desc">
                            We provide high quality speech and hearing aids to
                            enhance communication abilities and improve quality
                            of life.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
