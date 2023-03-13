import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx'   
import fondo from './components/fondo.jpg'
import Nav from './components/NavBar/Nav.jsx'


 
const tapiz = {
        
    backgroundSize: 'cover', 
    backgroundRepeat: 'noRepeat',     
    backgroundImage :  `url(${fondo})`      
    };


function App () {
  
  const [ characters, setCharacters] = useState([]);

  const onSearch = (character) =>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         for (let i = 0; i < characters.length; i++) {
          if(data.id === characters[i].id){
      
            return(alert("El personaje con id " +data.id + " ya está en pantalla este personaje es: " +characters[i].name))
          }
         }    
           data.name? setCharacters([...characters,data]):alert('Este personaje no se ha encontrado');  
         });
     }
   
     const onClose = (id) => {
      console.log(id)
      const eliminarCard = characters.filter((filtro) => filtro.id !== (id))
      setCharacters(eliminarCard);
    
  }
  return(
    <div style={tapiz}>
     <div className='App' style={{ padding: '25px' }}>
       <div>
         <Nav onSearch ={onSearch}
         />
         <picture>
                  <img src='https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/8/AmazonStores/A1AM78C64UM0Y8/88a9732d54ce1de3a48e9c09d2f58fed.w3000.h600._CR0%2C0%2C3000%2C600_SX1500_.jpg' alt='Rick and Morty IMG'/>
         </picture>
       </div>
        <div>
         <Cards 
         characters= { characters } onClose= { onClose }
         />
        </div>
     </div>
     <h4 id='down'>_</h4>
   </div>
  )
}

export default App
