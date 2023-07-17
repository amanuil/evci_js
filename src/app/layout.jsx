import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E.V.C.I ',
  description: 'Evangelical Victory Church International started in the Year 1987 and was incorporated in 2004. It gained the title International from the many branches that have and are being formed from it for the spread of the Gospel to all nations[Luke 9: 1-5 | Mark 6: 7-12]',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
