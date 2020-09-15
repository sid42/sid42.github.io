import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <hr style = {{ background : "linear-gradient(to right, pink, purple)", height : "5px", width: "100%"}}/>
    
    <p>I'll be updating this page soon but for now you can check out my <a style = {{ 
      textDecoration : 'underline',
      color : 'black',
      fontFamily : 'pfont'}} href="https://github.com/sid42/" target="_blank">Github!</a></p>
    
  </Layout>
)

export default IndexPage
