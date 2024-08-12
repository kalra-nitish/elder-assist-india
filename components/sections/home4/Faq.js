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
            <section className="faq-2-section p_relative">
        <div className="p_absolute l_0 b_0 r_0 t_0" style={{background: 'url(assets/images/shape/pattern-9.png) no-repeat left bottom'}}></div>
        <div className="auto-container p_relative">
            <div className="faq-2-shape-1"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
            <div className="faq-2-shape-2"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="section_heading mb_20">
                        <span className="section_heading_title_small">Frequently Asked Question</span>
                        <h2 className="section_heading_title_big">Freequently Asked Questions</h2>
                    </div>
                    <p className="mb_30">Lorem ipsum dolor sit amet consect adipiscing elit. Donec felis <br />
                        urna at tincidunt feugiat vulputate. Ante facilisis pellentesque <br />
                        quis egestas metus, mauris dictum.</p>
                    <div className="link-btn mb_30"><Link href="/faq" className="btn-1">Ask Questions <span></span></Link></div>
                </div>
                <div className="col-lg-6">
                    <ul className="accordion-box alt">                            
                        {/*Block*/}
                        <li className="accordion block">
                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}><div className="icon-outer">Q </div>How does Your Pricing Work?</div>
                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                    <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet
                                        amet mattis commodo Nunc tempor amet massa diam mauris
                                        Risus sodales interdum.</div>
                                </div>
                            </div>
                        </li>
                        {/*Block*/}
                        <li className="accordion block">
                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-outer">Q</div>How Does Saas Work?</div>
                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                    <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet
                                        amet mattis commodo Nunc tempor amet massa diam mauris
                                        Risus sodales interdum.</div>
                                </div>
                            </div>
                        </li>
                        {/*Block*/}
                        <li className="accordion block">
                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-outer">Q</div>How Can I Take Your Service?</div>
                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                    <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet
                                        amet mattis commodo Nunc tempor amet massa diam mauris
                                        Risus sodales interdum.</div>
                                </div>
                            </div>
                        </li>
                        {/*Block*/}
                        <li className="accordion block">
                        <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}><div className="icon-outer">Q</div>How Can I Take Your Service?</div>
                        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                    <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet
                                        amet mattis commodo Nunc tempor amet massa diam mauris
                                        Risus sodales interdum.</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}


