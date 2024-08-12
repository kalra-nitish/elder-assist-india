'use client'

import Link from "next/link"
import { useState } from "react"

export default function Estimate() {
    
    return (
        <>
            <div className="estimate-form-1">
                <div className="auto-container">
                    <div className="estimate-form-1-wrap d-flex align-items-center">
                        <div className="estimate-form-1-shape" style={{backgroundImage: "url('assets/images/shape/map.png')"}}></div>
                        <h4 className="estimate-form-1-title">Request For A Service</h4>
                        <form className="estimate-form-1-form flex-grow-1 d-flex align-items-center">
                            <div className="form-group"><input type="text" placeholder="Name"/></div>
                            <div className="form-group"><input type="email" placeholder="Email"/></div>
                            <div className="form-group"><input type="text" placeholder="Phone"/></div>
                            <div className="form-group"><button type="submit" className="btn-1">Submit Now<span></span></button></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
