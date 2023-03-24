import { ADD_FAVORITE, DELETE_FAVORITE } from './type.js'

const initialState = {
    myFavorites : [],

}

const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites : [...state.myFavorites, payload]
            }
        case DELETE_FAVORITE:
            const filtrado = state.myFavorites.filter((personaje) => 
                personaje.id !== payload);    
                console.log(payload)
             return{
                ...state,
                myFavorites : filtrado
              }
        default:
        return {...state}
        
    }
}

export default reducer;