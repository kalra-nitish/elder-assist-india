
import Layout from "@/components/layout/Layout"
import TestimonialSlider5 from "@/components/slider/TestimonialSlider5"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Living Options">
                <div>
                    <section className="section-padding">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="image-box-1 text-center wow fadeInLeft">
                                        <div className="image-box-1-image"><img src="assets/images/resource/image-5.jpg" alt="" /></div>
                                        <div className="image-box-1-content">
                                            <h4 className="image-box-1-title">Assisted Living</h4>
                                            <p className="image-box-1-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pretium at dictum integer volutpat. Ullamcorper tortor diam egestas ultrices diam amet.</p>
                                            <div className="image-box-1-link-btn"><Link href="/living-option-details" className="btn-1 btn-alt btn-small">Read More <span></span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="image-box-1 text-center wow fadeInLeft">
                                        <div className="image-box-1-image"><img src="assets/images/resource/image-6.jpg" alt="" /></div>
                                        <div className="image-box-1-content">
                                            <h4 className="image-box-1-title">Independent Living</h4>
                                            <p className="image-box-1-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pretium at dictum integer volutpat. Ullamcorper tortor diam egestas ultrices diam amet.</p>
                                            <div className="image-box-1-link-btn"><Link href="/living-option-details" className="btn-1 btn-alt btn-small">Read More <span></span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="image-box-1 text-center wow fadeInLeft">
                                        <div className="image-box-1-image"><img src="assets/images/resource/image-7.jpg" alt="" /></div>
                                        <div className="image-box-1-content">
                                            <h4 className="image-box-1-title">Skilled Nursing</h4>
                                            <p className="image-box-1-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pretium at dictum integer volutpat. Ullamcorper tortor diam egestas ultrices diam amet.</p>
                                            <div className="image-box-1-link-btn"><Link href="/living-option-details" className="btn-1 btn-alt btn-small">Read More <span></span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="image-box-1 text-center wow fadeInLeft">
                                        <div className="image-box-1-image"><img src="assets/images/resource/image-8.jpg" alt="" /></div>
                                        <div className="image-box-1-content">
                                            <h4 className="image-box-1-title">Memory Care</h4>
                                            <p className="image-box-1-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pretium at dictum integer volutpat. Ullamcorper tortor diam egestas ultrices diam amet.</p>
                                            <div className="image-box-1-link-btn"><Link href="/living-option-details" className="btn-1 btn-alt btn-small">Read More <span></span></Link></div>
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