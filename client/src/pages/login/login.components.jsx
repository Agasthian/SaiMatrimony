import React from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'


import Layout from '../../components/layout/layout'
import {
  LoginContainer,
  LoginWrapper, 
  LoginWrapperCenter,
  LoginWrapperCenterLine,
  LoginWrapperCenterOr, 
  LoginWrapperLeft, 
  LoginWrapperRight
      } from './login.styles'

const Login = () => {
  return (
   <Layout>
    <LoginContainer>
      <Helmet>
        <title>TNEB Matrimony | Login Page | Sai Matrimony</title>
      </Helmet>
      <Link to='/'>To home</Link>
        {/* <h1 className='loginTitle'>Choose a Login Method</h1> */}
        <LoginWrapper>
          
          <LoginWrapperLeft>
            <div className="loginwrapperbutton Google" >
            <a href='/auth/google'><img src="" alt="" /> Google</a>
            </div>
            <div className="loginwrapperbutton facebook">
            <a href="/auth/facebook"><img src="" alt="" /> Facebook </a>
            </div>
          </LoginWrapperLeft>

          <LoginWrapperCenter>
            <LoginWrapperCenterLine></LoginWrapperCenterLine>
            <LoginWrapperCenterOr>OR</LoginWrapperCenterOr>
          </LoginWrapperCenter>

          <LoginWrapperRight>
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Password'/>
            <button className="submit">Login</button>
          </LoginWrapperRight>
          
        </LoginWrapper> 
    </LoginContainer>
      </Layout>
  )
}

export default Login