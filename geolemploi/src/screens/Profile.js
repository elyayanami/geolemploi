
import petitParchemin from '../assets/petitParchemin.png';
import grandParchemin from '../assets/grandParchemin.svg';
import épée1 from '../assets/épée1.png';
import cerclePhoto from '../assets/cerclePhoto.png';
import Header from '../components/Header';


function Profile() {
    // Je peux ajouter n'importe quel code en Javascript ici ! 👍 
    
    return (
      <div className="backgroundProfile">
       <Header />
        <div className="globalProfil">
          <img className='photoProfil' src={cerclePhoto} alt= "cerclephoto"></img>
          <div className="encartProfil">
            <h2 className='infoPerso'>NOM</h2>
            <h2 className='infoPerso'>25/09/1487</h2>
            <h2 className='infoPerso'>à Strasbourg</h2>
          </div>
          <div className="descriptionProfil">
            <p className='paraProfil'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
      
    );
  }

  export default Profile;