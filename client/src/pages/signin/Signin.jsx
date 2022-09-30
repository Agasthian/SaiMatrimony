import React, { Component } from 'react'
import { Navigate} from 'react-router-dom'
import {Helmet} from 'react-helmet'

import Layout from '../../components/layout/layout'
import {signin, authenticate} from '../../auth'
import './signin.styles.scss'



export class Signin extends Component {

  state={
    email: "",
    password: "",
    error: "",
    redirectToReferer: false,
    loading: false
  }

  //Higher order-function -> not only to access email, name from props but also to access event - we use HOF
  //array[name] dynamically changes

  handleChange = (name) => (e)=>{
    this.setState({error: ""})
    this.setState({[name]: e.target.value})
  }



  //onhandleSubmit - make request to server
  onHandleSubmit = e =>{
      e.preventDefault();
      this.setState({loading: true})
      const{ email, password} = this.state
      const user = {
        email ,
        password 
      }

      // console.log(user);

      signin(user)
      .then(data => {
        if(data.error) {
            this.setState({ error: data.error, loading:false})
        }
         else {
            //authenticate
            authenticate(data, ()=>{
                this.setState({redirectToReferer: true})
            })
            //redirect

         }

      })
        
    }




  render() {
    const{email,password, error, redirectToReferer} = this.state

    if(redirectToReferer) {
      return <Navigate to='/dash'/>
    }
    return (
        <Layout>
            <Helmet>
                <title>TNEB Matrimony | Sign in | Sai Matrimony</title>
            </Helmet> 

            <div className="signin">
                <div className='ui container'>
                    <h2>Sign In</h2>
                    <form className="ui form error">

                    <div className="ui error message"  style={{display: error ? "" :"none"}}>
                        <p>{error}</p>
                    </div>


                        <div className="field">
                            <label>Email</label>
                            <input     
                            onChange={this.handleChange('email')}            
                            type="email" 
                            placeholder="Email"
                            value={email}
                            />
                        </div>

                        <div className="field">
                            <label>Password</label>
                            <input 
                            onChange={this.handleChange('password')}
                            type="password" 
                            placeholder="Password"
                            value={password}
                            />
                        </div>

                        
                        <button onClick={this.onHandleSubmit} className="ui button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
      </Layout>
    )
  }
}

export default Signin


