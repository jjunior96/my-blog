import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from "./styled"

const Avatar = () => { 
  const { avatarImage } = useStaticQuery (
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return <S.AvatarWrapper fixed={ avatarImage.childImageSharp.fixed} style={{ width: "100px" }}/>
}

export default Avatar