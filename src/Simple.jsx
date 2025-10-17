import React, { useState } from 'react'

function Simple() {
    let [show,setShow] = useState(false);

    function changer() {
        setShow(!show)
    }

  return (
    <div>
        <button onClick={changer} className=' bg-amber-500 p-2'>≡</button>
        <section className={` bg-black w-[100px] duration-500 absolute ${show == true? "left-0" : "left-[-100px]"} h-[200px]`}></section>
    </div>
  )
}

export default Simple