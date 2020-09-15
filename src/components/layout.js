/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { AiFillGithub, AiFillMail, AiFillLinkedin, AiFillFile } from "react-icons/ai"

import Header from "./header"
import "./layout.css"
import Image from "../components/image"
import { Link } from "gatsby" 

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div class = "split left">
        <div class = "left-content">
          <Link to="/" style={{ color: 'black', textDecoration:'none'}}>
            <img style = {{maxWidth : '14rem'}}src="../../headshot.jpg"/>
            <p style = {{lineHeight : '0.7',fontFamily : 'h2font', fontWeight : 'bold'}}>Siddharth Bhattacharjee</p>
            <div style = {{lineHeight : '0.7'}}>
              <p style = {{fontSize : 'smaller'}}>Computer Engineering '23</p>
              <p style = {{fontSize : 'smaller'}}>University of Waterloo</p>
              <br/>
            </div>
          </Link>
          <Link to="/projects" style={{ color: 'black', textDecoration:'none'}}><p style = {{ fontFamily : 'h2font', fontWeight : 'bold'}}>Projects</p></Link>
          <Link to="/work-experience" style={{ color: 'black', textDecoration:'none'}}><p style = {{ fontFamily : 'h2font', fontWeight : 'bold'}}>Work Experience</p></Link>
          <a style={{color: 'black', textDecoration:'none'}} href='../../resume.pdf' target='_blank'><p style = {{ fontFamily : 'h2font', fontWeight : 'bold'}}>Resume</p></a>
          <br />
          <a target='_blank' style = {{ padding: '0rem 0.4rem'}} alt='Github' href='https://github.com/sid42'><AiFillGithub size={32} color={'black'}/></a>
          <a target='_blank' style = {{ padding: '0rem 0.4rem'}} alt='LinkedIn' href='https://www.linkedin.com/in/siddharth-bhattacharjee/'><AiFillLinkedin size={32} color={'black'}/></a>
          <a target='_blank' style = {{ padding: '0rem 0rem 0rem 0.4rem'}} alt='Mail' href='mailto:s34bhatt@uwaterloo.ca'><AiFillMail size={32} color={'black'}/></a>
        </div>
      </div>
      <div class = "split right">
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
