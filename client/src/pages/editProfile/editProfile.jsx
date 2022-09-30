import React,{useEffect, useState} from 'react'
import {Helmet} from 'react-helmet'
import {Link, Navigate, useParams} from 'react-router-dom'
import axios from 'axios'

import {isAuthenticated} from '../../auth'

import Layout from '../../components/layout/layout'
import SubHeader from '../../components/subHeader/subHeader.component'


const EditProfile = () => {

    //State
  const [profile, setProfile] = useState([]);
  const [password, setPassword] = useState('');
  const [redirectToProfile, setredirectToProfile] = useState(false);
  const [error, setError ]= useState('')
  const [fileSize, setFileSize] = useState(0)
  const [loading, setLoading]= useState(false)


  //Destructuring State
  const{name, email,_id} = profile

  // console.log(useParams().userId);
  const {userId} = useParams() //use params gets the parameter from url - eg:user id

   //URL
   const API_URL =`${process.env.REACT_APP_API_URL}/user/${userId}`
   const API_URL_POST =`${process.env.REACT_APP_API_URL}/user/edit/${userId}`

    //Fetch user data by userId for pre-poulation
    const fetchData = async () =>{
        try {
            const response = await axios(API_URL,{
                headers: {
                    authorization: `Bearer ${isAuthenticated().token}`,
                  },            
                })
              //console.log('response',response.data)
             setProfile(response.data)
        } catch (error) {
            console.log(error.response)
            setredirectToProfile(true)
            
        }
    }

    //UPDATE user info to DB
    const postData = async () => {
      //console.log('postdata :>> ', profile);
      // const token = isAuthenticated().token
      // console.log('token', token )
      // console.log('API', API_URL_POST )
      try{
        const postResponse = await axios.put(API_URL_POST,profile)
        //console.log('Post Response',postResponse.data)

      }catch(error){
        //console.log('post error',error.response.data.error)
        setError(error.response.data.error)
      }
    }

 //Client side error handling
    const isValid = () => {
        
        if (fileSize > 1000000) {
        setError('File size should be less than 100kb')
        setLoading(false)
        return false;
        }
        if (name.length === 0) {
        setError('Name is required')
        setLoading(false)
        return false;
        }
        // email@domain.com
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setError('A valid Email is required')
        setLoading(false)
        return false;
        }
        if (password.length >= 1 && password.length <= 5) {
        setError('Password must be at least 6 characters long')
        setLoading(false)
        return false;
        }
        //console.log('password :>> ', password);
        return true;
    };



    // Use Effect - fetch the user info on page rendering
    useEffect( ()=>{
      //  console.log('userId', userId)
       fetchData()
      },[userId])

    // OnChange - form event type
      const onChange = e =>{
        setProfile({...profile,[e.target.name]:e.target.value})
      }


    //onHandleSubmit 
    const onHandleSubmit = e => {
      e.preventDefault();
       //console.log('profileOnSubmit :>> ', profile);
      postData()
    }

    if(redirectToProfile){
      return( <Navigate to={`/user/${_id}`} /> )

    }



  return (
    <Layout>
        <Helmet>
              <title>TNEB Matrimony | Edit Profile | Sai Matrimony</title>
        </Helmet>
        <SubHeader heading='Edit Profile'/>
        <br/>
        <br/>
        <div className='ui container'>       
            <h2 className="ui header">Edit Profile</h2>
            <div className="ui divider"></div>

            <div className="ui error message" style={{display: error ? "" :"none"}} >
                <p>{error}</p>
            </div>

            <form className="ui form error">
            <div className="field">
                <label>Name</label>
                <input
                name='name'
                onChange={(e)=> onChange(e)}
                type="text" 
                placeholder="Name"
                value={name}
                />
            </div>

            <div className="field">
                <label>Email</label>
                <input 
                name='email'   
                onChange={(e)=> onChange(e)}         
                type="email" 
                placeholder="Email"
                value={email}
                />
            </div>

            <div className="field">
                <label>Password</label>
                <input 
                password='password'
                onChange={(e)=>onChange(e)}
                type="password" 
                placeholder="Password"
                value={profile.password}
                />
            </div>          
            <button onClick={onHandleSubmit} className="ui button" type="submit">Update</button>
          </form>

        </div>

    </Layout>
  )
}

export default EditProfile