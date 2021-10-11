import { graphql, Link } from 'gatsby'
import React from 'react'
import { Layout } from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import Img from 'gatsby-image'

const index = ({data}) => {
    console.log(data);
    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Projects</h2>
                <h3>Our Features Projects For Inspiration</h3>
                <div className={styles.projetcs}>
                    {projects.map(project => (
                        <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
                            <div>
                                <Img fluid={project.frontmatter.thumbs.childImageSharp.fluid}/>
                                <h3>{project.frontmatter.name}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <p>If you have any projects idea, contact us at <strong>{contact}</strong></p>
            </div>
        </Layout>
    )
}
export default index

export const query = graphql`
query ProjectPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            slug
            stack
            name
            thumbs {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
        }
    }
    contact: site {
        siteMetadata {
            contact
        }
    }
}
`
