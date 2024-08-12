
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
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                <Features />
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