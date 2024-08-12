import Layout from "@/components/layout/Layout";
import "public/assets/css/style.css";
import {
  AnnualCheckIcon,
  DiscountedMedicinesIcon,
  DoctorsAppointmentIcon,
  NursingHomeIcon,
} from "@/public/assets/images/icons/services/index";
import Contact from "@/components/sections/contact/contact";
import CategoryWidget from "@/components/elements/CategoryWidget";
import { categories } from "@/components/variables/constants";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Financial Care">
        <section className="section-padding">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-4 pe-lg-60">
                <CategoryWidget
                  categories={categories}
                  activeCategory="/financial-care"
                />
                <Contact />
              </div>
              <div className="col-lg-8">
                <div className="service-details">
                  <div className="service-details-image mb_60">
                    <img
                      src="assets/images/resource/financial-care.svg"
                      alt="financial-care-page"
                    />
                  </div>
                  <h2 className="service-details-title mb_20">
                    Financial Care
                  </h2>
                  <p className="service-details-desc mb_20">
                    At Elder Assist, we simplify financial management for
                    elders, ensuring their peace of mind. Our comprehensive
                    payment care services cover various financial needs. We
                    handle the timely payment of utility bills to avoid any
                    service interruptions. Our prepaid account service helps
                    manage everyday expenses efficiently, making it easy to
                    track spending. With our online cash management service,
                    elders can handle their finances securely and conveniently.
                    Additionally, we provide support in managing medical
                    emergency funds, ensuring that financial resources are
                    readily available during critical times. Our goal is to
                    provide a secure and hassle-free financial experience for
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
                            Utility Bills
                          </h4>
                          <p className="service-details-icon-box-desc">
                            We take the hassle out of managing utility bills by
                            ensuring they are paid on time. Our service covers
                            electricity, water, gas, and other essential bills,
                            preventing any disruptions and giving peace of mind
                            that everything is taken care of promptly.
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
                            Prepaid Account to Manage Everyday Expenses
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Our prepaid account service helps elders manage
                            their everyday expenses effortlessly. We set up and
                            maintain a prepaid account that covers daily costs
                            like groceries, transportation, and small purchases,
                            ensuring they have access to funds without the need
                            to handle cash frequently.
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
                            Online Cash Management
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Navigating online banking can be daunting, but our
                            online cash management service simplifies it. We
                            assist elders in managing their finances online,
                            from checking account balances to transferring
                            funds, ensuring their money is secure and easily
                            accessible.
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
                            Medical Emergency Fund Management
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Unexpected medical expenses can be a significant
                            concern. Our medical emergency fund management
                            service ensures that funds are readily available
                            when needed most. We help set up and maintain a
                            dedicated fund for medical emergencies, providing
                            financial security and peace of mind during critical
                            times.
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
