'use client'
import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link"
import { useState } from 'react'
export default function Funfact() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="funfact-1-section alt2">
                <div className="funfact-1-bg" style={{backgroundImage: "url('assets/images/background/parallax-bg2.jpg')"}}></div>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="funfact-1-block text-center">
                                <div className="d-flex align-items-center justify-content-center">
                                    <h2 className="funfact-1-number odometer"><CounterUp end={80} /></h2>
                                    <h2 className="funfact-1-number-prefix">+</h2>
                                </div>
                                <p className="funfact-1-title">Country Coverage</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="funfact-1-block">
                                <div className="d-flex align-items-center justify-content-center">
                                    <h2 className="funfact-1-number odometer"><CounterUp end={620} /></h2>
                                    <h2 className="funfact-1-number-prefix">+</h2>
                                </div>
                                <p className="funfact-1-title">Award Wining</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="funfact-1-block">
                                <div className="d-flex align-items-center justify-content-center">
                                    <h2 className="funfact-1-number-prefix">$</h2>
                                    <h2 className="funfact-1-number odometer"><CounterUp end={290} /></h2>
                                </div>
                                <p className="funfact-1-title">Saticfied People</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="funfact-1-block">
                                <div className="d-flex align-items-center justify-content-center">
                                    <h2 className="funfact-1-number odometer"><CounterUp end={730} /></h2>
                                    <h2 className="funfact-1-number-prefix">+</h2>
                                </div>
                                <p className="funfact-1-title">Volunteers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
