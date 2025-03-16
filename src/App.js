import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ColorGame from './pages/ColorGame';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/color-game" element={<ColorGame/>} />
      </Routes>
    </Router>
  );
}

export default App;
