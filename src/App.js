import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Home from './pages/Home';
import ColorGame from './pages/ColorGame';
import ChatRoom from './pages/ChatRoom';
import ColorGameV2 from './pages/ColorGameV2';
import CurseOfEpherosV2 from './pages/CurseOfEpherosV2';
import './styles/global.css';
import CurseOfEpherosV1 from './pages/CurseOfEpherosV1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/color-game" element={<ColorGame/>} />
        <Route path="/ColorGameV2" element={<ColorGameV2/>} />
        <Route path="/Curse-Of-Epheros-V1" element={<CurseOfEpherosV1/>} />
        <Route path="/Curse-Of-Epheros-V2" element={<CurseOfEpherosV2/>} />
        {/* <Route path="/chatroom" element={<ChatRoom/>} /> */}
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
