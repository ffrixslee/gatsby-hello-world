import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <div> 
            <nav><h1> Lili's playground </h1>
        <p><Link to ="/">Home</Link> | <Link to ="/blog">Blog</Link> | <Link to ="/contact">Contact</Link> | <Link to ="/about">About</Link></p></nav>
        </div>
            
       
    )
}

export default Header