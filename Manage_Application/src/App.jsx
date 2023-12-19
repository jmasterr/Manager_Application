import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './assets/pages/Home';
import Managers from './assets/pages/Managers';

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/managers" element={<Managers />}/>
    </Routes>
  )
}

export default App
