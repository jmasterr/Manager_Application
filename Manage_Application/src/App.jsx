import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Managers from './pages/Managers';
import Nav from './components/Nav';

function App() {


  return (
    <div>
      <Nav />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/managers" element={<Managers />}/>
    </Routes>
    </div>
  )
}

export default App
