import { Link } from 'react-router-dom';

export default function ColorGame() {
    useEffect(() => {
        setRandomColor();
      }, []);
    
      let answer;
    
      const randomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
      };
    
      const updateBoxCount = (count) => {
        const container = document.getElementById('colorContainer');
        container.innerHTML = '';
        document.getElementById('boxCount').textContent = count;
        for (let i = 0; i < count; i++) {
          let div = document.createElement('div');
          div.classList.add('colorbox');
          container.appendChild(div);
        }
        setRandomColor();
      };
    
      const setRandomColor = () => {
        const container = document.getElementById('colorContainer');
        for (let child of container.children) {
          child.style.backgroundColor = randomColor();
        }
        pickColorAnswer(container);
        dynamicListener();
        document.getElementById('colorCongratsTitle').innerHTML = "Which color is this?";
      };
    
      const pickColorAnswer = (container) => {
        let colorTitle = document.getElementById('colorTitle');
        let randIndex = Math.floor(Math.random() * container.children.length);
        const child = container.children[randIndex];
        answer = child.style.backgroundColor;
        colorTitle.innerHTML = child.style.backgroundColor.toUpperCase();
      };
    
      const changeAllColors = (color) => {
        const container = document.getElementById('colorContainer');
        for (let child of container.children) {
          child.style.backgroundColor = color;
        }
      };
    
      const dynamicListener = () => {
        const container = document.getElementById('colorContainer');
        for (let child of container.children) {
          child.onclick = function () {
            const clickedColor = this.style.backgroundColor;
            if (clickedColor === answer) {
              document.getElementById('colorCongratsTitle').innerHTML = "CONGRATS YOU GOT IT RIGHT!!!";
              changeAllColors(clickedColor);
            } else {
              this.style.backgroundColor = "#000000";
            }
          };
        }
      };
    
      const changeButtonColor = () => {
        const button = document.getElementById('changeButtonColor');
        if (button.style.backgroundColor === 'rgb(255, 165, 0)') {
          button.style.backgroundColor = 'rgb(165, 42, 42)';
        } else {
          button.style.backgroundColor = 'rgb(255, 165, 0)';
        }
      };
    
      return (
        <section className="colorGame">
          <div className="titleContainer">
            <h1>Color Game</h1>
            <h2 id="colorCongratsTitle">Which Color is This?</h2>
            <h2 id="colorTitle"></h2>
          </div>
    
          <div>
            <label htmlFor="boxSlider">Difficulty: </label>
            <input
              type="range"
              id="boxSlider"
              min="2"
              max="7"
              defaultValue="3"
              onInput={(e) => updateBoxCount(e.target.value)}
            />
            <span id="boxCount">3</span>
          </div>
    
          <div id="colorContainer">
            <div className="colorbox" id="color1"></div>
            <div className="colorbox" id="color2"></div>
            <div className="colorbox" id="color3"></div>
          </div>
    
          <div className="fncContainer">
            <button onClick={setRandomColor}>New Game</button>
          </div>
    
          <section>
            <div className="hw9-q3">
              <button
                id="changeButtonColor"
                style={{ backgroundColor: 'rgb(255,165,0)' }}
                onClick={changeButtonColor}
              >
                Change Color Orange ↔ Brown
              </button>
            </div>
          </section>
    
          <Link to="/">← Back to Home</Link>
        </section>
      );
}