import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx'   
import fondo from './components/fondo.jpg'
import Nav from './components/NavBar/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites';

const tapiz = {
        
    backgroundSize: 'cover', 
    backgroundRepeat: 'noRepeat',     
    backgroundImage :  `url(${fondo})`      
    };


function App () {
  const location = useLocation();
  const [ characters, setCharacters] = useState([]);

  const onSearch = (character) =>{
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         for (let i = 0; i < characters.length; i++) {
          if(data[0].id === characters[i].id){
            return(alert("El personaje con id " +data[0].id + " ya está en pantalla este personaje es: " +characters[i].name))
          }
         }    
          
         data[0].name? setCharacters([...characters, data[0]]):alert('Este personaje no se ha encontrado');  
         console.log( new Date());
           
         });
     }
     const navigate = useNavigate();
     const [ access, setAccess] = useState(false);
     const username= "leonardo@henry.com";
     const password="381Leo";

     function login(userData){
      if(userData.password === password && userData.username === username){
        setAccess(true);
        navigate('/home');
      }
     }

     useEffect(() => {
      !access && navigate('/');
   }, [access]);

   
     const onClose = (id) => {
      console.log(id)
      const eliminarCard = characters.filter((filtro) => filtro.id !== (id))
      setCharacters(eliminarCard);
    
  }
  return(
    <div>
    <div style={tapiz}>
     <div className='App' style={{ padding: '25px' }}>
    {location.pathname !== '/' &&
      <Nav onSearch ={onSearch} /> }
      
      <Routes>
         <Route path='/' element={ <Form login={login}/> } />
         <Route path='/home' element={ <Cards characters= { characters } onClose= { onClose }/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/detail/:detailId' element={<Detail/>} />
         <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
      
       
     </div>
     <h4 id='down'>_</h4>
   </div>
   </div>
  )
}

export default App
