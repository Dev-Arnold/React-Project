import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { LinoTxt } from './VinceContext'

const Header = () => {
  let {setTheme, theme} = useContext(LinoTxt)

  function themeChanger() {
    setTheme(!theme)
  }

  return (
    <header className=' py-3 flex justify-around items-center '>
      <h1 className=' text-3xl font-bold'>Logo</h1>
      <nav>
        <ul className=' flex gap-[10px]'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div>
        <button onClick={themeChanger} className=' bg-black text-white p-2 rounded-3xl cursor-pointer'>{theme == true? "light" : "dark"} mode</button>
      </div>
    </header>
  )
}

export default Header