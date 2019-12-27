import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem 
      slug="/about/"
      background= "red"
      category= "Misc"
      date= "27 de Dezembro de 2019"
      timetoRead= "5"
      title= "Meu primeiro Post em meu blog"
      description= "Minha experiencia em criar meu próprio blog"
    />
  </Layout>
)

export default IndexPage
