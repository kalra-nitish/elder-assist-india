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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Career">
                <div>
                    <section className="section-padding">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="service-details">
                                        <div className="section_heading mb_30">
                                            <span className="section_heading_title_small">About LoveGiver</span>
                                            <h2 className="section_heading_title_big">Build Your Career with <br/> LoveGiver</h2>
                                        </div>
                                        <p className="desc mb_45">Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec felis suscipit mi urna nulla at tincidunt feugiat vulputate. Ante facilisis face pellentesque quis egestas metus, mauris dictum sollicitudin hendrerit quis in magna.</p>
                                        {/*Accordian Boxed */}
                                        <div className="accordian-boxed">
                                            {/* Accordian Box*/}
                                            <ul className="accordion-box alt-2">   
                                                <li className="accordion block">
                                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Director Of Nursing</div>
                                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <p className="mb_20">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa.</p>
                                                            <h4 className="fs_20 mb_10">Duties and Responsibilities:</h4>
                                                            <p className="service-details-desc mb_30">Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p>
                                                            <ul className="service-details-lsit mb_30">
                                                                <li>Holiday Trash & Recycling</li>
                                                                <li>Things To Do In Govarnex</li>
                                                                <li>Rent a Picnic Shelter</li>
                                                            </ul>
                                                            <h4 className="fs_20 mb_10">Duties and Responsibilities:</h4>
                                                            <p className="service-details-desc mb_30">Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p>
                                                            <ul className="service-details-lsit mb_30">
                                                                <li>Holiday Trash & Recycling</li>
                                                                <li>Things To Do In Govarnex</li>
                                                                <li>Rent a Picnic Shelter</li>
                                                            </ul>
                                                            <div className="link-btn"><a href="#" className="btn-1">Apply Now <span></span></a></div>
                                                        </div>
                                                    </div>
                                                </li>                         
                                                <li className="accordion block">
                                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>HR Manager</div>
                                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <p className="mb_20">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa.</p>
                                                            <h4 className="fs_20 mb_10">Duties and Responsibilities:</h4>
                                                            <p className="service-details-desc mb_30">Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p>
                                                            <ul className="service-details-lsit mb_30">
                                                                <li>Holiday Trash & Recycling</li>
                                                                <li>Things To Do In Govarnex</li>
                                                                <li>Rent a Picnic Shelter</li>
                                                            </ul>
                                                            <h4 className="fs_20 mb_10">Duties and Responsibilities:</h4>
                                                            <p className="service-details-desc mb_30">Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p>
                                                            <ul className="service-details-lsit mb_30">
                                                                <li>Holiday Trash & Recycling</li>
                                                                <li>Things To Do In Govarnex</li>
                                                                <li>Rent a Picnic Shelter</li>
                                                            </ul>
                                                            <div className="link-btn"><a href="#" className="btn-1">Apply Now <span></span></a></div>
                                                        </div>
                                                    </div>
                                                </li>                         
                                                <li className="accordion block">
                                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Junior Nursing Assistant</div>
                                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <p className="mb_20">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa.</p>
                                                            <h4 className="fs_20 mb_10">Duties and Responsibilities:</h4>
                                                            <p className="service-details-desc mb_30">Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p>
                                                            <ul className="service-details-lsit mb_30">
                                                                <li>Holiday Trash & Recycling</li>
                                                                <li>Things To Do In Govarnex</li>
                                                                <li>Rent a Picnic Shelter</li>
                                                            </ul>
                                                            <h4 className="fs_20 mb_10">Duties and Responsibilities:</h4>
                                                            <p className="service-details-desc mb_30">Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p>
                                                            <ul className="service-details-lsit mb_30">
                                                                <li>Holiday Trash & Recycling</li>
                                                                <li>Things To Do In Govarnex</li>
                                                                <li>Rent a Picnic Shelter</li>
                                                            </ul>
                                                            <div className="link-btn"><a href="#" className="btn-1">Apply Now <span></span></a></div>
                                                        </div>
                                                    </div>
                                                </li>                         
                                                <li className="accordion block">
                                                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}><div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus"></span></div>Director Of Nursing</div>
                                                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <p className="mb_20">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa.</p>
                                                            <h4 className="fs_20 mb_10">Duties and Responsibilities:</h4>
                                                            <p className="service-details-desc mb_30">Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p>
                                                            <ul className="service-details-lsit mb_30">
                                                                <li>Holiday Trash & Recycling</li>
                                                                <li>Things To Do In Govarnex</li>
                                                                <li>Rent a Picnic Shelter</li>
                                                            </ul>
                                                            <h4 className="fs_20 mb_10">Duties and Responsibilities:</h4>
                                                            <p className="service-details-desc mb_30">Scelerisque porttitor faucibus faucibus at diam in cursus dictum enim egestas eget id odio morbi rhoncus pellentesque quis enim.</p>
                                                            <ul className="service-details-lsit mb_30">
                                                                <li>Holiday Trash & Recycling</li>
                                                                <li>Things To Do In Govarnex</li>
                                                                <li>Rent a Picnic Shelter</li>
                                                            </ul>
                                                            <div className="link-btn"><a href="#" className="btn-1">Apply Now <span></span></a></div>
                                                        </div>
                                                    </div>
                                                </li> 
                                            </ul>
                                        </div>                        
                                    </div>
                                </div>
                                <div className="col-lg-4 offset-lg-1 ps-lg-60">
                                    <div className="appointment-form-widget">
                                        <h4 className="event-info-widget-title">Quick Contact</h4>
                                        <div className="form-alt-2">
                                            <form>
                                                <div className="form-group"><input type="text" placeholder="Name"/></div>
                                                <div className="form-group"><input type="email" placeholder="Email"/></div>
                                                <div className="form-group"><input type="text" placeholder="Phone"/></div>
                                                <div className="form-group"><input type="text" placeholder="Subject"/></div>
                                                <div className="form-group"><textarea type="text" placeholder="Message"></textarea></div>
                                                <div className="form-gorup"><button className="btn-1">Submit Now <span></span></button></div>
                                            </form>
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