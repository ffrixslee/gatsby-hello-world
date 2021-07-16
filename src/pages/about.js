import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const aboutMe = () => {
    return (
        <div>
        <Layout>        
            <h1>About me</h1>
            <p>Bio: A part-time penguin-loving pludiophile.</p>
            <p> I want to get to know you ! Reach me at <Link to ="/contact">my contact page.</Link> </p> 
        </Layout>
        </div>
    )
}

export default aboutMe