import{Route,Routes,BrowserRouter} from 'react-router-dom';
import Home from "./Component/Home";
import Nav from './Component/Nav';
import About from './Component/About';
import Certificate from './Component/Certificate';
import Contact from './Component/Contact';
import CV from './Component/CV';
import Project from './Component/Project';

const Router =()=>{
    return(
        <BrowserRouter>
            <Nav/>
            <Routes>
            <Route  path ='/' Component={Home}></Route>
                <Route path='/home' Component={Home}></Route>
                <Route path='/about' Component={About}></Route>
                <Route path='/cv' Component={CV}></Route>
                <Route path='/projects' Component={Project}></Route>
                <Route path='/certificates' Component={Certificate}></Route>
                <Route path='/contact' Component={Contact}></Route>

            </Routes>
        
        
        </BrowserRouter>
    )
}

export default Router;