import { Link } from 'react-router-dom';
import "../styles/ReportStyles.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AdvGameProgrammingFinal = () => {
    return (
        <div className="report-container">
            <header>
                <h1>Advanced Game Programming</h1>
                <h2>The Curse of Erephos</h2>
                <p><strong>By: Michael Hamilton</strong> | <em>Spring 2025</em></p>
            </header>

            {/* Project Description */}
            <section>

            <h2>Project Overview</h2>

            <p>
                <strong>The Curse of Erephos</strong> is a stealth-action game inspired by <em>Dishonored</em> and <em>Aragami</em>.  
                Like <em>Dishonored</em>, the game presents players with moral choices—whether to take a lethal approach  
                or rely on stealth to outmaneuver enemies. However, this story unfolds in a mystical island setting  
                where <strong>light and shadow</strong> are deeply entwined in history and power. The gameplay scene involvs a player esacping prison, and reaching the
                mainland, realizing there is much more to come. 
            </p>

            <p>
                Players assume the role of a prisoner captured by the <strong>Solmara</strong>, a ruling faction that harnesses the power of light.  
                The Solmara have occupied <strong>Erephos</strong> for centuries, oppressing the remnants of the <strong>Umbric</strong>,  
                an ancient civilization that once wielded shadows to sustain their land.  
                The protagonist, imprisoned by the Solmara, becomes the unwilling host of a vengeful shadow spirit—  
                a remnant of the Umbric people’s lost power.
            </p>

            <p>
                This shadow-infused curse grants supernatural abilities tied to darkness but threatens to consume the player’s humanity.  
                As they escape captivity and explore the island, they must decide whether to <strong>embrace vengeance</strong>,  
                using the shadows as a weapon against their oppressors, or to <strong>restore balance</strong>,  
                breaking the cycle of destruction that has plagued Erephos for centuries.
            </p>

            <h3>Why This Project?</h3>

            <p>
                This project is an exploration of stealth mechanics and immersive world-building.  
                The focus is on creating a game where choices carry weight,  
                allowing the player to shape their journey through their interactions with the world.  
                The game aims to subvert the traditional <strong>light versus darkness trope</strong>,  
                presenting a morally complex world where neither force is inherently good or evil.  
            </p>

            <p>
                By blending strategic stealth gameplay with a compelling narrative,  
                this project seeks to offer a unique experience that challenges both the player's skills  
                and their perception of power, justice, and sacrifice.
            </p>
        </section>

        <div className="section-divider"></div>

            {/* Tools Used */}
            <section>
                <h2>Tools Used</h2>
                <ul style={{textAlign: "left"}}>
                    <li><strong>Game Engine:</strong> Unity</li>
                    <li><strong>3D Modeling & Animation:</strong> Mixamo, Blender</li>
                    <li><strong>UI Components:</strong>GIMP 3</li>
                </ul>
            </section>

            <div className="section-divider"></div>

            {/* Game Mechanics */}
            <section>
                <h2>Game Mechanics</h2>
                <ul style={{textAlign: "left"}}>
                    <li><strong>Character Arc(s):</strong> The protagonist evolves based on choices—either embracing vengeance or seeking redemption.</li>
                    <li><strong>Game World:</strong> The mystical island of Erephos, featuring ancient ruins, Solmara settlements, and hidden sanctuaries.</li>
                    <li><strong>Stealth & Abilities:</strong> Players navigate patrols, avoid detection, and use shadow-based powers such as teleportation to get past enemies.</li>
                    <li><strong>Task Modality:</strong> Open-ended objectives allow missions to be completed in multiple ways, from confrontation to pure stealth.</li>
                    <li><strong>Level Design:</strong> Linear prison break leading into a semi-open world with interconnected areas encouraging exploration and lore discovery.</li>
                </ul>
            </section>

            <div className="section-divider"></div>

            {/* Current Implementations */}
            <section>
                <h2>Summary of Implementations</h2>
                <p> 
                    I’ve significantly expanded and refined core gameplay systems, integrating them into a 
                    playable section that showcases the tone, mechanics, and vision of the game. While the broader world is still in progress, the 
                    current implementation focuses on delivering a tightly scoped, interactive demo set within the prison bay environment. 
                </p> 
                <p> 
                    Key systems such as AI behavior, player movement, stealth mechanics, and visual/audio feedback have been refined for cohesion and responsiveness. 
                    The demo level now offers a contained narrative and gameplay experience, featuring two NPC types, 
                    multiple player abilities, stealth-based progression, and interactive objects. 
                </p> 
                <p> 
                    Moving forward, the plan is to polish existing systems, improve level design and pacing, and prepare the game 
                    for public showcasing.
                </p>

                <h3>Final Implementations</h3>
                <p> 
                    <strong>Character Animations:</strong> Integrated via <strong>Mixamo</strong>, with transitions for walking, crouching, running, attacking, death, and teleportation. 
                    Additional polish was added to blend animations smoothly based on player input and state. 
                </p> 
                <p> 
                    <strong>Third-Person Camera & Controller:</strong> 
                    Refined camera offset and player-relative movement. The camera remains fixed unless the player is moving, with stabilization added to avoid camera swing during 
                    in-place rotations. Camera collision handling is still in development. 
                </p> 
                <p> 
                    <strong>NPC AI Behavior:</strong> Two distinct NPC types: 
                    <ul> 
                        <li>Light constructs that use NavMesh and enter a chase state upon spotting the player.</li> 
                        <li>Bruts that detect the player in range and enter a chase state when a player is in range.</li> 
                    </ul> 
                </p> 
                <p> 
                    <strong>Light & Shadow Mechanics:</strong> Shadow state provides visual and mechanical stealth benefits. 
                    Entering light reduces shadow energy and increases detection risk. The player recharges shadow power by hiding in dark zones. 
                </p> 
                <p> 
                    <strong>Teleportation System:</strong> The player can teleport within range if they have charge their shadow resource bar. A visual marker indicates eligible teleport points. 
                    Particle effects and fade in/out visuals enhance immersion, and a cooldown + shadow cost balance usage. 
                </p> 
                <p> 
                    <strong>Scene Transitions & Narrative:</strong> The game opens with a dream-like tutorial using canvas-based text prompts triggered via colliders. 
                    This sequence smoothly transitions into the prison scene, establishing both narrative and mechanics. 
                </p> 
                <p> 
                    <strong>Enemy Death Visuals:</strong> Shader-based fadeout effects trigger upon enemy defeat, 
                    including fading materials and dimming lights attached to the light construct NPCs. 
                </p> 
                <p> 
                    <strong>Audio:</strong> Implemented ambient music, sound cues for walking, running and death sequences. Audio feedback strengthens the stealth experience. 
                </p> 
                <p> 
                    <strong>Interaction System:</strong> 
                    The player can pick up keys and unlock doors via conditional checks. Interactions require proximity and specific input, adding minor puzzle-solving elements. 
                </p>
            </section>

            <div className="section-divider"></div>

            {/* Core Features Detailed */}
            <section>

                {/* Main Character */}
                <section>
                    <h2>Main Character</h2>

                    <p>
                        The main character in <strong>The Curse of Erephos</strong> is the player’s anchor in the world—both narratively and mechanically.
                        From movement and camera control to supernatural powers and stealth mechanics, every system is designed to emphasize 
                        immersion. This section highlights the character’s role that drives gameplay.
                    </p>

                        <iframe 
                        src="https://drive.google.com/file/d/1qJEyQKC4CczQ97E4bkkGhQtVb-3TIHHY/preview"
                        width="100%" 
                        height="400"
                        allow="autoplay">
                    </iframe>
                    <figcaption>Demonstration of main playable character.</figcaption>


                    <h3>Character Role & Backstory</h3>

                    <p>
                        The protagonist begins as a prisoner of the Solmara, the dominant light-wielding faction who conquered Erephos.
                        During their confinement, the player becomes the host of a vengeful shadow spirit, unlocking access to forbidden power
                        long suppressed. This sets up a dynamic internal conflict: succumb to the shadow’s hunger for revenge,
                        or seek balance and liberation for the oppressed Umbric people.
                    </p>

                    <p>
                        The character is central to both gameplay and narrative, acting as the vessel through which the player 
                        explores moral dilemmas, stealth-focused traversal, and a growing supernatural skillset. Their identity, powers, and 
                        choices define the path ahead.
                    </p>

                    <h3>Character Input and Camera System</h3>

                    <p>
                        The player controller and third-person camera are separate but interconnected systems.  
                        The player’s movement is relative to the <strong>camera’s orientation</strong> rather than the world space.  
                        This means that pressing forward moves the player in the direction the camera is facing. 
                    </p>

                    <p>
                        The camera is tied to the player, but it can freely rotate around them without affecting movement.  
                        This allows the player to adjust their view dynamically while maintaining control over movement.
                    </p>

                    <h4>Character Movement</h4>

                    <p>
                        The character moves using Unity's Rigidbody physics, allowing for smooth motion and natural rotation.  
                        Movement input is processed every frame, and the player's orientation is adjusted to match the direction of movement.
                    </p>

<SyntaxHighlighter language="csharp" style={dracula}>
{`float horizontal = Input.GetAxis("Horizontal");
float vertical = Input.GetAxis("Vertical");

Vector3 cameraForward = camTransform.forward;
cameraForward.y = 0f;
cameraForward.Normalize();

Vector3 cameraRight = camTransform.right;
cameraRight.y = 0f;
cameraRight.Normalize();

Vector3 inputDir = (cameraForward * vertical + cameraRight * horizontal).normalized;

if (inputDir.magnitude > 0.1f)
{
    Quaternion targetRotation = Quaternion.LookRotation(inputDir);
    transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, Time.fixedDeltaTime * 10f);
}

Vector3 move = inputDir * speed;
Vector3 newVelocity = new Vector3(move.x, rb.velocity.y, move.z);
rb.velocity = newVelocity;`}
</SyntaxHighlighter>

    <p>
        Movement is calculated relative to the <strong>camera’s position</strong>, ensuring that movement always aligns with the camera’s view.  
        The character will rotate smoothly towards the movement direction using <strong>Quaternion Slerp</strong> for natural transitions.
    </p>

    <SyntaxHighlighter language="csharp" style={dracula}>
{`private void FixedUpdate()
{
    // Apply movement
    rb.MovePosition(rb.position + moveDirection * moveSpeed * Time.fixedDeltaTime);
}`}
    </SyntaxHighlighter>

                    <p>
                        When the character moves I used <strong>FixedUpdate</strong> to maintain consistent physics-based motion.  
                        The <code>MovePosition</code> method ensures smooth movement without directly modifying the transform.
                    </p>

                    <h3>Input Handling</h3>
<p>
    Player movement speed is modified by different inputs <code>LeftShift</code> triggers running, while <code>LeftControl</code> enters a crouch state, each altering movement speed accordingly. These states are used to inform both movement velocity and animation state:
</p>

<ul>
    <li><strong>Walk Speed:</strong> Default movement</li>
    <li><strong>Run Speed:</strong> When holding <code>LeftShift</code></li>
    <li><strong>Crouch Speed:</strong> When holding <code>LeftControl</code></li>
</ul>

<p>
    Additional inputs expand the character's capabilities:
</p>

<ul style={{textAlign: "left"}}>
    <li><code>G</code> – Initiates the <strong>sword grab sequence</strong> when near the weapon.</li>
    <li><code>Q</code> – Equips or unequips the sword. Logic checks the current state to toggle correctly.</li>
    <li><code>Left Mouse Button</code> – Triggers an <strong>attack</strong> sequence if the sword is equipped and the player can attack.</li>
    <li><code>Space</code> – Initiates a <strong>roll maneuver</strong> for quick evasion.</li>
</ul>

<SyntaxHighlighter language="csharp" style={dracula}>
{`if (Input.GetKeyDown(KeyCode.G) && !hasGrabbedSword)
{
    StartCoroutine(GrabSword());
}

if (Input.GetKeyDown(KeyCode.Space) && !isRolling && canMove)
{
    StartCoroutine(Roll());
}

if (sword_hand.activeInHierarchy && Input.GetMouseButtonDown(0) && canAttack)
{
    StartCoroutine(Attack());
}

if (sword_back.activeInHierarchy && Input.GetKey(KeyCode.Q))
{
    animator.SetTrigger("Equip");
    StartCoroutine(EquipPause());
}
else if (sword_hand.activeInHierarchy && Input.GetKey(KeyCode.Q))
{
    animator.Play("Unequip");
    StartCoroutine(PutAwayPause());
}`}
</SyntaxHighlighter>

<p>
    These inputs are carefully sequenced using <strong>coroutines</strong> to ensure animations and effects (such as enabling sword trails or toggling weapon visibility) line up with timing expectations. Each input-driven action, such as attacking or rolling, temporarily restricts movement or re-enables it after a short delay to preserve animation fidelity and combat responsiveness.
</p>



<h4>Camera Control</h4>

<p>
    The third-person camera allows <strong>free movement around the player</strong>,  
    controlled by the mouse while maintaining a set distance and height from the character.
</p>

    <SyntaxHighlighter language="csharp" style={dracula}>
{`void LateUpdate()
{
    if (target == null) return;

    // Mouse input for rotation
    float mouseX = Input.GetAxis("Mouse X") * rotationSpeed;
    float mouseY = Input.GetAxis("Mouse Y") * rotationSpeed;

    // Update yaw & pitch
    yaw += mouseX;
    pitch -= mouseY;
    pitch = Mathf.Clamp(pitch, pitchMin, pitchMax);

    // Calculate rotation based on yaw & pitch
    Quaternion rotation = Quaternion.Euler(pitch, yaw, 0);

    // Camera offset calculation
    Vector3 offset = rotation * new Vector3(0, height, -distance); 
    Vector3 sideOffsetVector = target.right * sideOffset; // Offset applied to target's right side

    // Cam position
    transform.position = target.position + offset + sideOffsetVector;

    // Adjust LookAt Target to Offset the View Angle
    Vector3 lookAtTarget = target.position + Vector3.up * 1.5f + sideOffsetVector * 0.5f;
    transform.LookAt(lookAtTarget);
}`}
    </SyntaxHighlighter>

                    <p>
                        The camera follows a <strong>yaw and pitch system</strong>, allowing full control over horizontal and vertical angles.  
                        The mouse movement determines the camera's rotation, with pitch clamped to prevent extreme angles.
                    </p>

                    <p>
                        The camera maintains a <strong>fixed offset</strong> behind and slightly to the side of the player.  
                        This ensures a clear view while keeping the character within the frame.
                    </p>

                    <p>
                        Although the current system works well, I still want to make further refinements.  
                        I plan to adjust the camera's movement behavior to make it feel smoother and more responsive.  
                        I may also experiment with different camera angles and offsets to improve player visibility and control.
                    </p>


<h3>Animation System</h3>

<p>
    The animation system for the main character is built using Unity’s <strong>Animator Controller</strong> and a combination of a <strong>Blend Trees</strong> and animation 
    <strong> triggers</strong>/<strong>booleans</strong>. Animations are directly driven by player input, allowing for responsive transitions between movement types and combat actions.
</p>

<p>
    A video demonstration of this system—showing how player input affects movement, animation, and camera behavior—is provided below:
</p>

<iframe 
    src="https://drive.google.com/file/d/1RYAfBYq0__9UJhzS4GPveMkWaBcrf9_7/preview" 
    width="100%" 
    height="400"
    allow="autoplay">
</iframe>
<figcaption>Player input and animation transitions.</figcaption>

<h4>Movement Blend Tree</h4>

<p>
    The core movement logic is handled by a blend tree on the base layer of the Animator Controller.  
    This tree only checks the float parameter <code>Speed</code>:
</p>

<ul style={{ textAlign: "left" }}>
    <li><code>Speed = 0</code> – The player is idle.</li>
    <li><code>Speed = 1</code> – The player is moving (walking, running, or crouch-walking).</li>
</ul>

<p>
    What determines the actual movement animation is not the speed itself, but the active <code>IsRunning</code> and <code>IsCrouching</code> booleans.  
    These flags are set in the input code depending on whether <code>LeftShift</code> or <code>LeftControl</code> is being held while moving:
</p>

<SyntaxHighlighter language="csharp" style={dracula}>
{`animator.SetFloat("Speed", isMoving ? 1f : 0f);
animator.SetBool("IsRunning", isRunning);
animator.SetBool("IsCrouching", isCrouching);`}
</SyntaxHighlighter>

<p>
    Based on these parameters, the blend tree branches to one of the following:
</p>

<ul style={{ textAlign: "left" }}>
    <li><strong>Walk</strong> – Default when <code>IsRunning = false</code> and <code>IsCrouching = false</code>.</li>
    <li><strong>Run</strong> – Active when <code>IsRunning = true</code>.</li>
    <li><strong>Crouch Walk</strong> – Active when <code>IsCrouching = true</code>.</li>
</ul>

<p>
    When no movement input is detected, <code>Speed</code> is set to <code>0</code>, which causes the player to return to the idle animation by default.
</p>

<h4>Combat and Action Triggers</h4>

<p>
    Non-looping actions such as attacking, rolling, grabbing the sword, or equipping weapons are handled using <strong>animation triggers</strong> and coroutines.  
    These triggers initiate one-time animation clips while temporarily locking out movement or activating game events like hit detection.
</p>

<ul style={{ textAlign: "left" }}>
    <li><code>Attack</code> – Triggered by left mouse click when sword is equipped.</li>
    <li><code>Roll</code> – Triggered by <code>Space</code>, temporarily boosts speed and disables normal input.</li>
    <li><code>Grab</code> – Triggered by pressing <code>G</code> once near the sword.</li>
    <li><code>Equip</code> / <code>Unequip</code> – Toggled using <code>Q</code>.</li>
</ul>

<SyntaxHighlighter language="csharp" style={dracula}>
{`if (Input.GetMouseButtonDown(0) && canAttack)
{
    animator.SetTrigger("Attack");
}

if (Input.GetKeyDown(KeyCode.Space) && !isRolling)
{
    animator.SetTrigger("Roll");
}

if (Input.GetKeyDown(KeyCode.G) && !hasGrabbedSword)
{
    animator.SetTrigger("Grab");
}`}
</SyntaxHighlighter>

<h4>Animation-Timed Coroutines</h4>

<p>
    To ensure precise synchronization between gameplay mechanics and animation sequences, several actions are controlled via <strong>coroutines</strong>.  
    These coroutines allow delays, timed effects, and state toggling to occur exactly when the animation requires them—preventing premature interactions or unintended behavior.
</p>

<h5>Attack</h5>
<p>
    The <code>Attack</code> coroutine is triggered by the left mouse button and controls both animation flow and combat activation:
</p>

<ul style={{ textAlign: "left" }}>
    <li>Disables further attacks until the animation finishes.</li>
    <li>Plays the attack animation using a trigger.</li>
    <li>Delays hitbox and trail effect activation for animation timing.</li>
    <li>Re-enables attacking and disables the hitbox after the swing.</li>
</ul>

<SyntaxHighlighter language="csharp" style={dracula}>
{`IEnumerator Attack()
{
    canAttack = false; 
    animator.SetTrigger("Attack");
    
    yield return new WaitForSeconds(.7f);
    swordCollider.enabled = true;
    trailRenderer.enabled = true;
    
    yield return new WaitForSeconds(1f);
    trailRenderer.enabled = false;
    canAttack = true;
    swordCollider.enabled = false;
}`}
</SyntaxHighlighter>

<h5>Roll</h5>
<p>
    The <code>Roll</code> coroutine allows the player to perform a short evasion movement, temporarily disabling standard movement input:
</p>

<ul style={{ textAlign: "left" }}>
    <li>Locks movement during the roll.</li>
    <li>Applies velocity in the player’s forward direction.</li>
    <li>Restores normal state when the roll completes.</li>
</ul>

<SyntaxHighlighter language="csharp" style={dracula}>
{`IEnumerator Roll()
{
    isRolling = true;
    animator.SetTrigger("Roll");

    Vector3 rollDirection = transform.forward;

    float timer = 0f;
    while (timer < rollDuration)
    {
        rb.velocity = rollDirection * rollSpeed;
        timer += Time.deltaTime;
        yield return null;
    }

    rb.velocity = Vector3.zero;
    isRolling = false;
}`}
</SyntaxHighlighter>

<h5>GrabSword</h5>
<p>
    The <code>GrabSword</code> coroutine is triggered when the player presses <code>G</code> near the sword in the dream scene. It initiates a short cutscene-like moment:
</p>

<ul style={{ textAlign: "left" }}>
    <li>Repositions the player to the sword’s grab point.</li>
    <li>Plays the grab animation using a trigger.</li>
    <li>Disables the world sword and enables equipped versions.</li>
    <li>Removes the barrier wall to progress the scene.</li>
</ul>

<SyntaxHighlighter language="csharp" style={dracula}>
{`IEnumerator GrabSword()
{
    hasGrabbedSword = true;
    transform.position = grabSwordPosition.position;
    animator.SetTrigger("Grab");

    yield return new WaitForSeconds(1.2f);
    sword.SetActive(false);
    sword_hand.SetActive(true);
    dagger_hand.SetActive(true);
    dagger_back.SetActive(true);
    removableWall.SetActive(false);
}`}
</SyntaxHighlighter>



<h4>Death and Reset States</h4>

<p>
    The <code>IsDead</code> boolean is used to trigger a death animation.  
    When active, it disables movement and combat entirely.  
    A reset function clears this flag if the player respawns or retries the level.
</p>

<SyntaxHighlighter language="csharp" style={dracula}>
{`animator.SetBool("IsDead", true); // on death
animator.SetBool("IsDead", false); // on reset`}
</SyntaxHighlighter>

<h4>Summary of Animation Techniques</h4>

<ul style={{ textAlign: "left" }}>
    <li><strong>Blend Tree</strong> driven by <code>Speed</code> for movement transitions</li>
    <li><strong>Bools</strong> (<code>IsRunning</code>, <code>IsCrouching</code>, <code>IsDead</code>) for conditional states</li>
    <li><strong>Triggers</strong> for one-shot actions like <code>Attack</code>, <code>Roll</code>, <code>Grab</code>, <code>Equip</code></li>
    <li><strong>Coroutines</strong> to manage timing of animations and gameplay logic (sword trail, hitbox activation)</li>
</ul>

<p>
    This setup ensures that animations remain responsive and synced to input while allowing flexibility for combat, stealth, and environmental interaction.
</p>







<br/>
<h3>Shadow System: Light Detection, Shadow Power, and Teleportation</h3>

    <p>
        A central pillar of gameplay in <strong>The Curse of Erephos</strong> is the dynamic relationship between light and shadow.  
        This system influences not just stealth mechanics, but the player's access to abilities and traversal tools.  
        Three key systems work together to bring this to life:
    </p>

    <ul style={{ textAlign: "left" }}>
        <li><strong>Light Detection:</strong> Determines whether the player is currently exposed to light or hidden in shadow using raycasting logic.</li>
        <li><strong>Shadow Power System:</strong> Tracks and displays the player's available energy, which increases while hidden and fuels supernatural abilities.</li>
        <li><strong>Teleportation:</strong> A core ability that consumes shadow energy and allows the player to rapidly relocate, especially between safe shadowed zones.</li>
    </ul>

    <p>
        With this system, players are encouraged to stay in shadow to remain unseen and recharge their power.  
        In turn, this power can be spent to execute special maneuvers like teleportation to bypass danger or traverse gaps.  
        The result is a gameplay experience that rewards patience, positioning, and planning, making the environment itself a key part of the player’s strategy.
    </p>
<br/>
<h4>Light Detection System</h4>
  <p>
    The Light Detection System is the backbone of the shadow-based gameplay. It determines whether the player is in shadow or exposed to light by performing raycasts 
    from two points on the player: the head and the feet. If both points are blocked from light, the player is considered to be fully in shadow.
  </p>
  <p>
    This system dynamically evaluates lighting conditions each frame using both <strong>directional light</strong> and <strong>non-directional light</strong> sources. 
    Rather than relying on visual cues like mesh color, the system sets a boolean <code>IsInShadow</code> that other scripts can read 
    and respond to in real time.
  </p>

  <h4>Implementation</h4>

  <p>
    The system uses raycasting to detect light exposure:
  </p>

  <ul style={{ textAlign: "left" }}>
    <li>
      <strong>Directional Light:</strong> Rays are cast from the head and feet <em>opposite</em> the directional light’s forward vector.
    </li>
    <li>
      <strong>Dynamic Light:</strong> The system finds all active lights in the scene and performs a proximity check. If a light is nearby, a raycast checks whether that light is obstructed.
    </li>
    <li>
      If <strong>any ray reaches a light</strong>, the player is considered illuminated.
      If <strong>all rays are blocked</strong>, the player is in shadow, and <code>IsInShadow</code> is set to true.
    </li>
  </ul>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`private void CheckLighting()
{
    bool isInLight = false;

    isInLight = CheckDirectionalLight(lightCheckPointHead) || CheckDirectionalLight(lightCheckPointFeet);
    isInLight = isInLight || CheckDynamicLights(lightCheckPointHead) || CheckDynamicLights(lightCheckPointFeet);

    IsInShadow = !isInLight;
}`}
  </SyntaxHighlighter>

  <p>
    Directional lighting is evaluated like this:
  </p>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`private bool CheckDirectionalLight(Transform checkPoint)
{
    Vector3 lightDirection = -directionalLight.transform.forward;
    return !Physics.Raycast(checkPoint.position, lightDirection, lightCheckDistance);
}`}
  </SyntaxHighlighter>

  <p>
    Non-directional lights are evaluated by checking if any nearby lights are visible (unobstructed):
  </p>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`private bool CheckDynamicLights(Transform checkPoint)
{
    Light[] allLights = FindObjectsOfType<Light>();
    foreach (Light light in allLights)
    {
        if (light.type != LightType.Directional &&
            Vector3.Distance(checkPoint.position, light.transform.position) <= dynamicLightCheckRadius)
        {
            Vector3 directionToLight = (light.transform.position - checkPoint.position).normalized;
            float distanceToLight = Vector3.Distance(checkPoint.position, light.transform.position);

            if (!Physics.Raycast(checkPoint.position, directionToLight, distanceToLight))
            {
                return true;
            }
        }
    }
    return false;
}`}
  </SyntaxHighlighter>
  <p>
    This system creates the foundation for stealth and power-based mechanics by providing reliable and performant feedback about the player’s lighting environment.
  </p>




  <h3>Shadow Power System</h3>

  <p>
    The Shadow Power system serves as the player’s core energy mechanic, enabling supernatural abilities like teleportation.  
    Shadow power is gained by remaining in darkness and drained over time when exposed to light.  
    This encourages players to stay hidden not just for stealth, but also to maintain their power.
  </p>

  <p>
    The player’s current shadow energy is represented by a <strong>UI bar</strong> on the canvas. As the value fills or depletes, the bar reflects the current energy level in real time.
  </p>

  <h3>Behavior</h3>

  <ul style={{ textAlign: "left" }}>
    <li><strong>In Shadow:</strong> Shadow power increases at a steady <code>fillRate</code> per second.</li>
    <li><strong>In Light:</strong> Shadow power drains over time at a slower <code>drainRate</code>.</li>
    <li><strong>Cap:</strong> Shadow energy is clamped between 0 and <code>maxShadowPower</code> (100).</li>
    <li><strong>UI:</strong> The bar fill amount is updated every frame based on current shadow power.</li>
  </ul>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`void Update()
{
    if(playerLightDetector != null && playerLightDetector.IsInShadow)
    {
        shadowPower += fillRate * Time.deltaTime;
    }
    else 
    {
        shadowPower -= drainRate * Time.deltaTime;
    }

    shadowPower = Mathf.Clamp(shadowPower, 0f, maxShadowPower);

    if(shadowBarFill != null)
    {
        shadowBarFill.fillAmount = shadowPower / maxShadowPower;
    }
}`}
  </SyntaxHighlighter>

  <p>
    The system reads from <code>PlayerLightDetector.IsInShadow</code>, which is calculated via the raycasting logic described in the Light Detection System.  
    This creates a live feedback loop: the player’s positioning directly affects power gain/loss, rewarding stealthy movement.
  </p>

  <h3>Spending Shadow Power</h3>
  <p>
    Special abilities like teleportation use the <code>SpendShadow()</code> method, which deducts a set amount from the current pool.  
    This function ensures the bar UI remains in sync and that power never exceeds boundaries:
  </p>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`public void SpendShadow(float amount)
{
    shadowPower -= amount;
    shadowPower = Mathf.Clamp(shadowPower, 0f, maxShadowPower);
    if (shadowBarFill != null)
    {
        shadowBarFill.fillAmount = shadowPower / maxShadowPower;
    }
}`}
  </SyntaxHighlighter>

  <p>
    This mechanic forms the backbone of the player's supernatural toolkit.  
    The player must manage this resource carefully — using it too often without returning to shadow may leave them vulnerable and powerless.
  </p>


