import React,{useEffect, useState} from 'react'
import axios from 'axios';

import Card from '../../../components/profileCard/card';
import './dashCardList.styles.scss'

const DashCardList = () => {

  //State
  const [allUsers, setAllUsers] = useState([]);

  //URL
  const API_URL = `${process.env.REACT_APP_API_URL}/users`

  //Method to fetch all users
  const fetchAllUsers = async() => {
      try{
          const response = await axios.get(API_URL)
          // console.log('response :>> ', response.data);
          setAllUsers(response.data)
      }
      catch (error){
          console.log(error)
      }
  }

  //useEffect
  useEffect( ()=>{
      fetchAllUsers()

  },[])

  return (
    <div className='dashCardList'>
      {console.log('allUSersList', allUsers)}
      {allUsers.map((user,i)=>(
        <Card user={user} key={i}/>   
      ))}
    </div>
  )
}

export default DashCardList