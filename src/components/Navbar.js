import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

export const Navbar = () => {
    const data = useStaticQuery(graphql`
        {
            site {
            siteMetadata {
                name
            }
            }
        }
    `)
    const {name} = data.site.siteMetadata;
    return (
        <nav>
            <h1>{name}</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}
