import Link from "next/link"


export default function Cta() {
    return (
        <>
            <section className="cta-1-section">
        <div className="cta-1-bg" style={{backgroundImage: 'url(assets/images/background/parallax-bg.jpg)'}}></div>
        <div className="auto-container">
            <div className="section_heading text-center mb_40">
                <span className="section_heading_title_small alt">New Technology</span>
                <h2 className="section_heading_title_big alt">Book An <span>Appointment</span> <br/>
                    Today!</h2>
            </div>
            <div className="text-center">
                <p className="cta-1-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec <br/> felis suscipit mi urna nulla at tincidunt feugiat vulputate. Ante <br/> face pellentesque.</p>
                <div className="cta-1-link-bt"><Link href="/event-grid" className="btn-1">Get Appointment <span></span></Link></div>
            </div>
        </div>
    </section>
        </>
    )
}
