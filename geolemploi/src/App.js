import { Routes, Route } from 'react-router-dom';
import Landing from './screens/Landing';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
