import { useState } from "react"

function App() {
  const [color, setColor] = useState("pink")

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}
   >
    <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
      <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-2xl ">
        <button  onClick={()=>setColor("red")} className="px-4 py-1 text-white rounded-full shadow-lg outline-none " style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setColor("yellow")} className="px-4 py-1 text-white rounded-full shadow-lg outline-none " style={{backgroundColor:"yellow"}}>Yellow</button>
        <button onClick={()=>setColor("black")} className="px-4 py-1 text-white rounded-full shadow-lg outline-none " style={{backgroundColor:" black"}}> black</button>
        <button onClick={()=>setColor("blue")} className="px-4 py-1 text-white rounded-full shadow-lg outline-none " style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>setColor("brown")} className="px-4 py-1 text-white rounded-full shadow-lg outline-none " style={{backgroundColor:"brown"}}>Brown</button>
      </div>
    </div>
   </div>
  )
}

export default App
