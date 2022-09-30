import React, {useEffect} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {connect} from 'react-redux'

import * as actions from './action'
import './styles/main.scss'

import Home from './pages/home/home.components'
import Dashboard from './pages/dashboard/dash.components'
import Login from './pages/login/login.components'
import Membership from './pages/membership/member.component';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import Profile from './pages/profile/profile'
import EditProfile from './pages/editProfile/editProfile';
import ProfileFill from './pages/profileFill/profileFill';
import UploadPhotos from './pages/uploadPhotos/UploadPhotos';
import Contact from './pages/contact/contact';


const App = (props) => {

   //Fetches user data on app load - fetch user is accessed via action cretor of redux library
   useEffect(()=>{
    props.fetchUser();
    console.log('props', props)
  })

  return (
    <>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Login/>} />
            <Route path='/dash' element={<Dashboard/>}/>
            <Route path='/member'element={<Membership/>}/>
            <Route path='/signup' element={<Signup/>} />
            <Route path='/signin' element={<Signin/>} />
            <Route path='/user/:userId' element={<Profile/>} />
            <Route path='/user/edit/:userId' element={<EditProfile/>} />
            <Route path='/signupform/:userId' element={<ProfileFill/>} />
            <Route path='/user/avatar/:userId' element={<UploadPhotos/>}/>
            <Route path='/contact' element={<Contact/>} />

         </Routes>
       </BrowserRouter>
    </>
  )
}

export default connect(null,actions)(App);