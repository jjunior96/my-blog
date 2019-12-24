import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Avatar = () => { 
  const { avatarImage } = useStaticQuery (
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return <Img fluid={ avatarImage.childImageSharp.fluid} style={{ width: "100px" }}/>
}

export default Avatar