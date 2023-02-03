
import petitParchemin from '../assets/petitParchemin.png';
import grandParchemin from '../assets/grandParchemin.svg';
import épée1 from '../assets/épée1.png';
import cerclePhoto from '../assets/cerclePhoto.png';



function Profile() {
    // Je peux ajouter n'importe quel code en Javascript ici ! 👍 
    
    return (
      <div className="background">
       
       <div className="description">
        <img className='cercle' src={cerclePhoto} alt= "cerclephoto"></img>
        <div className="parchemin1">
        
        <img className="petitParchemin" src={petitParchemin} alt="petitParchemin"/>
        <h1 className='infoPerso'>"NOM-AGE-VILLE"</h1>
        </div>
        <div className="parchemin2">
        <img className="grandParchemin" src={grandParchemin} alt="grandParchemin"/>
        <div className="info">
        <p>Mon savoir faire et mon Curiculum Vitae</p>
        <img className="épée" src={épée1} alt="épée"/>
        <p>Ma Recherche de Gagne-Pain</p>
        <img className="épée" src={épée1} alt="épée"/>
        <p>Mon Sou</p>
        </div>
        </div>
       </div>
      </div>
      
    );
  }

  export default Profile;