import { useState } from "react";
import styleBar from './Nav.module.css'
import React from "react";
export default function SearchBar(props) {

   const [character, setCharacter] = useState("");

   const handleChange = (e) =>{
      const { value } = e.target;
      setCharacter(value)
      }
   

   return (
      <div >
         <input className={styleBar.barra} type="number" placeholder="TYPE HERE AN ID" onChange={handleChange}/>
      <button className={styleBar.search} onClick={() =>props.onSearch(character)}>Agregar</button>
      </div>
   )
}
