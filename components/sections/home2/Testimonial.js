import TestimonialSlider2 from "@/components/slider/TestimonialSlider2"


export default function Testimonial() {
    return (
        <>
            <section className="testimonial-2-section">
                <div className="testimonial-2-left-column" style={{backgroundImage: 'url(assets/images/resource/feature-image-1.jpg)'}}>
                    <div className="testimonial-2-feature-image">
                        <img className="d-block d-lg-none" src="assets/images/resource/feature-image-1.jpg" alt=""/>
                    </div>
                </div>
                <div className="testimonial-2-right-column">
                    <div className="section_heading mb_40">
                        <span className="section_heading_title_small alt">Our Testimonials</span>
                        <h2 className="section_heading_title_big alt">What People’s Say</h2>
                    </div>
                    <TestimonialSlider2/>
                </div>
            </section>
        </>
    )
}
