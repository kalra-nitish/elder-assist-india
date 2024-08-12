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
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Fun and Wellness"
      >
        <section className="section-padding">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-4 pe-lg-60">
                <CategoryWidget
                  categories={categories}
                  activeCategory="/fun-wellness"
                />
                <Contact />
              </div>
              <div className="col-lg-8">
                <div className="service-details">
                  <div className="service-details-image mb_60">
                    <img
                      src="assets/images/resource/fun-and-wellness.svg"
                      alt="fun-and-wellness-page"
                    />
                  </div>
                  <h2 className="service-details-title mb_20">
                    Fun and Wellness
                  </h2>
                  <p className="service-details-desc mb_20">
                    At Elder Assist, we believe that enjoying life and staying
                    active is crucial for the well-being of elders. Our leisure
                    care services provide a variety of enjoyable and engaging
                    activities tailored to the interests and preferences of our
                    clients. From organizing family events to planning picnics
                    and wellness activities, we ensure every moment is filled
                    with joy. Our escorted day outings offer safe and enjoyable
                    excursions, while surprise events add an element of
                    excitement and delight. We aim to create memorable
                    experiences that enrich the lives of elders, fostering
                    happiness and social connections.
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
                            Organizing Family Events
                          </h4>
                          <p className="service-details-icon-box-desc">
                            We help organize memorable family events, bringing
                            loved ones together for special occasions and
                            celebrations. From birthdays to anniversaries, we
                            handle all the details to create joyous and
                            unforgettable gatherings. Our team ensures that
                            every aspect, from invitations to decorations and
                            catering, is meticulously planned, allowing families
                            to focus on creating cherished memories with their
                            elder members.
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
                            Arranging Picnics and Wellness Activities
                          </h4>
                          <p className="service-details-icon-box-desc">
                            We plan relaxing picnics and wellness activities
                            that promote physical health and mental well-being.
                            These outings offer a refreshing change of scenery
                            and an opportunity to enjoy nature and social
                            interaction. Whether it's a gentle yoga session in a
                            park, a serene nature walk, or a picnic by a
                            picturesque lake, we ensure that each activity is
                            enjoyable and beneficial for the elders.
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
                            Assisted Day Outings
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Our escorted day outings provide safe and enjoyable
                            excursions to various places of interest. Whether
                            it's a museum visit, a park stroll, or a cultural
                            event, our team ensures elders have a wonderful time
                            while being well-cared for. We prioritize comfort
                            and safety, offering personalized assistance and
                            companionship to make each outing a delightful
                            experience
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
                            Arranging Surprise Events
                          </h4>
                          <p className="service-details-icon-box-desc">
                            We create delightful surprise events to bring joy
                            and excitement to elders' lives. Whether it's a
                            surprise party, an unexpected visit from a loved
                            one, or a special treat, these events are designed
                            to make them feel cherished and happy. Our surprise
                            events are thoughtfully planned to add an element of
                            delightful unpredictability, enhancing the emotional
                            well-being and happiness of the elders.
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
