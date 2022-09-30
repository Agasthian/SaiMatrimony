import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'

import Layout from '../../components/layout/layout'
import {signup} from '../../auth'
import './signup.styles.scss'


export class Signup extends Component {

  state={
    name: "",
    email: "",
    password: "",
    error: "", 
    open: false
  }
  
  //Higher order-function -> not only to access email, name from props but also to access event - we use HOF
  //array[name] dynamically changes
  handleChange = (name) => (e)=>{
    this.setState({[name]: e.target.value})
    this.setState({[name]: e.target.value})
  }

  //onhandleSubmit - make request to server
  onHandleSubmit = e =>{
    e.preventDefault();
    const{name, email, password} = this.state
    const user = {
      name ,
      email ,
      password 
    }
    // console.log(user);

    signup(user)
    .then(data => {
      if(data.error) this.setState({ error: data.error})
       else this.setState({
        error : "",
        name:"",
        email:"",
        password:"",
        open: true
       })
    })

  }
  


  
  render() {
    const{name,email,password,error,open} = this.state

    return (
        <Layout>
            <Helmet>
                <title>TNEB Matrimony | Sign up | Sai Matrimony</title>
            </Helmet>    
            <div className="signup">

                <div className=' ui container'>
                    <h2>Sign Up</h2>
                    <form className="ui form">

                    <div className="ui error message"  style={{display: error ? "" :"none"}}>
                        <p>{error}</p>
                    </div>      

                     <div className="ui success message"  style={{display: open ? "block" : "none"}}>
                        <p>New account is successfully created. Please <Link to='/signin'>Sign In</Link></p>
                    </div>                  

                        <div className="field">
                            <label>Name</label>
                            <input
                            onChange={this.handleChange('name')}
                            type="text" 
                            placeholder="Name"
                            value={name}
                            />
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

export default Signup


