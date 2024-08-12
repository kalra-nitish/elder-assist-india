'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider4() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonial-1-block">
                        <div className="testimonial-1-author-thumb">
                            <img src="assets/images/resource/testimonial-1.jpg" alt=""/>
                            <div className="testimonial-1-quote-icon"><i className="icon-25"></i></div>
                        </div>
                        <p className="testimonial-1-review-desc">“Mattis cras magna morb nula punar
                            aenean aliquet in. Risus a arcu eget
                            mi hendrerit gravida elit scelerisque
                            tempor Pharetra fringilla tellus vivera
                            eget sapien viverra faucibus facilisis
                            sed facilisi dictum.”</p>
                        <div className="testimonial-1-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <h4 className="testimonial-1-name">Jacob Jones</h4>
                        <p className="testimonial-1-designation">Manager</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-1-block">
                        <div className="testimonial-1-author-thumb">
                            <img src="assets/images/resource/testimonial-2.jpg" alt=""/>
                            <div className="testimonial-1-quote-icon"><i className="icon-25"></i></div>
                        </div>
                        <p className="testimonial-1-review-desc">“Mattis cras magna morb nula punar
                            aenean aliquet in. Risus a arcu eget
                            mi hendrerit gravida elit scelerisque
                            tempor Pharetra fringilla tellus vivera
                            eget sapien viverra faucibus facilisis
                            sed facilisi dictum.”</p>
                        <div className="testimonial-1-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <h4 className="testimonial-1-name">Ralph Edwards</h4>
                        <p className="testimonial-1-designation">Manager</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-1-block">
                        <div className="testimonial-1-author-thumb">
                            <img src="assets/images/resource/testimonial-1.jpg" alt=""/>
                            <div className="testimonial-1-quote-icon"><i className="icon-25"></i></div>
                        </div>
                        <p className="testimonial-1-review-desc">“Mattis cras magna morb nula punar
                            aenean aliquet in. Risus a arcu eget
                            mi hendrerit gravida elit scelerisque
                            tempor Pharetra fringilla tellus vivera
                            eget sapien viverra faucibus facilisis
                            sed facilisi dictum.”</p>
                        <div className="testimonial-1-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <h4 className="testimonial-1-name">Jacob Jones</h4>
                        <p className="testimonial-1-designation">Manager</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-1-block">
                        <div className="testimonial-1-author-thumb">
                            <img src="assets/images/resource/testimonial-2.jpg" alt=""/>
                            <div className="testimonial-1-quote-icon"><i className="icon-25"></i></div>
                        </div>
                        <p className="testimonial-1-review-desc">“Mattis cras magna morb nula punar
                            aenean aliquet in. Risus a arcu eget
                            mi hendrerit gravida elit scelerisque
                            tempor Pharetra fringilla tellus vivera
                            eget sapien viverra faucibus facilisis
                            sed facilisi dictum.”</p>
                        <div className="testimonial-1-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <h4 className="testimonial-1-name">Ralph Edwards</h4>
                        <p className="testimonial-1-designation">Manager</p>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
