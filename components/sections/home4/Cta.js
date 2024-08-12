import Link from "next/link"


export default function Cta() {
    return (
        <>
            <section className="cta-1-section alt">
                <div className="cta-1-bg" data-parallax='{"y": 30}' style={{backgroundImage: 'url(assets/images/background/parallax-bg.jpg)'}}></div>
                <div className="auto-container">
                    <div className="section_heading text-center mb_20">
                        <span className="section_heading_title_small p_relative">Appointment</span>
                        <h2 className="section_heading_title_big alt">Book an Appointment Today!</h2>
                    </div>
                    <div className="text-center">
                        <p className="cta-1-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis <br />
                            ridiculus tellus.</p>
                        <div className="cta-1-link-bt"><Link href="/event-grid" className="btn-1">Get Appointment <span></span></Link></div>
                    </div>
                </div>
            </section>
        </>
    )
}
