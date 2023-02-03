import { Routes, Route } from 'react-router-dom';
import Landing from './screens/Landing';
import Home from './screens/Home';
import Profil from './screens/Profile';
import ChickenClasse from './screens/ChickenClasse';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Profile" element={<Profil/>} /> 
        <Route path="/classe/:type" element={<ChickenClasse/>} />
      </Routes>
      
    </div>
  );
}

export default App;
