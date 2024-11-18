# React + TypeScript + Vite + Vitest for testing timeline project

To get this project to work in Vite with Hot Module Replacement(HMR), please simply run the following commands in the root folder:

npm install
npm run dev

1. How long you spent on the assignment?

I spent around 5 hours working on this assignment, which was the allocated time provided. This included designing the mockup, setting up the project, implementing the required features, and addressing issues that arose during development.(in the assets folder you will see the mockups)

2. What you like about your implementation?

I liked the interactive event editing idea, so for this specific scenario, the modal for editing event details provides an intuitive way to modify event properties.

I loved designing a dynamic timeline layout, as the events are dynamically placed in lanes based on their dates and durations, I needed to think in a way to get it done so in this manner I could create a solution to maintain a clean and organized view, also to provide a visual differentiation to each lane which makes the timeline visually appealing and easy to interpret.

Since I am working with familiar technologies, using the Context API for state management enabled me to centralize the application state effectively. This made it seamless to handle event updates and synchronize changes across components, additionally, leveraging Vite for rapid prototyping and React as the primary framework ensured a smooth and efficient development process for me.

Scalability, the implementation is modular, which allows modifications with ease.

3. What you would change if you were going to do it again?

Improved timeline navigation: Add zooming functionality to make it easier to navigate timelines with a large number of events or spanning multiple years.

Enhanced responsiveness: Ensure the timeline is fully responsive and optimized for mobile and tablet devices.

Direct event manipulation: Implement drag-and-drop functionality to allow users to directly adjust event positions or durations on the timeline.

Database integration: Store events in a backend database to enable persistence and multi-user access.

Performance optimization: Optimize rendering for timelines with a high number of events by implementing virtualization or other performance-focused techniques.

4. How you made your design decisions?

Assignment-Centric approach: The design focuses on simplicity and usability, ensuring the project to be easily view, interact with, and edit events.

Visual inspiration: I referred to other timeline designs for inspiration, including those used in project management tools and visual history timelines. This helped me strike a balance between functionality and visual clarity.

Time constraints: Given the limited time, I prioritized essential features like event visualization, editing, and lane management over enhancements like zooming, drag-and-drop or database integration.

5. How you would test this if you had more time?

Unit tests: even I have done one test to the Event component, writing tests for the rest of components (e.g., EventEdit, Timeline, Timelines) just to ensure they render correctly and handle props as expected.

Integration tests: Test interactions between components.

More edge case testing: Ensure the application handles edge cases like overlapping events, events with invalid dates, or timelines with no events.

Visual regression testing: Use tools to test how the timeline renders across different screen sizes and browsers.

User testing: Gather feedback from potential users to identify pain points and improve usability.





# timelineProject
