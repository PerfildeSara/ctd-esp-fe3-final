import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
  const context = useContext(ContextGlobal)  
  const { darkMode, toggleDarkMode } = context

  const navigate = useNavigate()

  return (
    <div style={{display:'flex', flexDirection:'row', padding:'1rem', justifyContent:'space-between'}}>
      <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}><img src="./DH.ico" style={{width:'50px', height:'50px', alignItems:'center'}} alt='Facebook-logo'/><h2 style={{margin:'0px'}}>Odonto</h2></div>
       <nav>
          <Link className = {darkMode ? "dark" : ""} to="/"><h2>Home</h2></Link>
          <Link className = {darkMode ? "dark" : ""} to = "/Contact"><h2>Contact</h2></Link>
          <Link className = {darkMode ? "dark" : ""}  to="/Favs"><h2>Favs</h2></Link>
          <button onClick={toggleDarkMode}>{darkMode ? '☀' : '🌘' }</button>
        </nav>
      
    </div>
  )
}
   

export default Navbar

/*
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
  const context = useContext(ContextGlobal)  
  const { darkMode, toggleDarkMode } = context

  const navigate = useNavigate()

  return (
    <div>
      <ul>
        <button onClick={() => navigate(-1)}>🔙</button>
          <Link className = {darkMode ? "dark" : ""} to="/"><h2>Home</h2></Link>
          <Link className = {darkMode ? "dark" : ""} to = "/Contact"><h2>Contact</h2></Link>
          <Link className = {darkMode ? "dark" : ""}  to="/Favs"><h2>Favs</h2></Link>
        </ul>
      <button onClick={toggleDarkMode}>{darkMode ? '☀' : '🌘' }</button>
    </div>
  )
}
   

export default Navbar*/