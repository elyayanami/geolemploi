import { Link } from "react-router-dom";
import Header from "../components/Header";



const Connexion = () => {
    return (
        <>
            <div className="backgroundConnexion">
                <Header />
                <div className="connexionGlobal" >
                    <div className="encardConnexion">
                        <h2 className="titreConnexion">CONNECTION</h2>
                    </div>
                </div>
                <div className="connexionGlobal" >
                    <div className="encardConnexion">
                        <input placeholder="Nom Complet" className="textareaConnexion"></input>
                    </div>
                </div>
                <div className="connexionGlobal" >
                    <div className="encardConnexion">
                        <input placeholder="Mot De Passe" className="textareaConnexion"></input>
                    </div>
                </div>
                <Link className="linkProfil" to="/Profile">
                <div className="encardConnect">
                    <button className="boutonConnexion">connection</button>
                </div>
                </Link>
            </div>
        </>
    )
}


export default Connexion;