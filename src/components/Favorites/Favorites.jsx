import { useNavigate } from 'react-router-dom'
import styleFavorites from './Favorites.module.css'
import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import styleCards from '../Cards/Cards.module.css'

function Favorites({myFavorites}) {
const dispatch = useDispatch();
const navigate = useNavigate();
const goBack = () => {
     navigate("/home")
}

return(
   <div>
   <div className={styleFavorites.buton}>
      <button className={styleFavorites.boton} onClick={goBack}>Regresar</button>
    </div>
        <div className={styleCards.cards}>
        {myFavorites?.map(({id,name,species,image,gender}) => (
            <Card 
                id={id}
                key={id}
                name={name}
                species={species}
                image={image}
                gender={gender}
            />
        ))}
        </div>
    </div> 

)    
}


export function  mapStateToProps (state)  {
    console.log(state)
    return{
        myFavorites : state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);