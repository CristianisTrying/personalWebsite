import { Link } from "react-router-dom";
import logo from './images/c-logo.png';


const Navbar = () => {
    return (
        <header className="header">
            <img src={logo} className="logo" alt="c-logo" />
            <nav>
                <ul className="nav-links">
                    <li><a><Link to="/">Home</Link></a></li>
                    <li><a><Link to="/Projects">Project</Link></a></li>
                    <li><a><Link to="/About">About</Link></a></li>
                </ul>
            </nav>
            <a href="https://www.linkedin.com/in/cristian-jimenez-8324341bb/" className="cta"><button>Contact</button></a>
        </header>

            

    );
}

export default Navbar;
