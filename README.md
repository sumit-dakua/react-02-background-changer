
# Color Change Project

This is a basic color change project created for learning purposes using Vite, React, and Tailwind CSS. The application allows users to change the background color of the screen by clicking on different colored buttons.



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

import { useState } from 'react'
import ColorButton from './components/colorButton.jsx'

function App() {
  const [color, setColor] = useState("black")

  const colors= [
    { colorName: 'Red', color: 'red' },
    { colorName: 'Blue', color: 'blue' },
    { colorName: 'Green', color: 'green' },
    { colorName: 'Yellow', color: 'yellow' },
    { colorName: 'Orange', color: 'orange' },
    { colorName: 'Purple', color: 'purple' },
    { colorName: 'Pink', color: 'pink' },
    { colorName: 'Brown', color: 'brown' },
    { colorName: 'Black', color: 'black' },
    { colorName: 'Gray', color: 'gray' },
  ];

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "> 
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 

            {colors.map(({colorName, color})=>(
            <ColorButton key={colorName} colorName={colorName} color={color} setColor={setColor}/>
            ))}

            <button
              onClick={() => setColor("")}
              className="outline-none px-6 py-2 rounded-full text-black font-bold border-2 border-gray-300"
              style={{backgroundColor: "white", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1)"}}
            > Reset </button>
             
          </div>
        </div>
      </div>
    </>
  )
}

export default App

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


