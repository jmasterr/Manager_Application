import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Managers from './pages/Managers';

function Main() {
    return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/managers" element={<Managers />}/>
    </Routes>
    )
}

export default Main