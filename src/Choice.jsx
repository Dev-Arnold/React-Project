import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

function Choice() {
    let [isLoggedIn,setIsLoggedIn] = useState(false)

  return (
    <div>
        {
            isLoggedIn ? 
            <Header/> 
            : 
            <Footer/>
        }

    </div>
  )
}

export default Choice