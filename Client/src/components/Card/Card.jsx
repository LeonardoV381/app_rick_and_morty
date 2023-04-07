import styleCard from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../../redux/actions';
import { connect, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import React from 'react';

function Card( {onClose, id, name, species, gender,image, myFavorites }) { //deja de ser export default por el connect de abajo
   console.log(name)
   const dispatch = useDispatch();
   const [isFav, setIsFav ] = useState(false);
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id));
      }
      else{
         setIsFav(true)
         dispatch(addFavorite({id:id,name:name,species:species,gender:gender,image:image}))
      }

   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      
      <div className={styleCard.content} key={id} >
      {
       isFav ? (<button className={styleCard.bFavorite} key={id} onClick={handleFavorite}>❤️</button>) : (<button className={styleCard.bFavorite} onClick={handleFavorite}>🤍</button>)
       }
         <button className={styleCard.boton} key={id}  onClick={onClose}>X</button>
         <Link to={`/detail/${id}`} key= {id} className={styleCard.link}>
         <h2 className={styleCard.nombres} key={id}>{name}</h2>
         </Link>
         <h2 className={styleCard.especie} key={id}>Specie:{species}</h2>
         <h2 className={styleCard.genero} key={id}>Gender:{gender}</h2>
         <img  className={styleCard.imgP} key={id}  src={image} alt="Picture not found" />
      </div>
   )}

   const mapDispatchToProps = (dispatch) => {
      return{
          addFavorite : (character)=> {dispatch(addFavorite(character))},
          deleteFavorite : (id) => {dispatch(deleteFavorite(id))}
      }
   }

   const mapStateToProps = (state) => {
      return{
         myFavorites : state.myFavorites,
      }
   }
   


export default connect(mapStateToProps, mapDispatchToProps)(Card);