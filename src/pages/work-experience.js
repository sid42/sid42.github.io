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
    <SEO title="Work Experience" />
    <h1>Work Experience</h1>
    <hr class='we-div' style = {{ background : "linear-gradient(to right, turquoise, darkblue)", height : "5px", width: "100%"}}/>
    <div>

    <div class="flex-container">
          <div class="flex-item-left">
              <img class="imgAtt"src='../topshot.png' style = {{
                    maxWidth : '55%', 
                    }}/>
              <div class="weMetaData">
                <span><p style = {{ paddingBottom : '0rem', fontWeight : 'bold'}}>Dapper Labs </p></span>
                <br/>
                <span><BsFillPersonFill style ={{display:'inline-block', top:'1px', position:'relative'}} size={14}/> <p style ={{display:'inline-block'}}>Backend Engineer Co-op </p></span>
                <br/>
                <span><ImLocation style ={{display:'inline-block', top:'1px', position:'relative'}} size={14}/> <p style ={{display:'inline-block'}}>Vancouver, BC (Remote)</p></span>
                <br/>
                <span><BsCalendar style ={{display:'inline-block', top:'1px', position:'relative'}} size={14}/> <p style ={{display:'inline-block'}}>Jan '21 - April '21</p></span>
                <br/>
                <span>
                  <p style ={{display:'inline-block', padding:'0.2rem', margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>Golang</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>Google Cloud Platform</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>k8s</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>PostgreSQL</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>GraphQL</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>gRPC / Protobuf</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>Apache Kafka</p>
                </span>
              </div>
          </div>
          <div class="flex-item-right">
              <ul>
                <li>
                <p>At Dapper Labs, I got to work with team behind 2 of the largest DApps in the world, CryptoKitties and NBA TopShot! My role as a backend engineer co-op focused on several different
                  aspects of the NBA TopShot platform as the product's needs were always shifting dramatically during a period of hyper-growth. </p> 
                </li>

                <li>
                <p>Architected a data verification platform from scratch in Go to significantly accelerate Customer Support workflows; authored scripts in Cadence, a resource-oriented smart contract programming language to check for data consistency between the TopShot backend and on-chain state. </p> 
                </li>

                <li>
                <p>Optimized GraphQL queries by migrating resolvers to a dedicated read service and utilizing pagination and field querying. Reduced overall response time for queries by 70%. </p> 
                </li>
                
                <li>
                <p>Created data migration jobs and corresponding event handlers to facilitate aforementioned feature work and data analysis.   </p>
                </li>
                                
                <li>
                <p>Ported outbox infrastructure for older services to newer version to prevent outbox cloggages and unhealthy pods.  </p>
                </li>

                <li>
                <p>Deployed, maintained and monitored services using TeamCity, kubectl and k9s.</p>
                </li>
              </ul>
          </div>
      </div>

      <div class="flex-container">
          <div class="flex-item-left">
              <img class="imgAtt"src='../dbrs.png' style = {{
                    maxWidth : '40%', 
                    }}/>
              <div class="weMetaData">
                <span><p style = {{ paddingBottom : '0rem', fontWeight : 'bold'}}>DBRS Morningstar </p></span>
                <br/>
                <span><BsFillPersonFill style ={{display:'inline-block', display:'inline-block', top:'1px', position:'relative'}} size={14}/> <p style ={{display:'inline-block'}}>Software Engineer Intern </p></span>
                <br/>
                <span><ImLocation style ={{display:'inline-block', display:'inline-block', top:'1px', position:'relative'}} size={14}/> <p style ={{display:'inline-block'}}>Toronto, ON</p></span>
                <br/>
                <span><BsCalendar style ={{display:'inline-block', display:'inline-block', top:'1px', position:'relative'}} size={14}/> <p style ={{display:'inline-block'}}>May '19 - August '19</p></span>
                <span>
                  <p style ={{display:'inline-block', padding:'0.2rem', margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>C#</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>ASP.NET</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>Angular 8</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>AngularJS</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>Python</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>MSSQL</p>
                </span>
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
                <span><p style = {{ paddingBottom : '0rem',  fontWeight : 'bold'}}>Waterloop Design Team</p></span>
                <br/>
                <span><BsFillPersonFill style ={{display:'inline-block', display:'inline-block', top:'1px', position:'relative'}} size={14}/> <p style ={{display:'inline-block'}}>Server Systems Developer</p></span>
                <br/>
                <span><ImLocation style ={{display:'inline-block', display:'inline-block', top:'1px', position:'relative'}} size={14}/> <p style ={{display:'inline-block'}}>Waterloo, ON</p></span>
                <br/>
                <span><BsCalendar style ={{display:'inline-block', display:'inline-block', top:'1px', position:'relative'}} size={14}/> <p style ={{display:'inline-block'}}>January '19 - April '19</p></span>
                <span>
                  <p style ={{display:'inline-block', padding:'0.2rem', margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>Golang</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>TypeScript</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>C++ / Qt</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>PostgreSQL</p>
                </span>
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
                <span><p style = {{ paddingBottom : '0.4rem', fontWeight : 'bold'}}>Horiba Test Automation</p></span>
                <br/>
                <span><BsFillPersonFill style ={{display:'inline-block', display:'inline-block', top:'1px', position:'relative'}} size={14}/> <p style ={{display:'inline-block'}}>Software Developer</p></span>
                <br/>
                <span><ImLocation style ={{display:'inline-block', display:'inline-block', top:'1px', position:'relative'}} size={14}/> <p style ={{display:'inline-block'}}>Burlington, ON</p></span>
                <br/>
                <span><BsCalendar style ={{display:'inline-block', display:'inline-block', top:'1px', position:'relative'}} size={14}/> <p style ={{display:'inline-block'}}>Sept '18 - December '18</p></span>
                <span>
                  <p style ={{display:'inline-block', padding:'0.2rem', margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>C#</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>Team Foundation Server</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>Python</p>
                </span>
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
                <span><p style = {{ paddingBottom : '0.4rem', fontWeight : 'bold'}}>Bronte College</p></span>
                <br/>
                <span><BsFillPersonFill style ={{display:'inline-block', display:'inline-block', top:'1px', position:'relative'}} size={14}/> <p style ={{display:'inline-block'}}>Software Developer</p></span>
                <br/>
                <span><ImLocation style ={{display:'inline-block', display:'inline-block', top:'1px', position:'relative'}} size={14}/> <p style ={{display:'inline-block'}}>Mississauga, ON</p></span>
                <br/>
                <span><BsCalendar style ={{display:'inline-block', display:'inline-block', top:'1px', position:'relative'}} size={14}/> <p style ={{display:'inline-block'}}>January '18 - April '18</p></span>
                <span>
                  <p style ={{display:'inline-block', padding:'0.2rem', margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>Java / J2EE</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>AngularJS</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>Angular 8</p>
                  <p style ={{display:'inline-block', padding:'0.2rem',margin:'0 0.2rem 0 0.2rem', fontSize:'12px', border:'1px solid black', borderRadius:'2px'}}>MySQL</p>
                </span>
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
