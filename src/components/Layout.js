import React from 'react'
import { Navbar } from './Navbar'
import '../styles/global.css'
import { Helmet } from 'react-helmet'


export const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Helmet>
                <meta charSet="utf-8" />
                <title>CleanyDEV - Software Development Company</title>
            </Helmet>
            <Navbar />
            <div className="content">
                { children }
            </div>
            <footer>
                <p>Copyright 2021 CleanyDEV</p>
            </footer>
        </div>
    )
}
