
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home.jsx"
import Contact from "./Routes/Contact.jsx"
import Favs from "./Routes/Favs.jsx"
import Detail from "./Routes/Detail";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContextGlobal } from "./Components/utils/global.context";
import React, { useContext } from 'react'


function App() {
const context = useContext(ContextGlobal)
const {darkMode} = context
  return (
      <div className={darkMode ? "dark" : ""}>
        
          <Navbar/>
          <Routes>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/Favs' element={<Favs/>}/>
            <Route  path='/dentist/:id/' element={<Detail/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;

/*

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home.jsx"
import Contact from "./Routes/Contact.jsx"
import Favs from "./Routes/Favs.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContextGlobal } from "./Components/utils/global.context";
import React, { useContext } from 'react'


function App() {
const context = useContext(ContextGlobal)
const {darkMode} = context
  return (
      <div className={darkMode ? "dark" : ""}>
        
          <Navbar/>
          <Routes>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/Favs' element={<Favs/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
*/

 
