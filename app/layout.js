import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/style.css" 
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { pT_Serif, poppins } from '@/lib/font'
export const metadata = {
    title: 'Elder Assist India',
    description: 'Elder Assist India',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${poppins.variable} ${pT_Serif.variable}`}>
            <body>{children}</body>
        </html>
    )
}