<iframe 
    src="https://drive.google.com/file/d/1rT1w1qv7-FmGMaAmUkLXxc3MJSMabb6M/preview" 
    width="100%" 
    height="400"
    allow="autoplay">
  </iframe>
  <figcaption>Light Detections.</figcaption>


<br/>
<h3>Teleportation System</h3>

  <p>
    The teleportation mechanic in The Curse of Erephos is a core tool that allows the player to blink to a new location within a limited range.  
    The ability is activated via a targeting system that displays a marker on valid surfaces and can only be used when the player has sufficient <strong>shadow power</strong>.  
    This makes teleportation both powerful and limited, requiring players to manage their energy carefully and time their use with intent.
  </p>

  <h3>Core Mechanics</h3>
  <ul style={{ textAlign: "left" }}>
    <li><strong>Key Hold (T):</strong> Shows a visual marker on valid surfaces within range.</li>
    <li><strong>Key Release:</strong> Initiates the teleport if the shadow power bar has enough energy.</li>
    <li><strong>Cooldown:</strong> Prevents rapid re-use of the ability.</li>
    <li><strong>Visual Feedback:</strong> Teleportation is paired with particle effects at the origin and destination.</li>
    <li><strong>Energy Cost:</strong> Each teleport consumes a set amount of shadow power.</li>
  </ul>

  <h3>Input and Activation Logic</h3>
  <p>
    Teleportation begins by holding <code>T</code>, which casts a ray from the camera forward and places a marker on the surface hit.  
    Releasing <code>T</code> initiates the teleport if conditions are met:
  </p>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`if (Input.GetKeyDown(KeyCode.T) && shadowPower.shadowPower > shadowCost)
{
    ShowTeleportMarker();
}
if (Input.GetKeyUp(KeyCode.T) && Time.time > lastTeleportTime + teleportCooldown)
{
    if (shadowPower != null && shadowPower.shadowPower >= shadowCost && markerInstance.activeSelf)
    {
        TeleportToMarker();
        markerInstance.SetActive(false);
    }
}`}
  </SyntaxHighlighter>

  <h3>Target Marker System</h3>
  <p>
    The system spawns a visual marker on any valid surface hit by the forward ray (ignoring the player's own collider).  
    This gives the player clear feedback on where they’ll land before committing to a teleport.
  </p>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`void ShowTeleportMarker()
{
    Vector3 origin = Camera.main.transform.position + Camera.main.transform.forward * 2f;
    Ray ray = new Ray(origin, Camera.main.transform.forward);
    RaycastHit hit;

    if (Physics.Raycast(ray, out hit, maxTeleportDistance))
    {
        if (hit.collider.gameObject == gameObject || hit.collider.transform.root == transform)
            return;

        markerInstance.SetActive(true);
        markerInstance.transform.position = hit.point + Vector3.up * 0.01f;
        markerInstance.transform.rotation = Quaternion.FromToRotation(Vector3.up, hit.normal);
    }
    else
    {
        markerInstance.SetActive(false);
    }
}`}
  </SyntaxHighlighter>

  <h3>Teleport Execution</h3>
  <p>
    Upon confirmation, the player is teleported to the marker’s location, shadow power is reduced, and visual effects are triggered using a coroutine.
  </p>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`void TeleportToMarker()
{
    transform.position = markerInstance.transform.position;
    shadowPower.SpendShadow(shadowCost);
    lastTeleportTime = Time.time;

    StartCoroutine(TeleportWithParticles(markerInstance.transform.position));
}`}
  </SyntaxHighlighter>

  <h3>Teleport Visual Effects</h3>
  <p>
    A coroutine adds a short delay and plays particle effects at both the start and end points for visual immersion.
  </p>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`IEnumerator TeleportWithParticles(Vector3 newPosition)
{
    if (teleportEffect)
    {
        Vector3 pos = new Vector3(transform.position.x, transform.position.y+1f, transform.position.z);
        ParticleSystem effect = Instantiate(teleportEffect, pos, Quaternion.identity);
        Destroy(effect.gameObject, 1f);
    }

    yield return new WaitForSeconds(0.4f);

    transform.position = newPosition;

    if (teleportEffect)
    {
        newPosition.y += 1f;
        ParticleSystem effect = Instantiate(teleportEffect, newPosition, Quaternion.identity);
        Destroy(effect.gameObject, 1f);
    }
}`}
  </SyntaxHighlighter>

  <h3>Planned Enhancements</h3>
  <ul style={{ textAlign: "left" }}>
    <li>No current way to cancel teleport destination manually. Needs adjustment if the player changes their mind while picking a location.</li>
    <li>Teleport restriction to valid <strong>shadow-only locations</strong>.</li>
    <li>Visual feedback when teleport fails.</li>
    <li><strong>Dissolve/blur effects</strong> to amplify the supernatural feel.</li>
  </ul>






