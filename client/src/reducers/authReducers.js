import {FETCH_USER} from '../action/types'

export default function authRed(state={}, action){

    switch(action.type){
        case FETCH_USER:
            return action.payload || false;

        default:
            return state
    }
}