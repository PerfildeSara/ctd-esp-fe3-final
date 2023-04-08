import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const context = useContext(ContextGlobal)  
  const { dentistas } = context
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentistas.map((dentista) => (
          <Card key={dentista.id} dentista ={dentista} />
        ))}
      </div>
    </main>
  )
}

export default Home


/*
import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const context = useContext(ContextGlobal)  
  const { dentistas } = context


  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentistas.map((dentista) => (
          <Card key={dentista.id} dentista ={dentista} />
        ))}
        
      </div>
    </main>
  )
}

export default Home
*/