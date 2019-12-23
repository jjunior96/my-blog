import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Profile = () => (
  <StaticQuery 
    query={graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `}
    render = {data => (
      <div className="Profile-wrapper">
        <h1>{data.site.siteMetadata.title}</h1>
        <h2>{data.site.siteMetadata.position}</h2>
        <p>{data.site.siteMetadata.description}</p>
      </div>
    )}
  />
)

export default Profile