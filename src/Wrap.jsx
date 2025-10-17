import React from 'react'
import Box from './Box'
import { LuSquareStack } from "react-icons/lu";
// Props is used to pass data values from parent component to a child component 

function Wrap() {
  return (
    <div className=' h-[40vh] bg-gray-500 grid grid-cols-3 gap-3.5 p-2'>
        <Box text1="Visualize it" text2="Sample text. Click to select the text box. Click again or double click
        to start editing the text." icon={<LuSquareStack />}/>
        <Box text1="Create it" text2=" text. Click to select the text box, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, perferendis."/>
        <Box/>
    </div>
  )
}

export default Wrap