</section>
      


    <div className="section-divider"></div>


<section>
  <h2>NPC Overview</h2>

  <p>
    The NPCs in the game consists of two distinct enemy types, each with unique behaviors, aesthetics, and roles within the stealth-action loop: the <strong>Light Bot</strong> and the <strong>Brut</strong>.  
    Both enemies use Unity’s <strong>NavMeshAgent</strong> for movement and rely on internal state machines to manage behaviors like idling, patrolling, chasing, or attacking.
    Their animations are driven by these states, with transitions triggered in response to detection events or combat conditions.
  </p>

  <h3>Light Bot</h3>
  <p>
    The Light Bot is a mobile, patrolling construct powered by internal light. Its design emphasizes an otherworldly aesthetic — glowing from within, with animated inner joints that radiate illumination.  
    It will patroll between waypoints until it detects the player. Once alerted, it enters a chase state. If the player escapes, it will eventually return to its patrol route.
  </p>

  <h3>Brut</h3>
  <p>
    The Brut is equipped with a battle axe. Unlike the Light Bot, it remains stationary — sitting idle until a player enters its detection range.  
    Upon spotting the player, the Brut stands, activates its attack logic, and uses a ranged light-based projectile to engage. If the player escapes, the Brut returns to its seated idle state.
  </p>

