import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";


const Card = ({ dentista }) => {

  const context = useContext(ContextGlobal)
  const { addFav, favList } = context 

  const addFavorite = ()=>{
    favList.includes(dentista) ?  addFav({type: 'REMOVE_FAV', payload: dentista}) : addFav({type: 'ADD_FAV', payload: dentista})  
  }

  return (
    <div className="card-grid">
        {/* En cada card deberan mostrar en name - username y el id */}
        <div className="card">
            <img src="images/doctor.jpg" style={{width:'15vw', height:'30vh'}} alt=""/>
            <Link to={`/dentist/${dentista.id}`}><h5>{dentista.name}</h5></Link>
            <h6 >{dentista.username}</h6>
            <button onClick={addFavorite} className="favButton">{favList.includes(dentista) ? '⭐':'☆'}</button>
        </div>
      </div>
  );
};

export default Card;




/*
import React from "react";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ dentista }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card-grid">
        
        <div className="card">
            <div><img src="images/doctor.jpg" className="doctorImage" alt=""/></div>
            <h5>{dentista.name}</h5>
            <h6 >{dentista.username}</h6> 
        <button onClick={addFav} className="favButton">Add fav</button>
        </div>
    </div>
  );
};

export default Card;*/

