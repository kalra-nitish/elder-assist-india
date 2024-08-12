import Layout from "@/components/layout/Layout";
import "public/assets/css/style.css";
import {
  AnnualCheckIcon,
  DiscountedMedicinesIcon,
  DoctorsAppointmentIcon,
  NursingHomeIcon,
  BedsideCareIcon,
} from "@/public/assets/images/icons/services/index";
import Contact from "@/components/sections/contact/contact";
import CategoryWidget from "@/components/elements/CategoryWidget";
import { categories } from "@/components/variables/constants";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Emergency Services"
      >
        <section className="section-padding">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-4 pe-lg-60">
                <CategoryWidget
                  categories={categories}
                  activeCategory="/emergency-services"
                />
                <Contact />
              </div>
              <div className="col-lg-8">
                <div className="service-details">
                  <div className="service-details-image mb_60">
                    <img
                      src="assets/images/resource/emergency services.svg"
                      alt="emergency-services-page"
                    />
                  </div>
                  <h2 className="service-details-title mb_20">
                    Emergency Services
                  </h2>
                  <p className="service-details-desc mb_20">
                    At Elder Assist, we prioritize the health and safety of your
                    loved ones with our comprehensive Emergency Care Assistance.
                    Our team of trained professionals is available 24/7 to
                    provide immediate medical attention and support during
                    emergencies. We coordinate with local hospitals and
                    healthcare providers to ensure swift and efficient care,
                    giving you peace of mind knowing that help is just a call
                    away. Trust Elder Assist for prompt, compassionate, and
                    expert emergency care services tailored to the needs of
                    elders.
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
                            Ambulance Assistance
                          </h4>
                          <p className="service-details-icon-box-desc">
                            In emergencies, timely medical transport is crucial.
                            Our Ambulance Assistance ensures quick and safe
                            transfers to the nearest medical facility. We
                            coordinate with local services to provide immediate
                            support, reducing response times and ensuring elders
                            receive the urgent care they need without delay.
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
                            Non-Medical Emergency
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Emergencies aren't always medical. From sudden home
                            repairs to urgent supply needs, we're here to help.
                            Our team responds swiftly to non-medical
                            emergencies, ensuring elders feel safe and supported
                            in any situation, providing comfort and practical
                            solutions when they need them most.
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
                            Medical Emergency Assistance with a Care Plan
                          </h4>
                          <p className="service-details-icon-box-desc">
                            During medical emergencies, we provide immediate
                            assistance coupled with a personalized care plan.
                            Our medical professionals develop a detailed plan
                            tailored to each elder's needs, ensuring they
                            receive the best possible care throughout the
                            emergency and during their recovery.
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
                            Realtime Updates
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Stay informed with real-time updates during any
                            emergency. We keep families and caregivers in the
                            loop with regular updates, providing peace of mind
                            and ensuring everyone is aware of the current
                            situation and progress of care.
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
                            Accompanied Care Manager
                          </h4>
                          <p className="service-details-icon-box-desc">
                            No elder should face an emergency alone. Our
                            Accompanied Care Manager service ensures that a
                            caring professional is by their side, providing
                            emotional support, managing logistics, and ensuring
                            their needs are met throughout the emergency,
                            fostering a sense of safety and reassurance.
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
