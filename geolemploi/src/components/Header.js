import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";


function Header() {
    return (
    <div className="headerClass">
        <div className="logoHeader">
            <img src={Logo} alt="geole emploi" />
        </div>
        <div className="ulLiHeader">
            <nav>
                <ul className="ulHeader">
                    <li className="liHeader"><Link className="liLink" to='/'>Home</Link></li>
                    <li className="liHeader"><Link className="liLink" to='/metier'>Metiers</Link></li>
                    <li className="liHeader"><Link className="liLink" to='/connexion'>Connexion</Link></li>
                    <li className="liHeader"><Link className="liLink" to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </div>
    </div>
    );
  }
  
  export default Header;