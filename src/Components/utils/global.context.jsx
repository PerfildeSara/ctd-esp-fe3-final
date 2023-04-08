import { createContext, useState, useEffect, useReducer } from "react";
import axios from "axios";


//export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();


const initialFavsState = JSON.parse(localStorage.getItem('favs')) || []

const favReducer = (state, action) =>{

  switch(action.type){
    case 'ADD_FAV':
      console.log(state.action)
      return [...state, action.payload]
    case 'REMOVE_FAV':
      let filtered = state.filter(function(el) { return el.id != action.payload.id; }); 
      return filtered 
    default:
      throw new Error
  }
}

export function ContextProvider( {children} ) {
  
  const[dentistas, setDentistas] = useState([]);
  const[darkMode, setDarkMode] = useState(false);
  const[favList, addFav] = useReducer(favReducer, initialFavsState)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  
  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) =>{
      setDentistas(response.data);      
    })
    .catch((error) => {
      console.log(error);
    });
  },[]);


  return (
    <ContextGlobal.Provider value={{dentistas, darkMode, toggleDarkMode, favList, addFav}}>      
      {children}
    </ContextGlobal.Provider>
  );
};



/*
import { createContext, useState, useEffect } from "react";
import axios from "axios";


//export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

export function ContextProvider( {children} ) {
  //const ContextProvider = createContext();
  
  const[dentistas, setDentistas] = useState([]);
  const[darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  
  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) =>{
      setDentistas(response.data);      
    })
    .catch((error) => {
      console.log(error);
    });
  },[]);


  return (
    <ContextGlobal.Provider value={{dentistas, darkMode, toggleDarkMode}}>      
      {children}
    </ContextGlobal.Provider>
  );
};

*/
