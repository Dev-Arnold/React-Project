import React from 'react'
import { useState } from 'react'
// React hooks are like building tools that help in creating a fast and interactive SPA (single page application)
// - useState : is used to store values. It comes with a function that is used to update that value. 
// - useRef 
// - useEffect 
// - useNav 
// - useLocation 
// - useContext 

function ReactHooks() {
    let [num,setNum] = useState(0)
    let [myColor,setMyColor] = useState('red')

    function adder() {
        setNum(num + 1)
    }

    let bgChanger =()=>{
        setMyColor('blue')
    }

  return (
    <div>
        <h1 className=' text-4xl font-bold'>{num}</h1>
        <button onClick={adder} className=' bg-black text-white p-2 rounded-md cursor-pointer'>click me</button>

        <section className=' h-[100px] w-[100px]' style={{backgroundColor:myColor}}></section>
        <button onClick={bgChanger} className=' bg-black text-white p-2 rounded-md cursor-pointer'>change</button>
        
    </div>
  )
}

export default ReactHooks