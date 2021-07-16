import React from "react"
import { Link } from 'gatsby' //preloads the content
import Layout from "../components/layout"



export default function Home() {
  return <div>
            <Layout>            
            <h1><i>Wilkommen</i></h1>
            <h2>Je m'appelle Lili.</h2>
            <p> Curious about me? <a href= "https://github.com/ffrixslee">Here's my github.</a> </p>
            <p> Need a developer ? <Link to="/contact">Contact moi.</Link></p>
            </Layout>
            </div>
}

// Goal: Add a couple of links to the site
// 1. On contact page, link to twitter profile
// 2. On about page, link to contact page
// 3. Test your work!
