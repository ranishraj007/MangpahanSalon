# Project Overview

This is a React-based web application for a beauty salon called "Mangpahan Salon". It uses Vite for fast development and bundling, and Tailwind CSS for styling. The app features multiple pages, including Home, Services, Gallery, About, and Contact, with routing handled by React Router. Framer Motion is used for page transitions and animations.

## Building and Running

To get the project up and running, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start a local development server, and you can view the application in your browser at the address provided.

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create a `dist` folder with the production-ready files.

4.  **Lint the code:**
    ```bash
    npm run lint
    ```
    This will check the code for any linting errors.

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Custom styles can be added to the `src/index.css` file, and the theme can be customized in the `tailwind.config.js` file.
*   **Components:** Reusable components are located in the `src/components` directory.
*   **Pages:** The main pages of the application are in the `src/pages` directory.
*   **Routing:** The application uses React Router for routing. The routes are defined in the `src/App.jsx` file.
*   **State Management:** The project does not appear to have a dedicated state management library like Redux or Zustand. For simple state management, React's built-in `useState` and `useContext` hooks are likely used.
