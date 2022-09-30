import axios from 'axios'
import {FETCH_USER} from './types'

export const fetchUser = () =>  async dispatch => {
    const response =await axios.get('/api/current_user')
    dispatch({type: FETCH_USER, payload : response.data})
    
}

//Action creator for push / send Stripe token data to Our Express server
export const handleToken = token => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({type: FETCH_USER, payload: res.data});
}