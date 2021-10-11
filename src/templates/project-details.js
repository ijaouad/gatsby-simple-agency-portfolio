import React from 'react'
import * as styles from '../styles/project-details.module.css'
import { Layout } from '../components/Layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const projectDetails = ({data}) => {

    const {html} = data.markdownRemark
    const {name, stack, featuredImg} = data.markdownRemark.frontmatter

    return (
        <Layout>
            <div className={styles.details}>
                <h2>{name}</h2>
                <h3>{stack}</h3>
            </div>
            <div className={styles.featured}>
                <Img fluid={featuredImg.childImageSharp.fluid} />
            </div>
            <div className={styles.html} dangerouslySetInnerHTML={{__html: html}}/>
        </Layout>
    )
}

export default projectDetails


export const query = graphql`
query MyQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        name
        stack
        featuredImg {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid    
            }
          }
        }
      }
    }
}
`