'use client'
import Link from "next/link"
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="video-1-section alt">
                <div className="video-1-bg" style={{backgroundImage: 'url(assets/images/background/video-bg2.jpg)'}}></div>
                <div className="auto-container">
                    <div className="video-1-video-btn">
                        <a onClick={() => setOpen(true)} className="overlay-link play-now ripple" data-fancybox="video-1" data-caption=""><i className="icon-10"></i></a>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}
