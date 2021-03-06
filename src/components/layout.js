 import React from 'react'

 import Header from '../components/header'
 import Footer from '../components/footer'

 import '../styles/index.css'

 const Layout = (props) => {
     return (
         <div>
             <Header />
             {props.children}
             <Footer />
         </div>
     )
 }

 export default Layout