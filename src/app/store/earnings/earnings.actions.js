const API = 'http://dev.4all.com:3003'

const fetchPlaces = () => {
    return fetch( `${API}/tarefa` )
        .then( places => places.json() )
}

export const RECEIVE_PLACES = 'RECEIVE_PLACES'
export const receivePlaces = places => {
    return {
        type: RECEIVE_PLACES,
        places
    }
}

export const getPlaces = () => dispatch => {
    fetchPlaces()
        .then( places => {
            console.log(places)
            dispatch( receivePlaces( places ) )
        } )
        .catch( err => {
            console.log( err )
        } )
}