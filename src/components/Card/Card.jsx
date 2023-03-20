import styleCard from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card(props) {
   return (
      <div className={styleCard.content} >
         
         <button id='boton' onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`} className={styleCard.link}>
         <h2 className={styleCard.nombres} key={props.id}>{props.name}</h2>
         </Link>
         <h2 className={styleCard.especie} key={props.id}>Specie:{props.species}</h2>
         <h2 className={styleCard.genero} key={props.id}>Gender:{props.gender}</h2>
         <img  className='imgP' key={props.id}  src={props.image} alt="Picture not found" />
      </div>
   )}