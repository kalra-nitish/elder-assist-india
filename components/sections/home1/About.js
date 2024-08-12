'use client'
import Link from "next/link"
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="about-1-section pt-0">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-1-image-wrap">
                                <div className="about-1-shape-1"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
                                <div className="about-1-shape-2"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
                                <div className="about-1-image-1"><img src="assets/images/resource/about-1.jpg" alt="" /></div>
                                <div className="about-1-video-area" data-parallax='{"y": 30}'>
                                    <div className="about-1-video-btn"><a onClick={() => setOpen(true)} className="overlay-link play-now ripple" data-fancybox="video-1" data-caption=""><i className="icon-9"></i></a>
                                    </div>
                                    <p className="about-1-video-title">Watch Exclusive <br /> Video</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section_heading mb_20">
                                <span className="section_heading_title_small">About LoveGiver</span>
                                <h2 className="section_heading_title_big">Learn About Our <br /> <span>LoveGiver</span> Professional <br /> Senior Care <span>Agency</span></h2>
                            </div>
                            <p className="aboout-1-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec felis suscipit mi urna nulla at tincidunt feugiat vulputate. Ante facilisis face pellentesque quis egestas metus, mauris dictum sollicitudin hendrerit quis in magna cras adipiscing posuere augue imperdiet arcu.</p>
                            <ul className="about-1-list">
                                <li>Access control put an electric vehicle charge.</li>
                                <li>Free Support an electric vehicle charge.</li>
                                <li>Our mission is to put an electric charge.</li>
                            </ul>
                            <div className="about-1-btn">
                                <Link href="/" className="btn-1">Read More<span></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}
