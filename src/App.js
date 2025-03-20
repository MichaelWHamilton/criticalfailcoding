import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Home from './pages/Home';
import ColorGame from './pages/ColorGame';
import AdvGameProgramming from './pages/AdvGameProgramming';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/color-game" element={<ColorGame/>} />
        <Route path="/AdvGameProgramming" element={<AdvGameProgramming/>} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
