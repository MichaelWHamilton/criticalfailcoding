import { Link } from 'react-router-dom';
import "../styles/ReportStyles.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AdvGameProgrammingReport = () => {
    return (
        <div className="report-container">
            <header>
                <h1>Advanced Game Programming - Midterm Report</h1>
                <h2>The Curse of Erephos (TBD)</h2>
                <p><strong>By: Michael Hamilton</strong> | <em>Spring 2025</em></p>
            </header>

            {/* Project Description */}
            <section>
                <h2>Project Description</h2>
                <p>
                    <strong>The Curse of Erephos</strong> is a stealth-action game inspired by <em>Dishonored</em> and <em>Aragami</em>.
                    In games like <em>Dishonored</em>, the player is faced with an injustice and can either go fully lethal or take a stealth-based, non-lethal approach.
                    This game aims to offer similar decision-making but within a mystical island setting where <strong>light and shadow</strong> shape history.
                </p>
                <p>
                    Players assume the role of a prisoner captured by the <strong>Solmara</strong>, a ruling faction that harnesses the power of light.
                    The Solmara have occupied <strong>Erephos</strong> for centuries, oppressing the remnants of the <strong>Umbric</strong>, an ancient civilization that once wielded shadows to sustain their land.
                    The protagonist, imprisoned in Solmara, becomes the unwilling host of a vengeful shadow spirit—a remnant of the Umbric people’s lost power.
                </p>
                <p>
                    This curse grants supernatural abilities tied to darkness but threatens to consume the player’s humanity.
                    As they escape captivity and explore the island, they must decide whether to <strong>embrace vengeance</strong> or <strong>restore balance</strong>.
                </p>
            </section>

            {/* Gameplay Demonstration */}
            <section> 
                <h2>Gameplay Demonstration</h2>
                <video controls width="100%">
                    <source src="videos/test1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p><em>Figure 1: Stealth mechanics in action</em></p>
            </section>

            {/* Tools Used */}
            <section>
                <h2>Tools Used</h2>
                <ul>
                    <li><strong>Game Engine:</strong> Unity</li>
                    <li><strong>3D Modeling & Animation:</strong> Mixamo, potentially Blender</li>
                    <li><strong>UI Components:</strong>GIMP 3</li>
                    <li><strong>AI Integration for Enemies:</strong> Unity ML-Agents (if applicable)</li>
                </ul>
            </section>

            {/* Game Mechanics */}
            <section>
                <h2>Game Mechanics</h2>
                <ul>
                    <li><strong>Character Arc(s):</strong> The protagonist evolves based on choices—either embracing vengeance or seeking redemption.</li>
                    <li><strong>Game World:</strong> The mystical island of Erephos, featuring ancient ruins, Solmara settlements, and hidden sanctuaries.</li>
                    <li><strong>Stealth & Abilities:</strong> Players navigate patrols, avoid detection, and use shadow-based powers such as teleportation and disguise.</li>
                    <li><strong>Task Modality:</strong> Open-ended objectives allow missions to be completed in multiple ways, from confrontation to pure stealth.</li>
                    <li><strong>Level Design:</strong> Semi-open world with interconnected areas encouraging exploration and lore discovery.</li>
                </ul>
            </section>

            {/* Development Workflow */}
            <section>
                <h2>Development Workflow</h2>
                <img src="images/workflow-diagram.png" alt="Development Workflow" className="full-width-img" />
                <p><em>Figure 2: Overview of the development workflow for key game mechanics.</em></p>
            </section>

            {/* Code Snippet - Teleportation Mechanic */}
            <section>
                <h2>Code Implementation Example</h2>
                <p><strong>Teleportation Mechanic (Unity C#)</strong></p>
                <SyntaxHighlighter language="csharp" style={dracula}>
{`// Teleportation mechanic (Unity C#)
if (Input.GetKeyDown(KeyCode.T) && canTeleport) {
    player.transform.position = teleportTarget.position;
}`}
                </SyntaxHighlighter>
                <p><em>Figure 3: Example of the teleportation mechanic in Unity.</em></p>
            </section>

            {/* Purpose of Choosing This Project */}
            <section>
                <h2>Purpose of Choosing This Project</h2>
                <p>
                    This project explores <strong>stealth mechanics</strong> and <strong>immersive world-building</strong> while experimenting with player agency and moral choices.
                    The goal is to provide a fresh take on the **light vs. darkness** trope, where morality is not absolute.
                    The blend of <strong>strategic stealth gameplay</strong> with a compelling narrative is the core focus.
                </p>
            </section>

            {/* Game References */}
            <section>
                <h2>Game References</h2>
                <ul>
                    <li><strong>Dishonored:</strong> Stealth mechanics, supernatural abilities, moral choices.</li>
                    <li><strong>Aragami:</strong> Shadow-based movement, teleportation, stealth-focused gameplay.</li>
                    <li><strong>Sekiro: Shadows Die Twice:</strong> A world shaped by ancient conflicts and supernatural elements.</li>
                </ul>
            </section>

            {/* Conclusion */}
            <section>
                <h2>Conclusion</h2>
                <p>
                    The development of *The Curse of Erephos* focuses on blending **stealth gameplay, supernatural abilities, and moral dilemmas** into an engaging experience.
                    Future development will integrate teleportation and disguise mechanics, and expand the game’s lore to create a truly immersive world.
                </p>
            </section>

            <footer>
                <p>© 2025 Michael Hamilton | Advanced Game Programming Midterm</p>
            </footer>
        </div>
    );
}

export default AdvGameProgrammingReport;
