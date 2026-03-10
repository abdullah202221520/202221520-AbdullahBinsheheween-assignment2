# AI Usage Report

## 1. Project Structure Setup
* **Tool Used:** Cursor
* **Use Case:** Generating the initial directory structure and file hierarchy.
* **Benefit:** Saved time manually creating folders and ensured the structure matched the assignment's recommended layout (css/, js/, docs/).

## 2. Project Planning
* **Tool Used:** Gemini
* **Use Case:** Breaking down the assignment requirements into a checklist.
* **Benefit:** Helped clarify the "Responsive" and "Interactivity" requirements and provided a roadmap for the next steps.

## 3. CSS & Responsive Design Implementation
* **Tool Used:** Gemini
* **Use Case:** Generated the CSS `grid-template-columns` logic to create a responsive card layout for the "Projects" section without relying on complex media queries. Requested a comparison between Tailwind CSS and Vanilla CSS to decide on the best approach for the assignment.
* **Benefit:** The AI provided an efficient solution using `repeat(auto-fit, minmax(300px, 1fr))`, which automatically stacks project cards on mobile devices and expands them on desktops. This saved time on trial-and-error with pixel values.
* **Learning Outcome:** I learned how modern CSS Grid properties like `minmax()` and `auto-fit` can handle responsive design more cleanly than writing multiple `@media` breakpoints. I also better understood the distinction between Flexbox (1D layouts) and Grid (2D layouts).
* **Responsible Use & Modifications:** I reviewed the generated CSS to ensure it didn't use advanced properties I couldn't explain. I noticed the AI generated some styles that referenced elements that did not exit or referenced elements incorrectly, I removed those and correcly linked the styles that were incorrectly written. I manually tested the code in the browser DevTools by resizing the window to verify the grid collapsed correctly at different screen widths.

## 4. README File Generation
* **Tool Used:** Cursor
* **Use Case:** Assisted in creating a clear, concise README outline to explain the project purpose, setup steps, and AI usage context.
* **Benefit:** Ensured that all project instructions are clear and saved time in manually formatting the README.md file.
* **Learning outcome** I learned how to link to other files in markdown. I learned how to format code snippets in markdown to help users differntiate between code and text.
* **Responsible Use & Modification:**  The AI only generated the formatting for the file, I filled in the rest of the file myself.