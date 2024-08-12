import Link from "next/link"


export default function Contact1() {
    return (
        <>
            <section className="contact-1-section pt-lg-0">
                <div className="auto-container">
                    <div className="row align-items-center">                
                        <div className="col-lg-6 order-lg-2">
                            <div className="section_heading mb_60">
                                <span className="section_heading_title_small">Appontment</span>
                                <h2 className="section_heading_title_big">Want to Hear More About <br /> LoveCare Hospice?</h2>
                            </div>
                            <div className="contact-form">
                                <form method="post" action="/" id="contact-form">
                                    <div className="row clearfix">
                                        <div className="form-group col-md-6">
                                            <input type="text" name="form_name"  placeholder="Your Name" required />
                                        </div>
                                        
                                        <div className="form-group col-md-6">
                                            <input type="text" name="email" placeholder="Your Email" required />
                                        </div>
                                        
                                        <div className="form-group col-md-12">
                                            <input type="text" name="form_subject" placeholder="Subject" required />
                                        </div>
                                        
                                        <div className="form-group col-md-12">
                                            <textarea name="form_message" placeholder="Massage"></textarea>
                                        </div>
                                        
                                        <div className="form-group col-md-12">
                                            <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="4" />
                                            <button className="btn-1 btn-small" type="submit" data-loading-text="Please wait...">Submit now <i className="flaticon-right-arrow-1"></i><span></span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-1-image-wrap">
                                <div className="contact-1-shape-1"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
                                <div className="contact-1-shape-2"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
                                <div className="contact-1-image wow fadeInLeft" ><img src="assets/images/resource/side-image.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
