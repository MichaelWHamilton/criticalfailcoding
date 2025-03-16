import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/colorGame.css';

export default function ColorGame() {
  const [boxCount, setBoxCount] = useState(3);
  const [colors, setColors] = useState([]);
  const [answer, setAnswer] = useState('');
  const [congratsMessage, setCongratsMessage] = useState('Which Color is This?');

  useEffect(() => {
    generateColors(boxCount);
  }, [boxCount]);

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const generateColors = (count) => {
    const newColors = Array.from({ length: count }, () => randomColor());
    setColors(newColors);
    const correctAnswer = newColors[Math.floor(Math.random() * count)];
    setAnswer(correctAnswer);
  };

  const handleBoxClick = (color) => {
    if (color === answer) {
      setCongratsMessage('CONGRATS YOU GOT IT RIGHT!!!');
      setColors(new Array(colors.length).fill(answer));
    } else {
      setColors(colors.map((c) => (c === color ? '#000000' : c)));
    }
  };

  return (
    <section className="colorGame" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <div className="titleContainer" style={{ backgroundColor: '#08A045', color: 'white', padding: '20px', width: '100%', textAlign: 'center' }}>
        <h1 style={{ color: '#fff' }}>Color Game</h1>
        <h2>{congratsMessage}</h2>
        <h2>{answer.toUpperCase()}</h2>
      </div>

      <div style={{ color: 'white' }}>
        <label htmlFor="boxSlider" style={{ color: 'white' }}>Difficulty: </label>
        <input
          type="range"
          id="boxSlider"
          min="2"
          max="7"
          defaultValue={boxCount}
          onChange={(e) => setBoxCount(Number(e.target.value))}
        />
        <span style={{ color: 'white' }}>{boxCount}</span>
      </div>

      <div id="colorContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            className="colorbox"
            style={{ backgroundColor: color }}
            onClick={() => handleBoxClick(color)}
          ></div>
        ))}
      </div>

      <div className="fncContainer" style={{ marginTop: '20px' }}>
        <button onClick={() => generateColors(boxCount)}>New Game</button>
      </div>

      <Link to="/" style={{ marginTop: '20px', color: '#fff', fontSize: '1.5rem', textDecoration: 'none' }}>← Back to Home</Link>
    </section>
  );
}
