## Project Title

GBDA302 Week 6 Side Quest: Fox Desktop Pet - A Pixel-Art Interactive Companion
---

## Authors
Sofia Xu | s67xu | 21082052

Original starter code by Dr. Karen Cochrane and David Han.
Game design, world restructuring, mechanics design, fox interaction design, UI/UX decisions, and GenAI-assisted debugging by Sofia Xu.

---

## Description


---

## Learning Goals

Learning Goals:

- E

---

## Setup and Interaction Instructions
### How to Play

#### Movement: <br>
Use WASD or Arrow Keys to move the glowing presence freely through the world.

#### Objective: <br>
Explore memory rooms by entering and exiting through doors.

#### Room Logic: <br>
Rooms can only be entered or exited through door openings. <br>
Walls act as solid boundaries.

#### Zoom Controls: <br>
AUse the "+" and "–" buttons at the bottom-right corner to adjust zoom level. <br>
Zooming allows players to shift between overview and detailed inspection.

#### Core Memory: <br>
The central bedroom serves as the spatial and emotional anchor of the world, with all other rooms radiating outward from it.

#### Reset: <br>
Press R to reset player position.

---
## Iteration Notes
### a. Post-Playtest (Self-Playtesting)

#### 1. Player Representation Refinement <br>
Initial versions represented the player as a solid circle. This felt too literal and game-like. The design was revised to use a softly pulsing blue glow to represent presence rather than physical identity. This abstraction better aligned with the memory-based concept.

#### 2. Color Calibration and Transparency Adjustments <br>
Early room colors appeared greyed out due to transparency and blending with the dark background. Alpha values were removed and direct RGB values from the selected palette were applied. Desaturation is now controlled through interpolation rather than transparency layering, preserving vibrancy.

#### 3. Door-Based Collision Correction <br>
Initial collision logic only restricted exit but not entry, allowing unintended wall clipping. A previous-position tracking system was implemented to detect boundary crossing events, ensuring rooms can only be entered or exited through doors.

#### 4. Zoom Integration and Camera Refactor <br>
Adding zoom initially broke collision perception. Camera transformation order was restructured:

- Translate to screen center

- Apply scale

- Translate world relative to camera

UI elements are rendered outside the scaled context to remain consistent.

#### 5. Spatial Arrangement Improvements <br>
Furniture layouts were reorganized to better resemble real spaces:

- Bedroom includes bed, wardrobe, toys

- Toy store includes aisles and checkout counter

- Bathroom includes bathtub, sink, and toilet

- Classroom includes desks and board

This improves spatial readability and environmental storytelling.

### b. Post-Showcase: Planned Improvements

#### 1. Replace geometric placeholders with detailed furniture assets
Future iterations will replace the current primitive geometric shapes with illustrated furniture assets sourced from royalty-free libraries or generated through GenAI tools, allowing each room to feel more immersive and visually cohesive.

#### 2. Increase environmental detail and spatial variation
Rooms could be enhanced with additional environmental features such as wooden floor textures, patterned walls, expanded window placement, varied lighting, and more complex layouts. Introducing layered decoration and spatial asymmetry would strengthen realism and atmosphere.

#### 3. Introduce interactive memory characters
Beyond interactive objects, future versions may include subtle representations of people from memory (e.g., classmates, teachers, family members). These figures could appear as silhouettes or softly animated forms that react to proximity, expanding the emotional and social dimension of the experience.

#### 4. Expand the world into a life-stage progression map
The environment could gradually evolve from childhood rooms into middle school, high school, and university spaces, forming a chronological spatial journey. This would transform the project into a navigable timeline of personal growth and memory development.

#### 5. Add collectible memory fragments
Collectible objects (e.g., small glowing fragments, photographs, symbolic items) could be placed throughout rooms to encourage exploration. Collecting these items could contribute to narrative progression or unlock deeper layers of memory.

#### 6. Implement storyline progression and hidden memory unlocks
Completing certain rooms or collecting key memory fragments could unlock hidden or previously inaccessible spaces. These hidden rooms may reveal deeper narrative elements, fragmented dialogue, or symbolic environments, reinforcing the idea that memory unfolds gradually through exploration.

#### 7. Add ambient sound and atmospheric polish
Room-specific ambient audio and subtle sound cues could enhance immersion and emotional tone, further strengthening the reflective quality of the experience.

---

## Assets

All room elements and furniture were constructed using primitive geometry in p5.js.

Color selection was inspired by a warm pastel palette referenced online. 
Final RGB values were manually selected and adjusted for consistency within the project.

---

## GenAI

The original structural framework (JSON loading, camera interpolation system) was provided by Dr. Karen Cochrane and David Han.

During development, GenAI was used as a debugging assistant and architectural support tool. It assisted with:

- Refactoring collision logic

- Implementing zoom-safe camera transformations

- Correcting desaturation blending behavior

- Optimizing spatial boundary detection

- Improving modular structure clarity

All conceptual direction, system design, aesthetic decisions, color selection, spatial layout, and interaction mechanics were designed, implemented, and iteratively refined by Sofia Xu.

---
