# Todo List Project

This Todo List application is built with React and demonstrates basic React hooks (`useState`, `useEffect`) and data handling with props. Users can add, edit, delete, and search for tasks, with data stored in `localStorage` for persistence.

## Features

- **Add Todos**: Create new tasks with a title, level, and status.
- **Edit/Delete Todos**: Modify or remove existing tasks.
- **Search**: Filter tasks by text.
- **Persistent Storage**: Tasks are saved to `localStorage`.

## Key Concepts

- **useState**: Manages state for todos, search queries, and input fields.
- **useEffect**: Loads todos from `localStorage` on initial render.
- **Props**: Used to pass data and functions between components.

## Components

- **Todo**: Manages the main state and logic.
- **TodoInput**: Handles user input for new todos.
- **TodoList**: Displays todos and passes edit/delete actions to each todo item.
- **TodoCart**: Renders individual todo items with edit/delete buttons.

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the app: `npm start`
