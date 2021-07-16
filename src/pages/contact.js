import React from 'react'

import Layout from '../components/layout'

const contactMe = () => {
    return (
        <div>
            <Layout>
                <h1>Contact me at:</h1>
                <p><li>villetamie@example.com</li>
                    <li>boo@example.com</li></p>
                <p>Find me at my <a href="https://villetamie.medium.com/" target="_blank">Medium blog.</a> </p> 
            </Layout>
        </div>
    )
}

export default contactMe