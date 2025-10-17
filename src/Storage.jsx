import React, { useRef, useState } from 'react'
// LocalStorage - Used to store data permanently until you delete it. 
// SessionStorage - USed to store data temporarily. i.e., it will be deleted if the browser is closed and when you open a new tab, it won't be there. 

function Storage() {
    let [myName, setMyName] = useState(sessionStorage.getItem('name') || "")

    // let [formData,setFormData] = useState({
    //     firstName:"",
    //     lastName:"",
    //     email:"",
    //     password:""
    // })
    
    // let handleChange = (Joe)=>{
    //     setMyName(Joe.target.value)
    // }

    // function saveName() {
    //     localStorage.setItem('name',myName)   
    // }

  return (
    <div>
        <input type="text" value={myName} name='myName' className=' border-2' onChange={(e)=>{ setMyName(e.target.value); sessionStorage.setItem('name',myName) }}/>
        {/* <button onClick={saveName} className=' bg-red-500 text-white p-2 rounded-md'>click me</button> */}
    </div>
  )
}

export default Storage