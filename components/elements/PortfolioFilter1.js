
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")



    return (
        <>


            <div className="filters clearfix">
                <ul className="filter-tabs filter-btns d-flex justify-content-center clearfix">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All Works</li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Nursing</li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Medical</li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Senior</li>
                </ul>
            </div>

            <div className="items-container row clearfix">
                {/*Project Block  */}
                <div className="col-lg-4 col-md-6 project-block-1 masonry-item all cat-1">
                    <div className="project-block-1-inner-box">
                        <div className="project-block-1 image">
                            <img src="assets/images/resource/project-1.jpg" alt=""/>
                        </div> 
                        <div className="project-block-1-overlay">
                            <div className="project-block-1-lower-content">
                                <div className="project-block-1-link-btn">
                                    <a href="assets/images/resource/project-14.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-48"></span></a>
                                </div>
                                <h4 className="project-block-1-title">School In Africa</h4>
                                <p className="project-block-1-category">Education</p>
                            </div>
                        </div>                           
                    </div>
                </div>
                {/*Project Block */}
                <div className="col-lg-4 col-md-6 project-block-1 masonry-item all cat-3">
                    <div className="project-block-1-inner-box">
                        <div className="project-block-1 image">
                            <img src="assets/images/resource/project-2.jpg" alt=""/>
                        </div> 
                        <div className="project-block-1-overlay">
                            <div className="project-block-1-lower-content">
                                <div className="project-block-1-link-btn">
                                    <a href="assets/images/resource/project-15.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-48"></span></a>
                                </div>
                                <h4 className="project-block-1-title">School In Africa</h4>
                                <p className="project-block-1-category">Education</p>
                            </div>
                        </div>                           
                    </div>
                </div>
                {/*Project Block */}
                <div className="col-lg-4 col-md-6 project-block-1 masonry-item all cat-1 cat-2">
                    <div className="project-block-1-inner-box">
                        <div className="project-block-1 image">
                            <img src="assets/images/resource/project-3.jpg" alt=""/>
                        </div> 
                        <div className="project-block-1-overlay">
                            <div className="project-block-1-lower-content">
                                <div className="project-block-1-link-btn">
                                    <a href="assets/images/resource/project-16.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-48"></span></a>
                                </div>
                                <h4 className="project-block-1-title">School In Africa</h4>
                                <p className="project-block-1-category">Education</p>
                            </div>
                        </div>                           
                    </div>
                </div>
                {/*Project Block */}
                <div className="col-lg-4 col-md-6 project-block-1 masonry-item all cat-2 cat-3">
                    <div className="project-block-1-inner-box">
                        <div className="project-block-1 image">
                            <img src="assets/images/resource/project-4.jpg" alt=""/>
                        </div> 
                        <div className="project-block-1-overlay">
                            <div className="project-block-1-lower-content">
                                <div className="project-block-1-link-btn">
                                    <a href="assets/images/resource/project-17.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-48"></span></a>
                                </div>
                                <h4 className="project-block-1-title">School In Africa</h4>
                                <p className="project-block-1-category">Education</p>
                            </div>
                        </div>                           
                    </div>
                </div>
                {/*Project Block */}
                <div className="col-lg-4 col-md-6 project-block-1 masonry-item all cat-3 cat-1">
                    <div className="project-block-1-inner-box">
                        <div className="project-block-1 image">
                            <img src="assets/images/resource/project-5.jpg" alt=""/>
                        </div> 
                        <div className="project-block-1-overlay">
                            <div className="project-block-1-lower-content">
                                <div className="project-block-1-link-btn">
                                    <a href="assets/images/resource/project-18.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-48"></span></a>
                                </div>
                                <h4 className="project-block-1-title">School In Africa</h4>
                                <p className="project-block-1-category">Education</p>
                            </div>
                        </div>                           
                    </div>
                </div>
                {/*Project Block */}
                <div className="col-lg-4 col-md-6 project-block-1 masonry-item all cat-1">
                    <div className="project-block-1-inner-box">
                        <div className="project-block-1 image">
                            <img src="assets/images/resource/project-6.jpg" alt=""/>
                        </div> 
                        <div className="project-block-1-overlay">
                            <div className="project-block-1-lower-content">
                                <div className="project-block-1-link-btn">
                                    <a href="assets/images/resource/project-19.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-48"></span></a>
                                </div>
                                <h4 className="project-block-1-title">School In Africa</h4>
                                <p className="project-block-1-category">Education</p>
                            </div>
                        </div>                           
                    </div>
                </div>
            </div>
        </>
    )
}
