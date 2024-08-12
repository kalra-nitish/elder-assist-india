
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Event from "@/components/sections/home2/Event"
import Newsletter from "@/components/sections/home2/Newsletter"
import Cta from "@/components/sections/home2/Cta"
import Funfacts from "@/components/sections/home2/Funfacts"
import News from "@/components/sections/home2/News"
import Skill from "@/components/sections/home2/Skill"
import Estimate from "@/components/sections/home2/Estimate"
import Services from "@/components/sections/home2/Services"
import Team from "@/components/sections/home2/Team"
import Testimonial from "@/components/sections/home2/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <Banner />
                <Estimate />  
                <About />
                <Services />
                <Funfacts />
                <Skill />
                <Testimonial />
                <Team />
                <Event />
                <Cta />
                <News />
                <Newsletter />
            </Layout>
        </>
    )
}