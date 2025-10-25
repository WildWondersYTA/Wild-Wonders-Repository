# Underwater Bioluminescent Reef Chat Theme

## Concept Overview
- **Environment**: Submerged coral reef with glowing flora and fauna, filtered moonlight, and gentle currents.
- **Mood**: Calming yet vibrant, emphasizing flowing motion and soft luminescent color palettes.
- **Camera**: Slow dolly and parallax moves to convey depth without overwhelming chat legibility.

## Visual Palette
- **Primary Colors**: Deep teal (#064663), midnight blue (#011a32), and abyssal navy (#000b18).
- **Accent Colors**: Electric cyan (#31e6ff), violet bioluminescence (#725fff), and coral pink (#ff7ea8).
- **Lighting**: Dynamic caustic patterns on seafloor; subtle volumetric shafts from surface; rim lighting on interactive elements.
- **UI Finish**: Glassmorphism-inspired panels with soft gradients and frosted translucency for a smooth, minimal presentation that sits comfortably against the darker reef backdrop.

## Environment Composition
1. **Foreground**
   - Coral arches framing the chat window.
   - Animated anemones whose tentacles sway with current noise.
   - Bioluminescent plants that pulse softly when new messages arrive.
2. **Midground**
   - Rock formations and coral stacks providing layered depth.
   - Schools of small fish with spline-based swim cycles.
   - Interactive UI elements stylized as glowing shells.
3. **Background**
   - Parallax reef silhouettes fading into darkness.
   - Occasional manta ray silhouette gliding past.
   - Bubble columns rising to surface, with additive glow near top.

## Animation System
- **Current Simulation**: Shader-based vertex displacement using layered sine waves for kelp, coral polyps, and fabric banners.
- **Fish & Fauna**: Boids logic for schooling fish; keyframed manta ray path; particle system for drifting plankton.
- **Lighting Pulses**: Timeline-controlled emissive intensity, syncing with chat notifications via easing curves.
- **Bubble Particles**: GPU particle system with varying bubble sizes, refraction shader, and screen-space caustic highlights.

## Interaction Hooks
- **Message Arrival**: Nearest bioluminescent flora brighten and emit particle bursts; subtle ripple shader on chat panel.
- **User Typing**: Ambient glow around input field pulses in rhythm with typing speed.
- **System Alerts**: Radiant jellyfish floats into view, flashing accent colors before drifting away.

## UI Layout & Chat Interface
- **Core Structure**: A centered, gently curved HUD plate houses the main chat log while preserving maximum peripheral visibility for ambient reef motion. Corners use soft radius and inner shadows to reinforce a premium, polished feel.
- **Prompt Input**: A prominent text box sits in the vertical center of the screen, framed by thin bioluminescent borders. It is dedicated to prompt-based image generation, expanding smoothly when focused and providing inline prompt history chips beneath.
- **Controls**: Minimal iconography with hover-activated tooltips floats along the lower edge of the central panel, ensuring a clean UI. Secondary actions (save, remix, share) slide in as contextual overlays so the core prompt area remains uncluttered.
- **Responsive Behavior**: On narrower viewports, the prompt input compresses into a multi-line glass tile while the chat log shifts below it; on widescreen layouts the prompt anchors center stage with chat transcripts fading toward the right.

## Audio Design
- Low, resonant hum with occasional whale song motifs.
- Soft bubble pops for notification sounds.
- Muted chimes for user interactions to match calm aesthetic.

## Implementation Notes
- **Engine**: Optimized for WebGL/Three.js or Unity WebGL export.
- **Performance**: LOD for coral geometry; instanced fish with shader animation to minimize CPU cost.
- **Accessibility**: Maintain 4.5:1 contrast for chat text; provide option to reduce animation intensity.

## Asset Checklist
- Coral and rock meshes (LOD0-LOD2).
- Animated plant and anemone rigging files.
- Fish, jellyfish, manta ray models with swim cycles.
- Caustic light texture atlas and shader graphs.
- Ambient audio loops and notification sound effects.

## Next Steps
1. Build graybox layout in engine to validate readability.
2. Implement core lighting and water shaders.
3. Integrate chat UI with responsive layout.
4. Iterate on animation timings and notification feedback.
