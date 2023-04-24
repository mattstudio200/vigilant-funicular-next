import React from 'react'

import AppState from '@/context/app/AppState'
import Meta from './Meta'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <AppState>
    <Meta />
    <div className="container">
        {children}
    </div>
    <Footer/>
    </AppState>
  )
}

export default Layout