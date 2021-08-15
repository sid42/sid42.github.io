import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Siddharth Bhattacharjee" />
    <div class='index-class'>
      <h1>Hi!</h1>
      <hr class="hrGrad"/>
      <p>My name is Sid and I’m currently pursuing a degree in Electrical and Computer Engineering at the University of Waterloo.</p>
      
      <p>I was born in Kolkata, West Bengal but spent most of my childhood hopping between different cities in India like Pune, Ankleshwar and Munger to name a few. 
        Of all the cities I lived in, I spent the longest amount of time in Bangalore, the Silicon Valley of India, and consider myself to be Bangalorean at heart; 
        I developed a deep appreciation for culture early on in my life through the amazing memories I made in each city. I moved to Waterloo, 
        ON in 2017 to follow my passion for technology and design as an aspiring engineer.</p>

      <p>Over the last year, I’ve developed a keen interest in backend engineering, distributed systems and blockchain technologies. In Winter 2021, I had the opportunity to work
       at <Link to="/work-experience" style = {{ textDecoration: 'underline', color:'black'}}>Dapper Labs</Link> - the team behind CryptoKitties and NBA TopShot - as a backend engineer co-op and gained invaluable experience in working with
        a microservices-based architecture for stability and performance during a period of hyper-growth. I’ve been an active follower of all things NFTs and if you wish to discuss the future of the metaverse, you can contact me <a target='_blank' style = {{ textDecoration: 'underline', color:'black'}} alt='Mail' href='mailto:s34bhatt@uwaterloo.ca'>here</a>! </p>
    </div>
  </Layout>
)

export default IndexPage
