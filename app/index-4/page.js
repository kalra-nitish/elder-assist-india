
import Layout from "@/components/layout/Layout"

import About from "@/components/sections/home4/About"
import Banner from "@/components/sections/home4/Banner"
import Service2 from "@/components/sections/home4/Service2"
import Faq from "@/components/sections/home4/Faq"
import Funfact from "@/components/sections/home4/Funfact"
import News from "@/components/sections/home4/News"
import Team from "@/components/sections/home4/Team"
import Client from "@/components/sections/home4/Client"
import Cta from "@/components/sections/home4/Cta"
import Chooseus from "@/components/sections/home4/Chooseus"
import Skill from "@/components/sections/home4/Skill"
import Fundraise from "@/components/sections/home4/Fundraise"
import Services from "@/components/sections/home4/Services"
import Testimonial from "@/components/sections/home4/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Services />
                <About />
                <Service2 />
                <Funfact />
                <Fundraise />
                <Skill />
                <Testimonial />
                <Cta />
                <Chooseus />
                <Faq />
                <Team/>
                <Client />
                <News />
            </Layout>
        </>
    )
}