<br/>
    <h3>Light Bot: Patrolling Construct</h3>

  <p>
    The <strong>Light Bot</strong> is a glowing construct powered by light, designed as an active threat that patrols the environment and pursues the player upon detection.  
    It uses internal lights and a shader-enhanced skeletal mesh to visually represent its dependence on light, reinforcing the theme that light is not always benevolent in this world.
  </p>

  <p>
    Behaviorally, the Light Bot patrols along preset waypoints using <strong>Unity’s NavMeshAgent</strong>. When the player enters its vision cone, it transitions into a chase state,  
    attacks when in range, and returns to patrol if the player escapes. Animations are tightly linked to its internal state, with visual and audio cues for transitions.
  </p>

  <h3>Behavior States</h3>
  <p>
    The Light Bot uses a simple <code>enum</code>-based finite state machine to manage its behavior:
  </p>

  <ul style={{ textAlign: "left" }}>
    <li><strong>Patrolling:</strong> Navigates between waypoints.</li>
    <li><strong>Chasing:</strong> Pursues the player if detected within field of view.</li>
    <li><strong>Investigating:</strong> Moves to the last known player location.</li>
    <li><strong>LookingAround:</strong> Brief idle state before returning to patrol.</li>
    <li><strong>Attacking:</strong> Fires a light-based projectile from its weapon.</li>
  </ul>

  <p>
    State transitions are handled in <code>Update()</code>, and the bot’s speed is passed to the Animator:
  </p>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`animator.SetFloat("Speed", agent.velocity.magnitude);`}
  </SyntaxHighlighter>

  <h3>Vision Detection</h3>
  <p>
    The Light Bot performs a proximity check using <code>Physics.OverlapSphere()</code> and then confirms line-of-sight with a <code>Raycast</code> inside a cone-shaped field of view:
  </p>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`bool CanSeePlayer()
{
    Collider[] hits = Physics.OverlapSphere(transform.position, sightRange, playerLayer);
    foreach (var hit in hits)
    {
        Vector3 eyePos = transform.position + Vector3.up * eyeHeight;
        Vector3 dirToTarget = (hit.transform.position - eyePos).normalized;
        float angle = Vector3.Angle(transform.forward, dirToTarget);
        if (angle < viewAngle / 2f)
        {
            if (Physics.Raycast(eyePos, dirToTarget, out RaycastHit hitInfo, sightRange))
            {
                if (hitInfo.collider.CompareTag("Player"))
                {
                    target = hit.transform;
                    return true;
                }
            }
        }
    }
    return false;
}`}
  </SyntaxHighlighter>

  <h3>Combat & Attack</h3>
  <p>
    When the player is within <code>attackRange</code> and visible, the Light Bot stops moving and launches a light projectile using an attack animation.  
    After attacking, it waits for a delay before it can attack again:
  </p>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`IEnumerator Attack()
{
    agent.isStopped = true;
    animator.SetTrigger("Attack");
    hasAttacked = true;

    yield return new WaitForSeconds(.85f);

    Vector3 direction = (target.position + Vector3.up * 1.2f) - weaponMuzzlePoint.position;
    Quaternion lookRotation = Quaternion.LookRotation(direction.normalized);
    Instantiate(lightSlashPrefab, weaponMuzzlePoint.position, lookRotation);

    yield return new WaitForSeconds(attackDelay);
    hasAttacked = false;
    agent.isStopped = false;
    currentState = CanSeePlayer() ? NPCState.Chasing : NPCState.Investigating;
}`}
  </SyntaxHighlighter>

  <h3>Animations</h3>
  <p>
    The Light Bot transitions between animation states based on behavior:
  </p>

  <ul style={{ textAlign: "left" }}>
    <li>Walk animations play while patrolling or chasing.</li>
    <li>Equipping animation is triggered when detection occurs.</li>
    <li>Attack and look-around animations play during combat and investigation.</li>
    <li>Animator booleans like <code>IsChasing</code> and <code>LookAround</code> control transitions.</li>
  </ul>

  <img src="/images/LightBotAnimator.png" alt="Light Bot Animator Tree" className="full-width-img" />
  <figcaption>Animator structure for Light Bot transitions.</figcaption>

  <h3>Death & Visual Effects</h3>
  <p>
    When defeated, the Light Bot disables its NavMeshAgent and plays a fade-out sequence:
  </p>

  <ul style={{ textAlign: "left" }}>
    <li>All light sources on the bot fade to black over time.</li>
    <li>A special shader material on its joints gradually fades using a <code>_Fade</code> parameter.</li>
    <li>The bot’s collider and agent are disabled to prevent further interaction.</li>
  </ul>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`IEnumerator FadeLights(float duration)
{
    float elapsed = 0f;
    while (elapsed < duration)
    {
        float factor = Mathf.Lerp(1f, 0f, elapsed / duration);
        foreach (var light in lightsToFade)
            light.intensity = factor;

        elapsed += Time.deltaTime;
        yield return null;
    }
}`}
  </SyntaxHighlighter>

  <h3>Demo Video</h3>
  <p>
    The following video demonstrates the Light Bot patrolling, detecting the player, attacking, and dying:
  </p>

  <iframe 
    src="https://drive.google.com/file/d/1S_1TuR94_NrKHsWnZuJFtG2SIiv-cjAx/preview" 
    width="100%" 
    height="400"
    allow="autoplay">
  </iframe>
  <figcaption>Light Bot AI demonstration in gameplay.</figcaption>






