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
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Everyday Essentials Hub"
      >
        <section className="section-padding">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-4 pe-lg-60">
                <CategoryWidget
                  categories={categories}
                  activeCategory="/everyday-essentials"
                />
                <Contact />
              </div>
              <div className="col-lg-8">
                <div className="service-details">
                  <div className="service-details-image mb_60">
                    <img
                      src="assets/images/resource/everyday-essentials.svg"
                      alt="everyday-essentials-page"
                    />
                  </div>
                  <h2 className="service-details-title mb_20">
                    Everyday Essentials Hub
                  </h2>
                  <p className="service-details-desc mb_20">
                    At Elder Assist, we focus on ensuring elders live
                    comfortably and independently by offering a variety of daily
                    support services. Our offerings include reliable home
                    maintenance, nutritious meal deliveries, and safe
                    transportation. We also provide essential household services
                    like cleaning, grocery delivery, and handyman support.
                    Additionally, we help elders stay connected by training them
                    to use the internet and smart devices. Our comprehensive
                    care ensures all daily needs are met, fostering a secure and
                    supportive environment.
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
                            Arranging Home Repair and Maintenance
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Keeping a home in good condition is essential for
                            comfort and safety. We arrange reliable home repair
                            and maintenance services, ensuring all minor and
                            major repairs are addressed promptly. From fixing
                            leaks and electrical issues to routine maintenance
                            tasks, our trusted professionals ensure the home
                            environment remains safe and comfortable for elders.
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
                            Home Setup or New Installations at Home
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Setting up a new home or installing new appliances
                            and furniture can be challenging. Our team assists
                            with home setup and new installations, ensuring
                            everything is arranged to suit the elder’s
                            preferences and needs. We handle all details, from
                            assembling furniture to setting up electronics,
                            making the transition smooth and stress-free.
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
                            Home Cooked Food Delivery
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Good nutrition is crucial for health and well-being.
                            We provide home-cooked food delivery services,
                            offering nutritious and delicious meals prepared
                            with care. Elders can enjoy a variety of meals
                            tailored to their dietary preferences and
                            requirements, ensuring they receive balanced
                            nutrition without the hassle of cooking.
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
                            Cook Service Assistance
                          </h4>
                          <p className="service-details-icon-box-desc">
                            For those who prefer freshly prepared meals at home,
                            our cook service assistance offers personalized meal
                            preparation. Skilled cooks can come to the elder’s
                            home to prepare meals according to their taste and
                            dietary needs, providing a convenient and enjoyable
                            dining experience.
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
                            Transportation Assistance
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Mobility and independence are vital for a fulfilling
                            life. Our transportation assistance services ensure
                            elders can travel safely and comfortably to
                            appointments, social events, or errands. We provide
                            reliable and friendly transportation options, making
                            it easy for them to stay active and engaged in their
                            community.
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
                            Arranging Plumbing, Electrician, Carpenter Services
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Home maintenance often requires specialized skills.
                            We arrange for professional plumbers, electricians,
                            and carpenters to handle any specific repair or
                            improvement needs. Whether it’s fixing a plumbing
                            issue, electrical work, or carpentry tasks, our
                            skilled professionals ensure the job is done right.
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
                            Grocery Delivery
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Shopping for groceries can be a daunting task for
                            elders. Our grocery delivery service ensures that
                            their pantry is always stocked with fresh and
                            essential items. Elders can order their preferred
                            groceries, and we take care of the rest, delivering
                            them right to their doorstep.
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
                            Arranging Home Cleaning Services
                          </h4>
                          <p className="service-details-icon-box-desc">
                            A clean home is a happy home. We arrange for
                            thorough home cleaning services, ensuring the living
                            space is spotless and hygienic. Our cleaning
                            professionals handle all aspects of home cleaning,
                            from dusting and vacuuming to deep cleaning tasks,
                            creating a healthy environment.
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
                            Arranging Regular Maid Services
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Regular help with household chores can make a
                            significant difference. We arrange for dependable
                            maid services to assist with daily tasks such as
                            cleaning, laundry, and organizing. This consistent
                            support helps maintain a tidy home and allows elders
                            to focus on enjoying their day.{" "}
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
                            Training to Use Internet & Smart Devices{" "}
                          </h4>
                          <p className="service-details-icon-box-desc">
                            Staying connected with loved ones and the world is
                            important. We offer training sessions to help elders
                            use the internet and smart devices confidently. Our
                            patient and knowledgeable trainers provide
                            step-by-step guidance, helping them navigate
                            technology and enjoy the benefits of staying
                            connected and informed.
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
