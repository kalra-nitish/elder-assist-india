'use client'
import Link from "next/link"
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="about-1-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-1-image-wrap">
                                <div className="about-1-shape-1"><img src="assets/images/shape/pattern-1.png" alt=""/></div>
                                <div className="about-1-image-2 text-lg-end pe-lg-5"><img src="assets/images/resource/about-2.jpg" alt=""/></div>
                                <div className="about-1-image-3" data-parallax='{"y": -30}'><img src="assets/images/resource/about-3.jpg" alt=""/></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section_heading mb_20">
                                <span className="section_heading_title_small">About LoveGiver</span>
                                <h2 className="section_heading_title_big">Learn About Our <br/> <span>LoveGiver</span> Professional <br/> Senior Care <span>Agency</span></h2>
                            </div>
                            <div className="d-flex">
                                <div className="about-1-video-btn2 mb_30">
                                    <a onClick={() => setOpen(true)} className="overlay-link play-now ripple" data-fancybox="video-1" data-caption=""><i className="icon-9"></i></a>
                                </div>
                                <p className="aboout-1-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec felis suscipit mi urna nulla at tincidunt feugiat vulputate. Ante facilisis face pellentesque quis egestas metus, mauris dictum sollicitudin hendrerit quis in magna cras adipiscing posuere augue imperdiet arcu.</p>
                            </div>
                            <ul className="about-1-list">
                                <li>Access control put an electric vehicle charge.</li>
                                <li>Free Support an electric vehicle charge.</li>
                                <li>Our mission is to put an electric charge.</li>
                            </ul>
                            <div className="about-1-signature">
                                <img src="assets/images/resource/sign.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />

        </>
    )
}
