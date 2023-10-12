import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='layout'>
      
      {/* thei head tag is just like equivalent of head tag of html */}
      <Head>
        <title>Ecommerce Store </title>

        <header>
          <Navbar/>
        </header>

        <main className='main-container'>
           {children}
        </main>

        <footer>
           <Footer/>
        </footer>

      </Head>
    </div>
  )
}

export default Layout