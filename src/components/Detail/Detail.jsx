import React, { useState , useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styleCards from '../Cards/Cards.module.css'
import styleDet from './Detail.module.css'

export default function Detail(props){
    const {detailId} = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({})
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("Algo ha salido mal!");
          });
        return setCharacter({});
      }, [detailId]);
      const goBack = () => {
        navigate("/home")
      }
return(
    <div className={styleCards.cards}>
        <button className={styleDet.boton} onClick={goBack}>Regresar</button>
       <h1>Name: {character.name}</h1>
       <h1>Status: {character.status}</h1>
       <h1>Specie: {character.species}</h1> 
       <h1>Gender: {character.gender}</h1>
       <h1>Origin: {character.origin?.name}</h1> 
       <h1>Location: {character.location?.name}</h1> 
       <img  className={styleDet.img} src={character.image} />
    </div>
)
}