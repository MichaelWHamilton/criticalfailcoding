import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <div>
            <h1>Site Under C0nstruction</h1>
            <p>Check back soon!</p>

            <Link to="/color-game">🎮 While you wait, try out this color-picking game I made!</Link>
            <br></br>
            <Link to="/advgameprogramming">midterm report</Link>
        </div>
    );
}