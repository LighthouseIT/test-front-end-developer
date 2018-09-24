import { RECEIVE_PLACES } from './places.actions'

const initialState = { loading: true, places: [] }

const places = ( state = initialState, action ) => {
    if ( !action ) {
        return
    }

    switch ( action.type ) {
        case RECEIVE_PLACES:
            const { places } = action
            return Object.assign( {}, state, {
                loading: false,
                places
            } )
        default:
            return state
    }
}

export default places