import { ADD_FAVORITE, DELETE_FAVORITE } from './type.js'

export const addFavorite = (character) => {
    return{
        type : ADD_FAVORITE,
        payload : character
    }
}

export const deleteFavorite = (character) => {
    return{
        type : DELETE_FAVORITE,
        payload: character.id
    }
}