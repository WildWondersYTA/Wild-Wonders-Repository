# Wild Wonders Repository

This repository contains concept documentation and visual prototypes for the Wild Wonders chat experiences.

## Underwater Bioluminescent Reef Demo

A lightweight HTML/CSS/JS prototype that showcases the glassmorphism prompt UI inside an animated underwater backdrop now lives in [`demos/reef/`](demos/reef/).

### Previewing the demo

1. From the repository root, start a simple web server (Python 3 example shown below):

   ```bash
   python -m http.server 8000
   ```

2. In your browser, open [http://localhost:8000/demos/reef/](http://localhost:8000/demos/reef/).

3. Interact with the centered prompt input to watch the mock chat log and prompt history respond. Use the **Reduce Motion** control if you want to pause ambient animations.

You can also double-click `demos/reef/index.html` to open it directly, but some browsers restrict local file access for external assets. Running a local server avoids those issues.
