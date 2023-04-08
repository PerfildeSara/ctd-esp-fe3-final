import React, { useState } from "react";


const Form = () => {
  const [user, setUser] = useState({
    fullName:'',
    email:''
  })

  const[correct, setCorrect]=useState(false)
  const[err, setErr]=useState(false)
  

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if((regex.test(user.email)===true ) && (user.fullName.length >= 3 && user.fullName.charAt(0) != " ")){
      setCorrect(true)
      setErr(false)
    }
    else{
      setCorrect(false)
      setErr(true)
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label></label>
        <input tyre = "text" placeholder="Full Name" value={user.fullName} onChange = {(e) => setUser({...user, fullName: e.target.value})}/>
        
        <label></label>
        <input tyre = "email" placeholder="Email" value={user.email} onChange = {(e) => setUser({...user, email: e.target.value})}/>     
        
        <button>Send</button>
        {correct && "Gracias " + user.fullName + ", te contactaremos cuando antes via emal."}
      </form>
      
      {err && "Por favor verifica que tu correo cumpla el formato de correo electronico y tu nombre tenga minimos 3 letras"}
    </div>
  );
};

export default Form;
