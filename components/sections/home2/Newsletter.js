import Link from "next/link"


export default function Newsletter() {
    return (
        <>
            <div className="newsletter-1">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <h3 className="newsletter-1-title">Subscribe To Our Newsletter</h3>
                        </div>
                        <div className="col-lg-8">
                            <form className="newsletter-1-form flex-grow-1 d-flex align-items-center">
                                <div className="form-group"><input type="text" placeholder="Name" /></div>
                                <div className="form-group"><input type="email" placeholder="Email" /></div>
                                <div className="form-group"><button type="submit" className="btn-1">Subscribe Now<span></span></button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
