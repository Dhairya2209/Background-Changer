// import { useState } from "react"


// function App() {
//   const [color,setColor]= useState("olive")

//   return (
//     <div className="w-full h-screen duration-200" 
//     style={{backgroundColor: color}}>

//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"></div>
//         <button
//         onClick={() => setColor("Red")}
//         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//         style={{backgroundColor: "red"}}
//         >Red</button>
//         <button
//         onClick={() => setColor("Green")}
//         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//         style={{backgroundColor: "red"}}
//         >Green</button>
//         <button
//         onClick={() => setColor("Blue")}
//         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//         style={{backgroundColor: "red"}}
//         >Blue</button>
//         <button
//         onClick={() => setColor("Black")}
//         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//         style={{backgroundColor: "red"}}
//         >Black</button>
// //       </div>

//     </div>
//   )
// }

// export default App



import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'red'}}
          >Red</button>

          <button
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'green'}}
          >Green</button>

          <button
          onClick={() => setColor('Blue')}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "Blue"}}
          >Blue</button>

          <button
          onClick={() => setColor("Black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: 'Black'}}
          >Black</button>
          
          </div>
      </div>
    </div>
  )
}

export default App