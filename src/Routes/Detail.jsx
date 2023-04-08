import React from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'



const Detail = () => {
  const context = useContext(ContextGlobal)  
  const[dentistas, setDentistas] = useState([]); 

  const params = useParams();

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users/"+params.id)
    .then((response) =>{
      setDentistas(response.data);      
    })
    .catch((error) => {
      console.log(error);
    });
  },[]);
 
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <div>
        <h1>Detail Dentist {dentistas.id}</h1>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{dentistas.name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{dentistas.email}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{dentistas.phone}</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td>{dentistas.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail