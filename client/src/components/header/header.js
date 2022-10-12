import React,{useState} from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom'
import {connect} from 'react-redux'

import {signout, isAuthenticated} from '../../auth'
import './header.styles.scss'




const Header = (props) => {
  
  //State
  const [toggleHamburger, setToggleHamburger] = useState(false)
  
  let navigate = useNavigate();

  // const renderContent=() =>{
  //   //this render content uses redux state to find out  user signedin/out 
  //   //- currentlty app using local storage so it is commented out
  //   switch(props.auth){
  //     case null:
  //       return "Loading"
    
  //     case false: 
  //     {
  //         return (
  //           <>
  //             <a href='/signin'>Sign In</a>
  //             <a onClick={()=>{Signout( ()=>{} )}}>Signout</a>
  //             <a href='/login'>Login</a>
  //           </>
  //         )
  //     } 

  //     default:
  //       return  <a href='/api/logout'>Log Out</a>
        
  //     }
  // }

  return (
    <div className="headerWrapper">
      <div className='headerFlexBox'>

        <div className='headerFlexBox_Logo'>
          <h2><Link to='/'>Sai Matrimony</Link></h2>
        </div>

        <div className="headerFlexBox_DesktopMenu">

          <div className="headerFlexBox_DesktopMenu_Left">
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/dash'>Dashboard</NavLink></li>
              <li><NavLink to='/member'>Membership</NavLink></li>
              <li><NavLink to='/contact'>Contact Us</NavLink></li>
            </ul>
          </div>
        
          <div className='headerFlexBox_DesktopMenu_Right'>
            {/* {renderContent()} */}
            {/* <NavLink to='/signup'> <button className="headerRightBtn btn"> Sign Up</button> </NavLink> */}

            {!isAuthenticated() && (
              <>
                <NavLink to='/signin'>Sign In</NavLink>   
                <Link to='/signup'> <button className="headerRightBtn btn"> Sign Up</button> </Link>
              </>
            )}

            {isAuthenticated() && (
              <>
                <NavLink to={`/user/${isAuthenticated().user._id}`}>
                    {`${isAuthenticated().user.name}'s profile`}
                </NavLink>
                <a style={{marginLeft:'15px'}} onClick={()=>{signout( ()=> navigate('/') )}}>Signout</a>
              </>
            )}
          </div>
        </div>
            
        <div className="headerFlexBox_MobileMenu">
            <button onClick={()=> setToggleHamburger(!toggleHamburger)} class="ui icon button">
              <i class="bars large icon"></i>
            </button>
          {/* //Mobile Navbar */}
          {toggleHamburger ? 
          <div className="headerFlexBox_MobileMenu_mobile_list">
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/dash'>Dashboard</NavLink></li>
              <li><NavLink to='/member'>Membership</NavLink></li>
              <li><NavLink to='/contact'>Contact Us</NavLink></li>

            {!isAuthenticated() && (
              <>
              <li><NavLink to='/signin'>Sign In</NavLink></li>
              <li><Link to='/signup'> Sign Up </Link></li>
              </>
            )}

            {isAuthenticated() && (
              <>
                <li><NavLink to={`/user/${isAuthenticated().user._id}`}>
                    {`${isAuthenticated().user.name}'s profile`}
                </NavLink></li>
                <li><a style={{marginLeft:'15px'}} onClick={()=>{signout( ()=> navigate('/') )}}>Signout</a></li>
              </>
            )}

            </ul>
          </div>
          : ''}
        </div>
        
      </div> 
      

      
    </div>
  )
}

const mapStateToProps = (state) => {
return{
  auth: state.auth
}
}

export default connect(mapStateToProps)(Header)


