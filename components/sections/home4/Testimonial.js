import TestimonialSlider3 from "@/components/slider/TestimonialSlider3"


export default function Testimonial() {
    return (
        <>
            <section className="testimonial-1-section">
                <div className="p_absolute l_0 b_0 r_0 t_0" style={{background: 'url(assets/images/shape/pattern-8.png) no-repeat left bottom'}}></div>
                <div className="auto-container">
                    <div className="section_heading text-center mb_110">
                        <span className="section_heading_title_small">Testimonials</span>
                        <h2 className="section_heading_title_big">What They’re Say <br /> About Us?</h2>
                    </div>
                    <div className="testimonial-1-block-wrap">
                        <TestimonialSlider3 />
                    </div>
                </div>
            </section>
        </>
    )
}
