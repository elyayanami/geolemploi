import { Routes, Route } from 'react-router-dom';
import Landing from './screens/Landing';
import Home from './screens/Home';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
