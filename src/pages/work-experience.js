import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./work-experience.css"
import { BsCalendar, BsFillPersonFill } from "react-icons/bs"
import { ImLocation } from "react-icons/im"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Work Experience</h1>
    <hr style = {{ background : "linear-gradient(to right, turquoise, darkblue)", height : "5px", width: "100%"}}/>
    <div>
      <div class="flex-container">
          <div class="flex-item-left">
              <img class="imgAtt"src='../dbrs.png' style = {{
                    maxWidth : '40%', 
                    }}/>
              <div class="weMetaData">
                <p style = {{ paddingBottom : '0.4rem', fontWeight : 'bold'}}>DBRS Morningstar</p>
                <span><BsFillPersonFill style ={{display:'inline-block'}} size={14}/> <p style ={{display:'inline-block'}}>Software Engineer Intern</p></span>
                <span><ImLocation style ={{display:'inline-block'}} size={14}/> <p style ={{display:'inline-block'}}>Toronto, ON</p></span>
                <span><BsCalendar style ={{display:'inline-block'}} size={14}/> <p style ={{display:'inline-block'}}>May '19 - August '19</p></span>
              </div>
          </div>
          <div class="flex-item-right">
              <ul>
                <li>
                <p>DBRS Morningstar is the world's 4th largest credit rating agency and a market leader in Canada, the U.S. and Europe in multiple asset classes. 
                At DBRS' cross-functional and highly collaborative technology team, I was tasked with designing various aspects of a full-stack .NET web application used
                as the ratings services platform.</p> 
                </li>

                <li>
                <p>Designed bulk import tool allowing analysts to create 1000+ ratings through Excel spreadsheets.</p> 
                </li>

                <li>
                <p>Developed components in Angular 8 and corresponding RESTful API endpoints as part of new workflow to streamline ratings process for analysts.</p> 
                </li>
                
                <li>
                <p>Created view models used for PDF generation to automate data retrieval, reducing workflow timeline for analysts by 45%. </p>
                </li>
                
                <li>
                <p>Detected approximately 1500 instances of bad data in production database using data analytics techniques using Python and SQL.</p>
                </li>
              </ul>
          </div>
      </div>

      <div class="flex-container">
          <div class="flex-item-left">
              <img class="imgAtt"src='../waterloop.svg' style = {{
                    maxWidth : '40%', 
                    }}/>
              <div class="weMetaData">
                <p style = {{ paddingBottom : '0.4rem',  fontWeight : 'bold'}}>Waterloop Design Team</p>
                <span><BsFillPersonFill style ={{display:'inline-block'}} size={14}/> <p style ={{display:'inline-block'}}>Server Systems Developer</p></span>
                <span><ImLocation style ={{display:'inline-block'}} size={14}/> <p style ={{display:'inline-block'}}>Waterloo, ON</p></span>
                <span><BsCalendar style ={{display:'inline-block'}} size={14}/> <p style ={{display:'inline-block'}}>January '19 - April '19</p></span>
              </div>
          </div>
          <div class="flex-item-right">
              <ul>
                <li>
                <p>Waterloop is a student design team representing the University of Waterloo in SpaceX's Hyperloop Pod Competition.</p> 
                </li>

                <li>
                <p>As a part of the software team, my primary tasks involved designing a server built using 
                  Go to interface between the pod and the main desktop through a front-end designed with Qt.</p> 
                </li>

                <li>
                <p>Configured Qt front-end to communicate with back-end using Protobufs and Websockets for minimal latency.</p> 
                </li>
                
                <li>
                <p>Developed a Javascript client to allow for rapid testing of the Go server.</p>
                </li>
              </ul>
          </div>
      </div> 

      <div class="flex-container">
          <div class="flex-item-left">
              <img class="imgAtt"src='../horiba1.png' style = {{
                    maxWidth : '40%', 
                    }}/>
              <div class="weMetaData">
                <p style = {{ paddingBottom : '0.4rem', fontWeight : 'bold'}}>Horiba Test Automation</p>
                <span><BsFillPersonFill style ={{display:'inline-block'}} size={14}/> <p style ={{display:'inline-block'}}>Software Developer</p></span>
                <span><ImLocation style ={{display:'inline-block'}} size={14}/> <p style ={{display:'inline-block'}}>Burlington, ON</p></span>
                <span><BsCalendar style ={{display:'inline-block'}} size={14}/> <p style ={{display:'inline-block'}}>Sept '18 - December '18</p></span>
              </div>
          </div>
          <div class="flex-item-right">
              <ul>
                <li>
                <p>Utilized C# and .NET programming techniques to design data models for approximately 40 device drivers reducing processing time of resources by up to 90%.</p> 
                </li>

                <li>
                <p>Implemented internal framework to assign Angular-like directives to essential data and automate data model generation from XML-based resources.</p> 
                </li>

                <li>
                <p>Worked with a globally distributed team utilizing Kanban methodology to ensure smooth workflows</p> 
                </li>
                
                <li>
                <p>Continuously tested and optimized software components based on code reviews, peer programming, and daily standups.</p>
                </li>
              </ul>
          </div>
      </div>  

      <div class="flex-container">
          <div class="flex-item-left">
              <img class="imgAtt"src='../brontecollege3.png' style = {{
                    maxWidth : '40%', 
                    }}/>
              <div class="weMetaData">
                <p style = {{ paddingBottom : '0.4rem', fontWeight : 'bold'}}>Bronte College</p>
                <span><BsFillPersonFill style ={{display:'inline-block'}} size={14}/> <p style ={{display:'inline-block'}}>Software Developer</p></span>
                <span><ImLocation style ={{display:'inline-block'}} size={14}/> <p style ={{display:'inline-block'}}>Mississauga, ON</p></span>
                <span><BsCalendar style ={{display:'inline-block'}} size={14}/> <p style ={{display:'inline-block'}}>January '18 - April '18</p></span>
              </div>
          </div>
          <div class="flex-item-right">
              <ul>
                <li>
                <p>Optimized UX and reliability by adding features, fixing bugs, and refactoring code for the J2EE based CRM web application.</p> 
                </li>

                <li>
                <p>Implemented key features like payment and registration for AP exams for the AngularJS based student portal.</p> 
                </li>

                <li>
                <p>Configured CRM back-end in JSP and student portal back-end in PHP. Utilized MySQL as primary database.</p> 
                </li>
              </ul>
          </div>
      </div>                
    </div>
  </Layout>
)

export default IndexPage
