
# Color Change Project

This is a basic color change project created for learning purposes using Vite, React, and Tailwind CSS. The application allows users to change the background color of the screen by clicking on different colored buttons.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/sumit-dakua/react-background-changer.git
    cd color-change-project
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the development server:**
    ```sh
    npm run dev
    ```

    This will start the development server on `http://localhost:3000`.

## Usage

Once the development server is running, you can open the application in your browser. You will see a set of buttons with different colors. Clicking on a button will change the background color of the screen to the color of the button. There is also a reset button to revert the background color to the initial state.

### `App.jsx`

The main component that manages the state for the background color and renders the `ColorButton` components.

```jsx

```
### ColorButton.jsx

A functional component that renders a button with a specific color and updates the background color of the App component when clicked.

```

import React from 'react';

function ColorButton({ colorName, color, setColor }) {
  return (
    <button
      onClick={() => setColor(color)}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: color }}
    >
      {colorName}
    </button>
  );
}

export default ColorButton;
```



# React + Vite


