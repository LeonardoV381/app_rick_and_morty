import styleCard from './Card.module.css'
import { Link } from 'react-router-dom'
import { addFavorite, deleteFavorite } from '../../redux/actions'
import { connect } from 'react-redux'
import { useState } from 'react'

function Card(props) { //deja de ser export default por el connect de abajo

   let [isFav, setIsFav ] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         deleteFavorite(props.id);
      }
      else
         setIsFav(true)
         addFavorite(props)


   }
   return (
      
      <div className={styleCard.content} >
      {
       isFav ? (<button className={styleCard.bFavorite} onClick={handleFavorite}>❤️</button>) : (<button className={styleCard.bFavorite} onClick={handleFavorite}>🤍</button>)
       }
         <button className={styleCard.boton}  onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`} className={styleCard.link}>
         <h2 className={styleCard.nombres} key={props.id}>{props.name}</h2>
         </Link>
         <h2 className={styleCard.especie} key={props.id}>Specie:{props.species}</h2>
         <h2 className={styleCard.genero} key={props.id}>Gender:{props.gender}</h2>
         <img  className='imgP' key={props.id}  src={props.image} alt="Picture not found" />
      </div>
   )}

   const mapDispatchToProps = (dispatch) => {
      return{
          addFavorite : (character)=> {dispatch(addFavorite(character))},
          deleteFavorite : (id) => {dispatch(deleteFavorite(id))}
      }
   }
   


export default connect(null, mapDispatchToProps)(Card);