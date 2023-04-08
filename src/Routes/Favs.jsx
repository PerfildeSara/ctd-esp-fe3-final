import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";



const Favs = () => {
  const context = useContext(ContextGlobal)
  const {favList} = context

  return (
    <main>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favList.map((fav) => (
          <Card key={fav.id} dentista={fav} />
        ))}
      </div>
    </main>
  )
};

export default Favs;