<br/>
<h3>Brut: Stationary Guardian</h3>

  <p>
    The <strong>Brut</strong> is a stationary enemy that remains seated until it detects the player within a certain range.  
    It serves as a static obstacle in chokepoints and key locations, emphasizing awareness and planning over movement.  
    Unlike the Light Bot, the Brut does not patrol, but its ability to engage at range makes it a dangerous opponent in tight corridors.
  </p>

  <p>
    Once the Brut detects the player, it transitions through a staged animation sequence: standing up, chasing, and eventually attacking using a light-based projectile.  
    If the player escapes, the Brut will look around briefly before returning to its seated idle position.  
    Like the Light Bot, it uses Unity’s <strong>NavMeshAgent</strong> for controlled navigation and state-based animation logic.
  </p>

  <h3>Behavior States</h3>
  <p>
    The Brut’s behavior is defined through an <code>enum</code>-based finite state machine with the following phases:
  </p>

  <ul style={{ textAlign: "left" }}>
    <li><strong>Sitting:</strong> Default idle pose with no movement.</li>
    <li><strong>StandingUp:</strong> Plays stand-up animation when the player is detected.</li>
    <li><strong>Chasing:</strong> Actively moves toward the player’s last known location.</li>
    <li><strong>Attacking:</strong> Fires a projectile from its weapon if in range.</li>
    <li><strong>Investigating:</strong> Moves to last seen position if the player is lost.</li>
    <li><strong>LookingAround:</strong> Pauses and surveys area before returning.</li>
    <li><strong>ReturningToSeat:</strong> Navigates back to original position.</li>
    <li><strong>SittingDown:</strong> Plays sit-down animation to return to idle.</li>
  </ul>

  <h3>Detection & Activation</h3>
  <p>
    When the player enters the Brut's vision range and cone, it plays a stand-up animation and transitions to an active combat state:
  </p>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`void SittingUpdate()
{
    if (CanSeePlayer() && (currentState == NPCState.Sitting || currentState == NPCState.SittingDown))
    {
        animator.SetTrigger("StandUp");
        currentState = NPCState.StandingUp;
        StartCoroutine(DelayThenChase());
    }
}`}
  </SyntaxHighlighter>

  <p>
    The <code>DelayThenChase()</code> coroutine adds a delay during the standing animation before switching to the chase state:
  </p>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`IEnumerator DelayThenChase()
{
    agent.isStopped = true;
    yield return new WaitForSeconds(standUpDelay); 
    agent.isStopped = false;

    lastKnownPosition = target.position;
    agent.SetDestination(lastKnownPosition);
    animator.SetBool("IsChasing", true);
    currentState = NPCState.Chasing;
}`}
  </SyntaxHighlighter>

  <h3>Combat & Attacks</h3>
  <p>
    The Brut fires a projectile from its axe when the player is within attack range. After attacking, it returns to chasing or begins looking around if the player is lost:
  </p>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`IEnumerator Attack()
{
    agent.isStopped = true;
    animator.SetTrigger("Attack");
    hasAttacked = true;

    yield return new WaitForSeconds(attackDelay);
    Instantiate(lightSlashPrefab, weaponMuzzlePoint.position, weaponMuzzlePoint.rotation);
    
    hasAttacked = false;
    agent.isStopped = false;

    currentState = CanSeePlayer() ? NPCState.Chasing : NPCState.LookingAround;
    if (currentState == NPCState.LookingAround)
        StartCoroutine(LookAroundThenReturn());
}`}
  </SyntaxHighlighter>

  <h3>Return to Idle</h3>
  <p>
    If the player escapes, the Brut enters a temporary "look around" state before walking back to its original sitting point and resuming idle:
  </p>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`IEnumerator LookAroundThenReturn()
{
    yield return new WaitForSeconds(1.5f);
    animator.SetBool("LookAround", true);
    agent.isStopped = true;
    yield return new WaitForSeconds(lookAroundDuration);
    animator.SetBool("LookAround", false);
    agent.isStopped = false;

    currentState = NPCState.ReturningToSeat;
    animator.SetBool("IsChasing", false);
    agent.SetDestination(sittingPoint);
}`}
  </SyntaxHighlighter>

  <p>
    Once it reaches the seat, it plays the sit-down animation and resumes the <code>Sitting</code> state:
  </p>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`IEnumerator SitDownDelay()
{
    animator.SetTrigger("SitDown");
    yield return new WaitForSeconds(0.62f);
    animator.SetBool("IsSitting", true);
    currentState = NPCState.Sitting;
}`}
  </SyntaxHighlighter>

  <h3>Animator System</h3>
  <p>
    The Brut's animation transitions are tied directly to state changes and include:
  </p>

  <ul style={{ textAlign: "left" }}>
    <li><strong>Idle Sit</strong> (default)</li>
    <li><strong>Stand Up</strong> (trigger)</li>
    <li><strong>Walk/Chase</strong> (speed-based blend)</li>
    <li><strong>Attack</strong> (triggered)</li>
    <li><strong>Sit Down</strong> (trigger + boolean)</li>
    <li><strong>Look Around</strong> (boolean loop)</li>
  </ul>

  <img src="/images/BrutAnimator.png" alt="Brut Animator Tree" className="full-width-img" />
  <figcaption>Animator state machine for the Brut NPC.</figcaption>

  <h3>Vision Logic</h3>
  <p>
    The Brut uses the same field-of-view + raycast detection system as the Light Bot:
  </p>

  <SyntaxHighlighter language="csharp" style={dracula}>
{`bool CanSeePlayer()
{
    Collider[] hits = Physics.OverlapSphere(transform.position, sightRange, playerLayer);
    foreach (var hit in hits)
    {
        Vector3 dir = (hit.transform.position - (transform.position + Vector3.up * eyeHeight)).normalized;
        float angle = Vector3.Angle(transform.forward, dir);
        if (angle < viewAngle / 2f)
        {
            if (Physics.Raycast(transform.position + Vector3.up * eyeHeight, dir, out RaycastHit hitInfo, sightRange))
            {
                if (hitInfo.collider.CompareTag("Player"))
                {
                    target = hit.transform;
                    return true;
                }
            }
        }
    }
    return false;
}`}
  </SyntaxHighlighter>

  <h3>Demo Video</h3>
  
  <iframe 
    src="https://drive.google.com/file/d/1CveLFGAjJ8kr5y7iKCeNRml23NnC2x6u/preview" 
    width="100%" 
    height="400"
    allow="autoplay">
  </iframe>
  <figcaption> Brut AI reacting to player presence and returning to idle.</figcaption>






