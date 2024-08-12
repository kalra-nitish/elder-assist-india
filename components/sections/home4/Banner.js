
'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}


export default function Banner() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="banner-section style-four">
            <div className="banner-shape"><img src="assets/images/main-slider/banner-shape-1.png" alt="" /></div>
            <div className="banner-shape2"><img src="assets/images/main-slider/banner-shape.png" alt="" /></div>
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="content-outer">
                            <div className="content-box">
                                <div className="inner">
                                    <h4>Change The World</h4>
                                    <h1>Love & Care For <br /> Senior</h1>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis <br /> ridiculus tellus.</div>
                                    <div className="link-box">
                                        <Link href="/" className="btn-1 btn-large">Discover More <span></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-feature-image d-none d-lg-block"><img src="assets/images/main-slider/banner-5.png" alt="" /></div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                    <div className="content-outer">
                        <div className="content-box">
                            <div className="inner">
                                <h4>Change The World</h4>
                                <h1>Love & Care For <br /> Senior</h1>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis <br /> ridiculus tellus.</div>
                                <div className="link-box">
                                    <Link href="/" className="btn-1 btn-large">Discover More <span></span></Link>
                                </div>
                            </div>                               
                        </div>
                    </div>
                    <div className="banner-feature-image d-none d-lg-block"><img src="assets/images/main-slider/banner-5.png" alt="" /></div>
                    </SwiperSlide>
                    {/* Slide Item */}
                </Swiper>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}
