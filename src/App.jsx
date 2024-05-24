import { useState } from 'react'
import ColorButton from './components/colorButton.jsx'

function App() {
  const [color, setColor] = useState("lavender")

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
              onClick={() => setColor("lavender")}
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
