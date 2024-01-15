import React from 'react'
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};








const Navbar = () => {
  const { theme } = useTheme();
  return (
    <nav className={theme === "light" ? "navbar" : "navbar-dark"} >
      <img src='./x.png' height={30} className='navicon'/>
      <h2 className='navheading'>codeX</h2>
      <Switch />
    </nav>
  )
}

export default Navbar
