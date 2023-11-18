import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar/Navbar'
import SidebarDark from './components/Shared/Sidebar/page'
import Head from 'next/head'
import React from 'react'


export const metadata: Metadata = {
  title: 'Harshit Yadav',
  description: 'Software Engineer who loves to develop software and solutions which can solve people problems.',


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
        <link
          rel="icon"
          href="/public/assets/my-app.ico"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body >
        <div className='flex w-full bg-color-white'>
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
