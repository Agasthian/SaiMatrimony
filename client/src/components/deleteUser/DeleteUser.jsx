import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios';

import {isAuthenticated,signout} from '../../auth'


const DeleteUser = ({userId}) => {

     console.log('userId', userId)

     //State
    const [redirectToHome, setRedirectToHome] = useState(false)

    //URL
    const API_URL =`${process.env.REACT_APP_API_URL}/user/${userId}`
    //  

     //Delete user -axios call
     const deleteAccount =async (id)=>{

        try {
            const res = await axios.delete(API_URL,{
                headers: {
                    authorization: `Bearer ${isAuthenticated().token}`,
                  },            
                })
                console.log(res);
                console.log('Item deleted successfully')
                //SignOut - remove the userinfo from local storage before deleting
                signout(()=>console.log('User is deleted- signout'))

                //Redirect
                setRedirectToHome(true)
                // return res.json()
        } catch (error) {
            alert(error)
        }
    }

    //Delete confirm ? alert helper method
    const deleteConfirmed = () =>{
        let answer = window.confirm("Are you sure you want to delete your account ?")
        if(answer){
            deleteAccount()
        }
    }


    //Check state for redirect
    if(redirectToHome){
        return <Navigate to='/' />
    }

    return (
        <button onClick={deleteConfirmed} className="ui red button">
            <i className="trash icon"></i>
            Delete
        </button>
    )
}

export default DeleteUser