'use client'
import Link from "next/link"
import { useState } from 'react'
export default function Faq() {
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
                <section className="faq-1-section pt-0">
                    <div className="auto-container">
                        <div className="row">                
                            <div className="col-lg-6">
                                <div className="faq-1-image">
                                    <div className="faq-1-shape"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
                                    <div className="faq-2-shape"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
                                    <img src="assets/images/resource/faq.svg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 ps-lg-5">
                                <div className="section_heading mb_20">
                                    {/* <span className="section_heading_title_small">Faq’s</span> */}
                                    <h2 className="section_heading_title_big">Frequently Asked <br />
                                        Questions</h2>
                                </div>
                                {/* <p className="faq-1-text mb_30">Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec felis suscipit mi urna nulla at tincidunt feugiat vulputate. Ante facilisis face pellentesque quis egestas metus.</p> */}
                              
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
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Do you also provide telemedicine services?</div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Yes, we provide telemedicine services. Your parents can consult with our doctors via video calls, ensuring they receive medical advice and follow-ups without leaving their home.</div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*Block*/}
                                            <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Where is Elder Assist India based out of?</div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Elder Assist India is based out of Delhi, India.</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                            </div>
                        </div>
                    </div>
                </section>
            
        </>
    )
}