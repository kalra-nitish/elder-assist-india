import { PT_Serif, Poppins } from 'next/font/google'

export const poppins = Poppins({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--poppins",
    display: 'swap',
})
export const pT_Serif = PT_Serif({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: "--pT_Serif",
    display: 'swap',
})
