import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <h1> About Page </h1>
    <ul>
      <li>
        <Link to="/about" activeStyle={ {color: 'red'} }>About</Link>
      </li>
      <li>
        <Link to="/">Go to home</Link>
      </li>
    </ul>
  </Layout>
)

export default AboutPage