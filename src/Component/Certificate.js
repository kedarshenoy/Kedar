
import ('../Styles/certificate.css')
const Certificate=()=>{
    return(
        <>
          <div className="container">
             <div className="headingcertif">Certificates</div>

<div className="firstcertificate row">
  <div className="certiname col-lg-5">
    <img
      src={require("../Assets/certificateimg/edurekamian.jpg")} alt=""
      // max-width="50vw"
      height="220vh" 
      // max-width="40vw"
    //   onclick="opencertificate('main')"
    />
  </div>
  <div className="certidesc col-lg-6">
    <div className="titler">
      Completion of the Full Stack Internship Program
    </div>
    This certificate is awarded to me in recognition of successful
    completion of the Full Stack Internship Program by Edureka, "During my
    journey in the Full Stack Internship Program by Edureka, I immersed
    myself in a comprehensive and hands-on learning experience. Throughout
    the program, I gained proficiency in various web development
    technologies, including HTML, CSS, JavaScript, React, Bootstrap,
    MongoDB, Express.js, and Node.js.
  </div>
</div>
<div className='rulerdiv'><hr className="ruler"></hr></div>


<div className="firstcertificate row">
  <div className="certidesc col-lg-6 my-2">
    <div className="titlel">
      MTA: Introduction to Programming Using JavaScript - Certified 2022
    </div>
    Having successfully passed the MTA exam, I have earned the Microsoft
    Technology Associate certification, validating my fundamental knowledge
    and understanding of core technology concepts. This achievement marks a
    significant milestone in my career, as it demonstrates my commitment to
    staying current with industry-standard technologies and showcases my
    readiness to take on new challenges in the IT landscape.
  </div>
  <div className="certiname col-lg-5">
  <a
      href="https://www.credly.com/badges/c3b67d70-d753-49ee-b0b7-80f476f450e9/public_url"
    >
  <img
      src={require("../Assets/certificateimg/microsoft.jpg")} alt=""
      height="220vh" 
      width="100%"

      // height="300px"
    //   onclick="opencertificate('main')"
    /></a>
    {/* <a
      href="https://www.credly.com/badges/c3b67d70-d753-49ee-b0b7-80f476f450e9/public_url"
      target="_blank"
    >
      // <img height="300px" src="./certificateimg/microsoft.jpg" />
    </a> */}
  </div>
</div>
<div className='rulerdiv'><hr className="ruler"></hr></div>


<div className="firstcertificate row">
  <div className="certiname col-lg-5">
  <img
      src={require("../Assets/certificateimg/course.jpg")} alt=""
      height="220vh" 
      
      // height="300px"
    //   onclick="opencertificate('main')"
    />
  </div>

  <div className="certidesc col-lg-6 my-2">
    <div className="titler">B-tech Course Complition Certificate</div>
    The journey through B.Tech was both challenging and rewarding. It tested
    my analytical and problem-solving skills, encouraging me to think
    critically and creatively. I encountered complex projects, group
    assignments, and practical experiments that pushed me beyond my comfort
    zone and shaped me into a resilient and adaptable individual.Receiving
    this B.Tech course completion certificate is a testament to my passion
    for technology and my determination to excel.
  </div>
</div>
<div className='rulerdiv'><hr className="ruler"></hr></div>


<div className="firstcertificate row">
  <div className="certidesc col-lg-6 my-2">
    <div className="titler">Module-1 Complition Edureka</div>
    Throughout this module, I embarked on an enriching learning journey to
    understand the building blocks of web development. I acquired a
    comprehensive understanding of HTML, the fundamental markup language
    that forms the backbone of web pages. CSS empowered me to apply styles
    and layouts to HTML elements, making them attractive and visually
    engaging. Additionally, I explored the power of Bootstrap, a popular
    front-end framework that accelerated my development process by providing
    a wide range of pre-designed components and responsive layout utilities.
  </div>

  <div className="certiname col-lg-5">
  <img
      src={require("../Assets/certificateimg/mod1.jpg")} alt=""
      height="220vh" 
      
      // height="300px"
    //   onclick="opencertificate('main')"
    />
   
  </div>
</div>
<div className='rulerdiv'><hr className="ruler"></hr></div>


<div className="firstcertificate row">
  <div className="certiname col-lg-5">
  <img
      src={require("../Assets/certificateimg/mod2.jpg")} alt=""
      height="220vh" 
      
      // height="300px"
    //   onclick="opencertificate('main')"
    />
    
  </div>
  <div className="certidesc col-lg-6 my-2">
    <div className="titlel">Module-2 Complition Edureka</div>
    During this comprehensive module, I delved into the world of JavaScript,
    a versatile and powerful scripting language that plays a pivotal role in
    modern web development. I gained a deep understanding of JavaScript
    fundamentals, including variables, data types, functions, and control
    flow, which allowed me to write dynamic and interactive code. The
    module's emphasis on Document Object Model (DOM) manipulation enabled me
    to create dynamic web pages that respond to user interactions. I learned
    to harness the power of JavaScript to create engaging user experiences
    and build interactive web applications.
  </div>
</div>
<div className='rulerdiv'><hr className="ruler"></hr></div>


<div className="firstcertificate row">
  <div className="certidesc col-lg-6 my-2">
    <div className="titler">Module-3 Complition Edureka</div>
    Throughout this comprehensive module, I immersed myself in the world of
    server-side development with Node.js, a powerful runtime environment for
    JavaScript. I gained hands-on experience in building web applications
    with the Express.js framework, which provided me with the tools to
    create robust APIs and routes. Additionally, I explored the capabilities
    of MongoDB, a NoSQL database, and learned to manage data efficiently in
    web applications.
  </div>

  <div className="certiname col-lg-5">
  <img
      src={require("../Assets/certificateimg/mod3.jpg")} alt=""
      height="220vh" 
     
      // height="300px"
    //   onclick="opencertificate('main')"
    />
    
  </div>
</div>
<div className='rulerdiv'><hr className="ruler"></hr></div>


<div className="firstcertificate row">
  <div className="certiname col-lg-5">
  <img
      src={require("../Assets/certificateimg/mod4.jpg")} alt=""
      height="220vh" 
      
      // height="300px"
    //   onclick="opencertificate('main')"
    />
    
  </div>
  <div className="certidesc col-lg-6 my-2">
    <div className="titlel">Module-4 Complition Edureka</div>
    Throughout this intensive module, I delved deep into the world of React,
    a popular front-end library for building modern web applications. I
    gained a comprehensive understanding of React components, state
    management, and the virtual DOM, which allowed me to create efficient
    and reusable user interface elements.
  </div>
</div>
</div>
</>
    )

}

export default Certificate;