</section>

 <div className="section-divider"></div> 
<section>
  <h2>Level Design & Game Flow</h2>

  <h3>Summary of Demo Levels</h3>
  <p>
    The current demo is split into two sequential levels designed to introduce the player to movement and stealth mechanics, along with some background about the world the player finds themselves in.
    This represents a small picture of the intended full experience, blending narrative and gameplay seamlessly while teaching core mechanics through natural progression.
  </p>

  <h4>Level 1: Dream, Cell, and Escape</h4>
  <ul style={{ textAlign: "left" }}>
    <li><strong>Dream Tutorial:</strong> The game opens in a surreal, dreamlike corridor where the player learns basic controls (movement, crouch, interaction). Lore is delivered through whispers and visual prompts.</li>
    <li><strong>Back to Reality:</strong> The player awakens in a prison cell, echoing the dream space, and begins the actual escape.</li>
    <li><strong>Escape the Cell:</strong> There are two primary escape methods—find a hidden key and unlock the door, or use a newly acquired teleport ability to phase through the bars.</li>
    <li><strong>Brut Encounter:</strong> After escaping the cell, the player must confront a stationary Brut who guards the exit. </li>
    <li><strong>Level Exit:</strong> After defeating or bypassing the Brut, the player opens the exit gate and proceeds into the next area.</li>
  </ul>

  <h4>Level 2: Patrol Floor & Portal</h4>
  <ul style={{ textAlign: "left" }}>
    <li><strong>Two-Floor Prison Gauntlet:</strong> The second level features a larger, multi-level interior filled with patrolling Light Bots. The player must carefully navigate both floors while managing shadow power and avoiding detection.</li>
    <li><strong>Stealth Emphasis:</strong> Shadow zones, teleportation paths, and alternative routes allow for multiple approaches. Detection is lethal — success depends on patience and awareness.</li>
    <li><strong>The Portal:</strong> At the top of the structure, the player activates a mysterious portal which warps them to the edge of the island.</li>
  </ul>

  <h3>Looking Forward</h3>
  <p>
    Upon exiting the prison, the player reaches the true beginning of their journey — the open-world island of Erephos.  
    Here, the scope expands: players will explore ruined sanctuaries, confront moral dilemmas, unlock new powers, and interact with factions still living in the shadow of past conflict.
  </p>

  <p>
    Future levels will focus on player choice, deeper stealth and traversal mechanics, narrative consequences, and unlocking the truth behind the shadow curse.  
    The prison was only the beginning… <em>the real journey is just beginning.</em>
  </p>
