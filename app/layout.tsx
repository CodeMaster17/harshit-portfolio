import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat, Dancing_Script } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import SidebarDark from './components/Shared/Sidebar/page'
import Head from 'next/head'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'

})
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700',],
  variable: '--font-dancingScript'

})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Harshit Yadav',
  description: 'Harshit\'s portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/assets/my-app.ico" />
      </Head>
      <body className={`${montserrat.variable} ${dancingScript.variable}`}>
        <div className='w-full flex bg-color-white'>
          <SidebarDark />
          <div className='w-full '>
            <Navbar />
            {children}
          </div>
        </div>

      </body>
    </html>
  )
}
