import "./nav.css";
import Contact from "./contact";
import Home from "./home";
import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import About from "./about";
import Services from "./services";

function Navigation()
{
  return(
    <body>
      <header>
        <div class="logo">
        <img src="slacklogo.png" height={50} width={50}></img>
        <h6>Slack</h6>
        </div>
        <Router>
        <nav>
          <ul class="nav_bar">
            
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
          
        </nav>
            <Routes>
              <Route path="Contact" Component={Contact}></Route>
              <Route path="/" Component={Home}></Route> 
              <Route path="About" Component={About}></Route> 
              <Route path="Services" Component={Services}></Route> 
            </Routes>
            </Router>
          
        <a href="#"><button>Signup / Login</button></a>
      </header>

    </body>
  );
}
export default Navigation;