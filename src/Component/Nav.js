import pdf from '../Assets/Kedar.pdf'
import { Link } from 'react-router-dom';
import('../Styles/Nav.css');
function show() {
    // let element=document.getElementById("cv");
    window.open(pdf)
  }
const Nav=()=>{
    return(
        <>
        <nav>
        <div className="left ">Kedar's Portfolio</div>
        <div className="right">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li onClick={()=>show()}>CV</li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/certificates">Certificates</Link></li>
            <li><Link to="/contact">Contact me</Link></li>
          </ul>
        </div>
      </nav>
        </>
    )

}

export default Nav;