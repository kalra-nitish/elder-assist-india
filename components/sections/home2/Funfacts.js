import CounterUp from "@/components/elements/CounterUp"


export default function Funfacts() {
    return (
        <>
            <section className="funfact-1-section">
                <div className="auto-container">
                    <div className="funfact-1-wrapper">
                    <div className="funfact-1-shape" style={{ backgroundImage: "url('assets/images/shape/map2.png')" }}></div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="funfact-1-block text-center">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <h2 className="funfact-1-number odometer" data-count="80"><CounterUp end={80} /></h2>
                                        <h2 className="funfact-1-number-prefix">+</h2>
                                    </div>
                                    <p className="funfact-1-title">Country Coverage</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="funfact-1-block">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <h2 className="funfact-1-number odometer" data-count="620"><CounterUp end={620} /></h2>
                                        <h2 className="funfact-1-number-prefix">+</h2>
                                    </div>
                                    <p className="funfact-1-title">Award Wining</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="funfact-1-block">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <h2 className="funfact-1-number odometer" data-count="290"><CounterUp end={290} /></h2>
                                        <h2 className="funfact-1-number-prefix">$</h2>
                                    </div>
                                    <p className="funfact-1-title">Saticfied People</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="funfact-1-block">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <h2 className="funfact-1-number odometer" data-count="730"><CounterUp end={730} /></h2>
                                        <h2 className="funfact-1-number-prefix">+</h2>
                                    </div>
                                    <p className="funfact-1-title">Volunteers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
