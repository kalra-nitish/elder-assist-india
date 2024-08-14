'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="FAQ’S">
                <div>

                    <section className="faq-1-section">
                        <div className="auto-container">
                            <div className="section_heading text-center mb_65">
                                <span className="section_heading_title_small">Faq’s</span>
                                <h2 className="section_heading_title_big">Frequently Asked
                                    Questions</h2>
                            </div>
                            <div className="row">                
                                <div className="col-lg-6">
                                    {/*Accordian Boxed*/}
                                    <div className="accordian-boxed">
                                        {/*Accordian Box*/}
                                        <ul className="accordion-box alt">                            
                                            {/*Block*/}
                                            <li className="accordion block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>What are the areas in which we provide services?</div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Elder Assist India provides a range of services including in-home healthcare, personal care, companionship, physiotherapy, dementia care, palliative care, and telemedicine services.</div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*Block*/}
                                            <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Where is Elder Assist India based out of?</div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Elder Assist India is based out of Delhi, India.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*Block*/}
                                            <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Do we have any deadline for services?</div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Our services are flexible and can be availed as per the needs of the client. There are no strict deadlines; services can be customized to suit short-term or long-term requirements.

                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Who should we reach out to in case of emergency?</div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">In case of an emergency, you should contact our 24/7 emergency helpline at [Emergency Helpline Number]. Additionally, our on-call doctor and emergency response team are always ready to assist.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*Block*/}
                                            <li className="accordion block">
                                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>How do you provide services to my parents living alone?</div>
                                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">We offer telemedicine services for regular consultations with doctors without the need for them to visit a clinic, We also provide personalized in-home healthcare services. Our care managers can visit your parents' home to assist with daily activities, medication management, medical check-ups, and companionship.

                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*Block*/}
                                            <li className="accordion block">
                                            <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>How do you provide services to my parents living alone?</div>
                                            <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">We offer telemedicine services for regular consultations with doctors without the need for them to visit a clinic, We also provide personalized in-home healthcare services. Our care managers can visit your parents' home to assist with daily activities, medication management, medical check-ups, and companionship.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">              
                                    {/*Accordian Boxed*/}
                                    <div className="accordian-boxed">
                                        {/*Accordian Box*/}
                                        <ul className="accordion-box alt">                            
                                            {/*Block*/}
                                            <li className="accordion block">
                                            <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Do you also provide telemedicine services?</div>
                                            <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Yes, we provide telemedicine services. Your parents can consult with our doctors via video calls, ensuring they receive medical advice and follow-ups without leaving their home.</div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*Block*/}
                                            <li className="accordion block">
                                            <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(7)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>How do bundles of plans differ from care management plans? </div>
                                            <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Bundles of plans are pre-packaged services designed to cater to common needs and can include various combinations of services like medical check-ups, personal care, and emergency support. Care management plans, on the other hand, are more comprehensive and involve a dedicated care manager who oversees and coordinates all aspects of an elderly person's healthcare and well-being, offering a more tailored approach.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*Block*/}
                                            <li className="accordion block">
                                            <div className={isActive.key == 8 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(8)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>What are the different plans available to subscribe to?</div>
                                            <div className={isActive.key == 8 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">We offer several plans including:
                                                            <ul>
                                                                <li><b>Basic Care Plan</b>: Includes periodic health check-ups and telemedicine consultations.
                                                                </li>
                                                                <li><b>Comprehensive Care Plan</b>: Includes regular in-home caregiver visits, health check-ups, and emergency support.
                                                                </li>
                                                                <li><b>Premium Care Plan</b>: Offers 24/7 in-home care, regular health monitoring, and dedicated care management.</li>
                                                                <li><b>Custom Plans</b>: Tailored according to individual needs.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*Block*/}
                                            <li className="accordion block">
                                            <div className={isActive.key == 9 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(9)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Can we subscribe to single services?</div>
                                            <div className={isActive.key == 9 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Yes, you can subscribe to single services such as just telemedicine, physiotherapy sessions, or one-time medical check-ups.</div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*Block*/}
                                            <li className="accordion block">
                                            <div className={isActive.key == 10 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(10)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Can we custom build the plans as per my needs?</div>
                                            <div className={isActive.key == 10 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Absolutely. We understand that each individual has unique needs. You can custom build a plan to include specific services that best suit your requirements.</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="accordion block">
                                            <div className={isActive.key == 10 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(10)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Who are all family members eligible for the plans?</div>
                                            <div className={isActive.key == 10 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Our plans are primarily designed for elderly individuals. However, family members involved in the care of the elderly can also benefit from services like caregiver training, emergency support, and telemedicine consultations.</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
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