import Meta from './Meta'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="container">
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
