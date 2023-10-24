// import('https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js')
// var typed = new typed("#element", {
    // strings: [
    //   "HTML ",
    //   "CSS ",
    //   "Bootstrap",
    //   "Java Script ",
    //   "React JS",
    //   "php",
    //   "SQL",
    // ],
//     typeSpeed: 65,
//     backSpeed: 10,
//     loop: true,
//   });

import Typed from 'react-typed';
import('../Styles/home.css')
const Home=()=>{
    return(
        <>
            <section className="one">
        <div className="leftmain">
          <img className="prof" src={require('../Assets/profile.jpg')} alt='' />
        </div>
        {/* <!-- <div className="leftmain"><img className="prof" src="./images/IMG_20230718_230744-removebg.png"></div> --> */}
        <div className="rightmain">
          Hey there!
          <div>My name is</div>
          <div className="name">Kedar Shenoy</div>
          <div>I am a Passionate</div>
          <div>Web Developer</div>
          <div className="stacks"><Typed
                strings={[
                  "HTML ",
                  "CSS ",
                  "Bootstrap",
                  "JavaScript",
                  "React JS",
                  "Node JS",
                  "ExpressJS",
                  "MongoDB",
                  "php",
                  "SQL",]}
                    typeSpeed={40}
                    backSpeed={50}
                    cursorChar='❕'
                    // showCursor={false}
                    // attr="placeholder"
                    loop >
                    <span id="element"> </span>
                </Typed></div>
          
        </div>
        {/* {typed()} */}
        
      </section>

     
   
      
        </>
    )

}

export default Home;