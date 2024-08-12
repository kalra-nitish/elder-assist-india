'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    // spaceBetween: 30,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider2() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonial-2-block">
                        <div className="testimonial-2-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="testimonial-2-quote"><i className="icon-18"></i></div>
                        <div className="testimonial-2-text">“Blandit aliquet varius id malesuada nunc euismod id tempor <br /> malesuada sollicitudin sit nisi tellus auctor vitae dignissim <br /> lacinia convallis dictum.”</div>
                        <div className="testimonial-2-author-info d-flex align-items-center justify-content-center">
                            <div className="testimonial-2-thumb"><img src="assets/images/resource/testimonial-3.jpg" alt="" /></div>
                            <div>
                                <h4 className="testimonial-2-name">Sandra Bullock</h4>
                                <p className="testimonial-2-designation">Manager</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="testimonial-2-block">
                    <div className="testimonial-2-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <div className="testimonial-2-quote"><i className="icon-18"></i></div>
                    <div className="testimonial-2-text">“Blandit aliquet varius id malesuada nunc euismod id tempor <br /> malesuada sollicitudin sit nisi tellus auctor vitae dignissim <br /> lacinia convallis dictum.”</div>
                    <div className="testimonial-2-author-info d-flex align-items-center justify-content-center">
                        <div className="testimonial-2-thumb"><img src="assets/images/resource/testimonial-3.jpg" alt="" /></div>
                        <div>
                            <h4 className="testimonial-2-name">Sandra Bullock</h4>
                            <p className="testimonial-2-designation">Manager</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-2-block">
                        <div className="testimonial-2-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="testimonial-2-quote"><i className="icon-18"></i></div>
                        <div className="testimonial-2-text">“Blandit aliquet varius id malesuada nunc euismod id tempor <br /> malesuada sollicitudin sit nisi tellus auctor vitae dignissim <br /> lacinia convallis dictum.”</div>
                        <div className="testimonial-2-author-info d-flex align-items-center justify-content-center">
                            <div className="testimonial-2-thumb"><img src="assets/images/resource/testimonial-3.jpg" alt="" /></div>
                            <div>
                                <h4 className="testimonial-2-name">Sandra Bullock</h4>
                                <p className="testimonial-2-designation">Manager</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
