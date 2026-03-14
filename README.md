## Project Title

GBDA302 Week 6 Side Quest: Fox Desktop Pet - A Pixel-Art Interactive Companion
---

## Authors
Sofia Xu | s67xu | 21082052

Original starter code by Dr. Karen Cochrane and David Han.
Game design, world restructuring, mechanics design, fox interaction design, UI/UX decisions, and GenAI-assisted debugging by Sofia Xu.

---

## Description
This project is an interactive pixel-art desktop pet experience where players raise and interact with a small fox living on a grassy canvas. The design focuses on creating a playful, low-pressure interaction that encourages experimentation through simple mouse and keyboard inputs.

The fox acts as an autonomous companion that wanders around the screen when idle. Players can interact with the fox by clicking different locations on the canvas, placing bones as toys, or triggering reactions through keyboard input. The fox responds with animations and sound effects, creating a reactive and multi-sensory interaction experience.

---

## Key mechanics

- Autonomous wandering: fox moves around the canvas when idle
- Click-to-move interaction allowing the player to guide the fox to any location
- Play Interaction: where clicking the fox causes it to purr and interact with you
- Bark action triggered by pressing the space bar or when eatting a bone
- Bone placement mechanic where players can drop bones for the fox to collect
- Reactive sound effects including footsteps, barking, and purring
- Pixel-art visuals and UI elements such as a bone toolbox


---

## Setup and Interaction Instructions
### How to Play

#### Mouse Controls: <br>
- Click anywhere on the canvas → The fox runs to that location.
- Click on the fox → The fox lies down and falls asleep.
- Click the bone icon in the top-left corner → Toggle bone placement mode.
- In bone mode, click anywhere on the canvas → Drop a bone for the fox.

#### Keyboard Controls: <br>
- Press Spacebar → The fox stops and barks.

#### Gameplay Interaction Loop: <br>

Players can:

- Guide the fox around the screen
- Play with the box by clicking on it
- Drop bones for the fox to collect
- Trigger bark animations and sound effects

When the fox reaches a bone, it automatically barks and eats it, causing the bone to disappear.

---
## Iteration Notes
### a. Post-Playtest (Self-Playtesting)
Three changes were made after testing the early version of the project:
#### 1. Improved Movement Consistency <br>
The fox’s wandering behavior originally used variable velocity that caused inconsistent speeds. This was changed to normalized movement vectors to create smoother and more predictable motion.

#### 2. Updated Bone Visual Design <br>
The initial bone design was too large and lacked visual clarity. The bone was redesigned using a pixel sprite with shading and outline to better match the scale of the fox and improve contrast with the background.

#### 3. Improved Interaction Logic for Bone Placement <br>
The bone placement mechanic was modified so that the fox always runs toward the clicked location, even when placing bones. This created a more intuitive interaction flow.

### b. Post-Showcase: Planned Improvements
Two improvements planned for future iterations include:
#### 1. Smarter Fox Movement and Interaction Logic
In a future iteration, the fox’s movement system will be expanded to support sequential path memory. Instead of immediately changing direction when the player clicks a new location, the fox will store each clicked position in a queue and travel to them one by one in order. This would create smoother and more predictable movement behavior.

Additionally, when multiple bones are placed on the canvas, the fox will detect and prioritize the closest bone as its next target. This proximity-based selection would make the fox appear more responsive and intelligent, as it would naturally choose the nearest toy to interact with rather than relying on random movement or player direction.

#### 2. Additional Visual Feedback Effects
Small particle effects such as dust puffs while running or floating “Zzz” bubbles while sleeping could enhance visual feedback and improve the sense of character personality.
---

## Assets

The following non-original assets were used in this project. All sound effects were sourced from Pixabay and are free to use under the Pixabay Content License.

- Footstep Sound Effect – Sound Effect by freesound_community from Pixabay [1]

- Fox Bark Sound Effect – Sound Effect by Ribhav Agrawal from Pixabay [2]

- Ground Landing Sound Effect – Sound Effect by Universfield from Pixabay [3]

- Snoring Sound Effect – Sound Effect by StrayCats Project from Pixabay [4]

The fox animation sprite sheet used in the project was provided as part of the course resources.

All user interface elements, including the pixel bone icon and bone sprite, were created programmatically using pixel drawing within the p5.js sketch.
---
## References

In-Text Reference List (ACM Style)

[1] freesound_community. 2021. Footstep Grass Sound Effect. Pixabay. https://pixabay.com

[2] Ribhav Agrawal. 2022. Dog/Fox Bark Sound Effect. Pixabay. https://pixabay.com

[3] Universfield. 2021. Snoring Sound Effect. Pixabay. https://pixabay.com

[4] StrayCats Project. 2021. Ground Landing Sound Effect. Pixabay. https://pixabay.com
---

## GenAI

The original structural framework for the p5play sprite animation system and project template was provided by Dr. Karen Cochrane and David Han as part of the course materials.

During development, GenAI was used as a debugging assistant and implementation support tool. It assisted with:

Refactoring fox movement logic to normalize velocity and produce consistent wandering speed

Implementing mouse-driven navigation and click-to-move behavior

Designing and integrating a pixel-based bone sprite using a matrix sprite renderer

Debugging animation state transitions for sleep, bark, wander, and movement states

Integrating sound effects (footsteps, bark, snore) and resolving playback conflicts

Improving interaction logic for bone placement and fox collision detection

GenAI also assisted in restructuring code for clarity, including modularizing bone rendering, toolbox UI logic, and sprite drawing functions.

All gameplay concepts, interaction mechanics, system design decisions, visual style choices, and iterative refinements were conceived, designed, and implemented by Sofia Xu.

---
