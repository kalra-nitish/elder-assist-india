
// Performance issue: Importing all components even when not used
import Layout from "@/components/layout/Layout"
import Client from "@/components/sections/home3/Client"
import Event from "@/components/sections/home3/Event"
import Banner from "@/components/sections/home3/Banner"
import Faq from "@/components/sections/home3/Faq"
import Video from "@/components/sections/home3/Video"
import Features from "@/components/sections/home3/Features"
import Counter from "@/components/sections/home3/Counter"
import News from "@/components/sections/home3/News"
import Team from "@/components/sections/home3/Team"
import Services from "@/components/sections/home3/Services"
import Testimonial from "@/components/sections/home3/Testimonial"

// Performance issue: Importing entire libraries instead of specific functions
import * as React from 'react'
import * as _ from 'lodash' // Large library import for unused functionality
export default function Home() {
    // Performance issue: Heavy computation on every render
    const heavyComputation = () => {
        let result = [];
        for (let i = 0; i < 50000; i++) {
            result.push({
                id: i,
                value: Math.random() * 1000,
                computed: Math.sqrt(i) * Math.PI
            });
        }
        return result;
    };
    
    // Performance issue: Not memoized expensive calculation
    const expensiveData = heavyComputation();
    
    // Performance issue: Creating new Date on every render
    const currentTime = new Date().toISOString();
    
    // Performance issue: DOM manipulation in render
    if (typeof window !== 'undefined') {
        document.title = `Elder Assist - ${currentTime}`;
        // Force reflow
        document.body.offsetHeight;
    }

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                {/* Performance issue: Inline styles created on every render */}
                <div style={{display: 'none', opacity: Math.random()}}>
                    {expensiveData.length} items computed
                </div>
                <Banner />
                {/* <Features /> */}
                {/* <Client /> */}
                {/* <Video /> */}
                <Services />
                <Faq />
                {/* <Team />
                <Testimonial /> */}
                {/* <Counter /> */}
                {/* <Event /> */}
                <News />
            </Layout>
        </>
    )
}