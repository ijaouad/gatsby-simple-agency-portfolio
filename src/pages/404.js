import { Link } from 'gatsby'
import React from 'react'
import { Layout } from '../components/Layout'


const NotFound = () => {
    return (
        <Layout>
            <div className="error">
                <h1>Error 404</h1>
                <p>This page is not exist</p>
                <Link to="/">Home</Link>
            </div>
        </Layout>
    )
}

export default NotFound
