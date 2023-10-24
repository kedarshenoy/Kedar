import 'bootstrap/dist/css/bootstrap.min.css';
import Typed from 'react-typed';
import("../Styles/about.css")

const About=()=>{
    return(
       <>
       
        <section className="firstabout " >
      
        <div className="leftmainabout">
        <img className="profabout" src= { require("../Assets/profile.jpg")} alt="" />
      </div> 
      <div className="rightmainabout container">
        {/* { this.typed.start} */}
        <Typed  
                strings={["Hi I am"
                  ]}
                    typeSpeed={1}
                    backSpeed={50}
                    showCursor={false}
                    // attr="placeholder"
                    >
                    <span className='mx-2'> </span>
                </Typed>
                
                <Typed
                strings={[" A Kedar Shenoy "
                  ]}
                    typeSpeed={10}
                    backSpeed={50}
                    showCursor={false}

                    // attr="placeholder"
                    >
                    <span > </span>
                </Typed>
                <Typed
                strings={["I am Btech (CSE) graduate,Looking for first full-time work experince.<br/>  I will consider myself a flexible and rensponsible Person. I am always enthusiastic to learn new skills, to improve knowledge.<br/> "    ]}
                    typeSpeed={10}
                    backSpeed={50}
                    showCursor={false}

                    
                    // attr="placeholder"
                    >
                    <div > </div>
                </Typed>


                
        {/* <div>Hi I am <span id="nameabout">A Kedar Shenoy</span></div>
        <div>
          I am Btech (CSE) graduate, Looking for first full-time work experince.
        </div> */}
        {/* <div>
          I will consider myself a flexible and rensponsible Person. I am always
          enthusiastic to learn new skills, to improve knowledge
        </div> */}
        {/* <div>
        <div className="sidehead"><b> Skils:</b></div>
        <div className= 'sidepoints'><span className='sidemainpoints'> Client Side Technologies: </span>HTML, CSS, Java Script, React</div>
        <div className="sidepoints"><span className="sidemainpoints"> Server Side Technologies: </span>Nodejs, Express, php</div>
        <div className="sidepoints"><span className="sidemainpoints"> Database & ORM: </span>SQL, MongoDB</div>
        <div className="sidepoints"><span className="sidemainpoints"> Version Control: </span>GitHub</div>
        <div className="sidepoints"><span className="sidemainpoints"> Version Control: </span>GitHub</div>
        </div> */}

        <div className="sidehead"><b> Skils:</b></div>
        <div className= 'sidepoints'><span className='sidemainpoints'> Client Side Technologies: </span>
        <Typed strings={['HTML, CSS, Java Script, React']} typeSpeed={100} backSpeed={50} showCursor={false} >
                    <span > </span>
                </Typed>
        </div>

        <div className= 'sidepoints'><span className='sidemainpoints'>Server Side Technologies:  </span>
        <Typed strings={['Nodejs, Express, php']} typeSpeed={100} backSpeed={50} showCursor={false} >
                    <span > </span>
                </Typed>
        </div>

        <div className= 'sidepoints'><span className='sidemainpoints'>Database & ORM: </span>
        <Typed strings={['SQL, MongoDB']} typeSpeed={100} backSpeed={50} showCursor={false} >
                    <span > </span>
                </Typed>
        </div>

        <div className= 'sidepoints'><span className='sidemainpoints'> Version Control:  </span>
        <Typed strings={['GitHub']} typeSpeed={100} backSpeed={50} showCursor={false} >
                    <span > </span>
                </Typed>
        </div>

        <div className= 'sidepoints'><span className='sidemainpoints'> Other Technologies: </span>
        <Typed strings={['Postman ,Pivotaltracker, render']} typeSpeed={100} backSpeed={50} showCursor={false} >
                    <span > </span>
                </Typed>
        </div>

        <div className="sidehead"><b>Experince:</b></div>

        
        <div className="sidemainpoints sidepoints">
          Full-Stack Web Developer Intern: <span className="compname"> Connectia Technologies</span>
        </div>
        <Typed
                strings={[` ~Collaborated with team to build projects like <b>Kateel temple App, Chit
                fund Association App</b></br>
                ~Built websites using <b>HTML, CSS, and Bootstrap.</b><br/>
                ~Included interactive features using <b>PHP </b>for enhanced user experience.<br/>
                ~Implemented <b>SQL queries to manage and manipulate databases,</b><br/>
                ~Conducted data flow analysis through <b>Data Flow Diagrams</b> (DFD)
                `
                  ]}
                    typeSpeed={5}
                    backSpeed={50}
                    showCursor={false}

                    // attr="placeholder"
                    >
                    <div className="points"> </div>
                </Typed>

        <div className="sidemainpoints sidepoints">
          Full-Stack Web Developer Internship Program: <span className="compname"> Edureka</span>
        </div>
        <Typed
                strings={[` ~learned to build web-application using <b>MERN</b> stack.</br>
                ~Built front-end by deviding it into <b>React-Components</b> and maintained the structure of code using <b>MVC</b> architecture<br/>
                ~Backend was purely devloped using <b>Nodejs</b> and <b>ExpressJS </b>also followed <b>MVC</b> architecture<br/>
                ~Used <b>Mongoose</b> to connect to the <b>MongoDB</b><br/>
                ~Included <b>Payment Gateway</b> and custom <b>API</b>s <br/>
                ~Hosted on Internet using <b>render</b><br/>
                ~learned to use Technologies like <b>Pivotal tracker, Postman</b>

                `
                  ]}
                    typeSpeed={5}
                    backSpeed={50}
                    showCursor={false}

                    // attr="placeholder"
                    >
                    <div className="points"> </div>
                </Typed>
        {/* <div className="points">~learned to build web-application using <b>MERN</b> stack.</div>
        <div className="points">~Built front-end by deviding it into <b>React-Components</b> and maintained the structure of code using <b>MVC</b> architecture</div>
        <div className="points">~Backend was purely devloped using <b>Nodejs</b> and <b>ExpressJS </b>also followed <b>MVC</b> architecture</div>
        <div className="points">~Used <b>Mongoose</b> to connect to the <b>MongoDB</b></div>
        <div className="points">~Included <b>Payment Gateway</b> and custom <b>API</b>s</div>
        <div className="points">~Hosted on Internet using </div>
        <div className="points">~learned to use Technologies like <b>Pivotal tracker, Postman</b></div> */}


        <div className="langdiv">
        <div className="sidehead"><b>Projects:</b></div>
        <Typed
                strings={[`Leetcode <br/> Zomato<br/> Portfolio<br/>`
                  ]}
                    typeSpeed={30}
                    backSpeed={50}
                    showCursor={false}

                    // attr="placeholder"
                    >
                    <div className="sidemainpoints sidepoints"> </div>
                </Typed>
        <div className="sidemainpoints sidepoints x">c</div>


        </div>


        <div className="langdiv mx-5"><div className="sidehead"><b>Languages:</b></div>
        <Typed
                strings={[`Konkani <br/> Kannada<br/> Hindi<br/>English`
                  ]}
                    typeSpeed={30}
                    backSpeed={50}
                    showCursor={false}

                    // attr="placeholder"
                    >
                    <div className="sidemainpoints sidepoints"> </div>
                </Typed>

        </div>
         
         <div className="langdiv"><div className="sidehead"><b>Hobies:</b></div>
         <Typed
                strings={[`Watching Documentaries <br/> Driving<br/> Agriculture<br/>Fitness`
                  ]}
                    typeSpeed={30}
                    backSpeed={50}
                    showCursor={false}

                    // attr="placeholder"
                    >
                    <div className="sidemainpoints sidepoints"> </div>
                </Typed>

        </div>

        


        <div className="sidehead"> <b>Carrer Objective</b></div>
        <Typed
                strings={[`Looking Forword to work with organization where my skils will grow.`
                  ]}
                    typeSpeed={100}
                    backSpeed={50}
                    showCursor={false}
                    // attr="placeholder"
                    >
                    <div className="carrer"> </div>
                </Typed>
      {/* <div className="carrer">Looking Forword to work with organization where my skils will grow.<span id="element"> </span></div> */}


      

      </div>

      
    </section>
       
       
       </>
    )

}

export default About;