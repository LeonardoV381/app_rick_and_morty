import styleCard from './Card.module.css'

export default function Card(props) {
   return (
      <div className={styleCard.content} >
         
         <button id='boton' onClick={props.onClose}>X</button>
         <h2 className={styleCard.nombres} key={props.id}>{props.name}</h2>
         <h2 className={styleCard.especie} key={props.id}>Specie:{props.species}</h2>
         <h2 className={styleCard.genero} key={props.id}>Gender:{props.gender}</h2>
         <img  id='imgP' key={props.id}  src={props.image} alt="Picture not found" />
      </div>
   )}