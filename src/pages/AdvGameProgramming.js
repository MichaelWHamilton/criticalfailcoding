import { Link } from 'react-router-dom';

const AdvGameProgramming = () => {
    return (
        <div className="report-container">
            <header>
                <h1>Advanced Game Programming - Midterm Report</h1>
                <h2>The Curse of Erephos</h2>
                <p><strong>By: Michael Hamilton</strong> | <em>Spring 2025</em></p>
            </header>

            <section>
                <h2>Introduction</h2>
                <p>
                    This report presents an in-depth overview of *The Curse of Erephos*, a stealth-based game inspired by *Dishonored* and *Aragami*.
                    It covers gameplay mechanics, narrative structure, development workflow, and technical implementation.
                </p>
            </section>

            <section>
                <h2>Gameplay Demonstration</h2>
                <video controls width="100%">
                    <source src="videos/gameplay-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p><em>Figure 1: Stealth mechanics in action</em></p>
            </section>

            <section>
                <h2>Core Mechanics</h2>
                <ul>
                    <li><strong>Stealth & Shadows:</strong> The player can hide in shadows to avoid detection.</li>
                    <li><strong>Teleportation:</strong> Players can teleport between shadowed areas, similar to *Aragami*.</li>
                    <li><strong>Magical Disguise:</strong> Players can disguise themselves to avoid enemy suspicion.</li>
                </ul>
            </section>

            <section>
                <h2>Development Workflow</h2>
                <img src="images/workflow-diagram.png" alt="Development Workflow" className="full-width-img" />
                <p><em>Figure 2: Workflow overview for game mechanics development</em></p>
            </section>

            <section>
                <h2>Code Implementation Example</h2>
                <pre><code>
Teleportation mechanic (Unity C#)
if (Input.GetKeyDown(KeyCode.T) && canTeleport) {
    player.transform.position = teleportTarget.position
}
                </code></pre>
                <p><em>Figure 3: Example of the teleportation mechanic in Unity</em></p>
            </section>

            <section>
                <h2>Conclusion</h2>
                <p>
                    The development of *The Curse of Erephos* has been focused on creating a compelling stealth experience with fluid movement and engaging mechanics.
                    Further development will include optimizing AI behavior and refining teleportation mechanics.
                </p>
            </section>

            <footer>
                <p>© 2025 Michael Hamilton | Advanced Game Programming Midterm</p>
            </footer>
        </div>
    );
}
export default AdvGameProgramming;