import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"

export const query = graphql`
{
  allSanityPost {
    edges {
      node {
        title 
        slug{
          current
        }
        mainImage{
          asset{
            fluid{
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
}
`;

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>STATIC SITE USING SANITY</h1>
    <ul>
      {data.allSanityPost.edges.map(({node: post}) => (
           <li key={post.slug.current}>
          <h2>{post.title}</h2>
          <Image fluid={post.mainImage.asset.fluid} atl ={post.title}>
          </Image>

         </li>
      ) )}
    </ul>
  </Layout>
)

export default IndexPage
