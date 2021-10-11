import { graphql, Link } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"
import * as styles from '../styles/home.module.css'
import Img from 'gatsby-image'

const Home = ({data}) => {
  console.log(data);
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque consequatur sit mollitia quaerat ex. Nemo?</p>
          <Link className={styles.btn} to="/projects">Portfolio</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid}/>
      </section>
    </Layout>  
  )
}
export default Home;


export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`