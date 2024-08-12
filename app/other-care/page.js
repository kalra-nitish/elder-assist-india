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
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Other Care">
        <section className="section-padding">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-4 pe-lg-60">
                <CategoryWidget
                  categories={categories}
                  activeCategory="/other-care"
                />
                <Contact />
              </div>
              <div className="col-lg-8">
                <div className="service-details">
                  <div className="service-details-image mb_60">
                    <img
                      src="assets/images/resource/other-care.svg"
                      alt="other-care-page"
                    />
                  </div>
                  <h2 className="service-details-title mb_20">Other Care</h2>
                  <p className="service-details-desc mb_20">
                    At Elder Assist, we offer a wide range of additional
                    services to cater to the unique needs of elders, ensuring
                    their comfort and convenience. Our dedicated care managers
                    provide personal time and companionship. We assist with
                    property management, and handle visa, passport, ticketing,
                    and forex needs. We arrange religious services like Puja, as
                    well as book and library visits. Legal help, beauty and
                    grooming services, laundry assistance, and health and travel
                    insurance are also part of our offerings. Our goal is to
                    provide comprehensive support, making life easier and more
                    enjoyable for elders.
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
                            Personal Time with Care Managers
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Our care managers spend quality time with elders,
                            offering companionship and personalized attention.
                            This service ensures that elders feel valued, heard,
                            and supported in their daily lives without leaving a
                            hint of guilt. By building meaningful relationships,
                            our care managers provide emotional support and
                            engagement, enhancing the overall well-being of the
                            elders.
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
                            Property Management Assistance
                          </h4>
                          <p className="service-details-icon-box-desc">
                            We assist with managing and maintaining properties,
                            ensuring everything is in order. Our services cover
                            routine inspections, repairs, and overall upkeep,
                            providing peace of mind that their property is well
                            taken care of. This allows elders to enjoy their
                            time without worrying about the maintenance of their
                            homes, knowing that everything is being
                            professionally managed.
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
                            Visa, Passport, Ticketing, Forex Services
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Travel planning can be complex, but we make it easy
                            by handling visa, passport, ticketing, and forex
                            needs. Our team ensures all travel-related
                            requirements are managed smoothly and efficiently.
                            We provide comprehensive support, from documentation
                            to currency exchange, making travel planning
                            hassle-free for elders and their families.
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
                            Arranging Puja or Any Other Religious Needs
                          </h4>
                          <p className="service-details-icon-box-desc">
                            We respect and support spiritual well-being by
                            arranging Puja ceremonies or any other religious
                            needs. Our service ensures that elders can continue
                            their spiritual practices with ease. We organize
                            everything from setting up the ceremony to arranging
                            for priests and necessary materials, allowing elders
                            to maintain their spiritual routines comfortably and
                            respectfully.
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
                            Arranging Books and Library Visits
                          </h4>
                          <p className="service-details-icon-box-desc">
                            For those who love reading, we arrange book
                            deliveries and library visits. This service helps
                            elders stay engaged with their favourite literature
                            and promotes lifelong learning. We curate a
                            selection of books tailored to their interests and
                            ensure they have regular access to new reading
                            materials, fostering a love for reading and
                            intellectual stimulation.
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
                            Arranging Legal Help
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Navigating legal matters can be challenging, but we
                            provide access to professional legal assistance.
                            Whether it's for documentation, advice, or legal
                            proceedings, our service ensures elders get the
                            support they need. We connect them with experienced
                            legal professionals who can help with wills, estate
                            planning, and other legal concerns, ensuring their
                            rights and interests are protected.
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
                            Grooming Services
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Personal care is important for well-being. We
                            arrange beauty and grooming services, ensuring
                            elders look and feel their best. Services include
                            haircuts, manicures, pedicures, and more. Our
                            skilled professionals provide personalized care in
                            the comfort of their home, helping them maintain
                            their appearance and boost their confidence.
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
                            Arranging Laundry Services
                          </h4>
                          <p className="service-details-icon-box-desc">
                            We take the hassle out of laundry by arranging
                            reliable laundry services. This includes washing,
                            drying, and ironing, ensuring clothes are clean and
                            fresh every time. Our service ensures that elders'
                            laundry needs are met efficiently, allowing them to
                            enjoy fresh and neatly pressed clothes without the
                            burden of managing laundry tasks themselves.
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
                            Health &amp; Travel Insurance Services
                          </h4>
                          <p className="service-details-icon-box-desc">
                            We assist in managing health and travel insurance
                            needs, providing guidance and support to ensure
                            elders are well-protected. Our service helps them
                            find the right insurance plans and manage any claims
                            or paperwork involved. We work with trusted
                            insurance providers to offer comprehensive coverage,
                            giving elders and their families peace of mind
                            regarding their health and travel security.
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