</section>

 <div className="section-divider"></div>

 <h3>Full Demo Playthrough</h3>
<p>
  The demo shows a complete playthrough, from the dream tutorial through both levels and ending at the portal exit.
  It demonstrates the main character systems, enemy AI, level design, and stealth mechanics in action.
</p>

<iframe 
  width="100%" 
  height="400" 
  src="https://www.youtube.com/embed/qs-ofQhwDqg?si=9CdGqhkNwR8Pd9W2" 
  title="Demo Playthrough" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen>
</iframe>

<figcaption>Complete demo walkthrough showcasing all implemented systems.</figcaption>


 <div className="section-divider"></div>
</section>

            

            {/* Game References */}
            <section>
                <h2>References</h2>

                <ul style={{textAlign: "left"}}>
                    <li><a href="https://learn.unity.com/tutorial/controlling-unity-camera-behaviour" target="_blank">Controlling Unity Camera Behavior - Unity Learn</a></li>
                    <li><a href="https://learn.unity.com/course/introduction-to-3d-animation-systems" target="_blank">Introduction to 3D Animation Systems - Unity Learn</a></li>
                    <li><a href="https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Physics.Raycast.html" target="_blank">Unity Documentation: Physics.Raycast</a></li>
                    <li><a href="https://www.youtube.com/watch?v=NeuxiCn_zR8&t=185s&ab_channel=SebastianGraves" target="_blank">Sebastian Graves - NPC AI Patrol Tutorial (YouTube)</a></li>

                    
                    <li><strong>Dishonored</strong> - Arkane Studios, 2012. Published by Bethesda Softworks.</li>
                    <li><strong>Aragami</strong> - Lince Works, 2016. Published by Lince Works.</li>
                    <li><strong>Sekiro: Shadows Die Twice</strong> - FromSoftware, 2019. Published by Activision.</li>

                    
                    <li><strong>ChatGPT</strong> - OpenAI. Used for code assistance, structuring documentation, and refining ideas.</li>
                </ul>
            </section>

            <footer>
                <p>© 2025 Michael Hamilton</p>
            </footer>
        </div>
    );
}

export default AdvGameProgrammingFinal;
