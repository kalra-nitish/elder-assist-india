
'use client'
import Link from "next/link"
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
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}


export default function Banner() {
    return (
        <>
            <section className="banner-section style-two">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="swiper-slide" style={{backgroundImage: 'url(assets/images/main-slider/banner-1.jpg)'}}>
                            <div className="content-outer">
                                <div className="content-box text-center justify-content-center">
                                    <div className="inner">
                                        <h4>Change The World</h4>
                                        <h1>Love & Care For <br/> Senior </h1>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis <br/> ridiculus tellus.</div>
                                        <div className="link-box">
                                            <a href="/" className="btn-1 btn-large">Discover More <span></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="swiper-slide" style={{backgroundImage: 'url(assets/images/main-slider/banner-1.jpg)'}}>
                            <div className="content-outer">
                                <div className="content-box text-center justify-content-center">
                                    <div className="inner">
                                        <h4>Change The World</h4>
                                        <h1>Finding The Best Senior <br/> Care Services </h1>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis <br/> ridiculus tellus.</div>
                                        <div className="link-box">
                                            <a href="/" className="btn-1 btn-large">Discover More <span></span></a>
                                        </div>
                                    </div>                               
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <div className="banner-shape-2"></div>
                    
                </Swiper>


            </section>
        </>
    )
}
