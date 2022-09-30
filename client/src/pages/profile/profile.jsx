import React,{useState,useEffect} from 'react'
import {Helmet} from 'react-helmet'
import {Link, Navigate, useParams} from 'react-router-dom'
import axios from 'axios'

import {isAuthenticated} from '../../auth'
import DefaultProfile from '../../assets/defaultUser.png';

import Layout from '../../components/layout/layout'
import SubHeader from '../../components/subHeader/subHeader.component'
import DeleteUser from '../../components/deleteUser/DeleteUser'

const Profile = () => {
  //State
  const [profile,setProfile] = useState([])
  const [redirectToSignIn, setRedirectToSignin] = useState(false)

    // console.log(useParams().userId);
    const {userId} = useParams() //use params gets the parameter from url - eg:user id

    const url =`${process.env.REACT_APP_API_URL}/user/${userId}`

    //To display Profile photo
    const photoUrl = userId ? `${process.env.REACT_APP_API_URL}/user/avatar/${userId}` : DefaultProfile 

    /******** Fetch User info *********/
    const fetchData = async () =>{
        try {
            const response = await axios(url,{
                headers: {
                    authorization: `Bearer ${isAuthenticated().token}`,
                  },            
                })
            console.log('response',response.data)
              setProfile(response.data)
        } catch (error) {
            console.log(error.response)
             setRedirectToSignin(true)
        }
    }

    useEffect( ()=>{
      //console.log('userId', userId)
      fetchData()
     },[userId])

     
 
     //If  redirecttosign in state is true we naviagte to this route.
   if(redirectToSignIn) return <Navigate to='/signin' />

  return (
    <Layout>
      <Helmet>
          <title>TNEB Matrimony | Dashboard | Sai Matrimony</title>
      </Helmet>
      <SubHeader heading='Profile'/>
      <br/>
      <br/>
      <div className='ui container'>       
        <h2 className="ui header">Profile Info</h2>
        <div className="ui divider"></div>
        <div className="ui grid">
            <div className="ten wide column">
            <br/>
                <h3 className="ui header">Basic Info</h3>
                 <table class="ui very basic table">
                <thead>
                    <tr>
                    <th>Info</th>
                    <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h5>Name</h5></td>
                        <td>{profile.name}</td>                    
                    </tr>
                    <tr>
                        <td><h5>E mail</h5></td>
                        <td>{profile.email}</td>                    
                    </tr>
                    <tr>
                        <td><h5>About</h5></td>
                        <td>{profile.about} </td>
                    </tr>                    
                    <tr>
                        <td><h5>Mobile</h5></td>
                        <td>{profile.mobile}</td>
                    </tr>
                    <tr>
                        <td><h5>Date of Birth</h5></td>
                        <td>{profile.dateofbirth}</td>
                    </tr>
                    <tr>
                        <td><h5>Gender</h5></td>
                        <td>{profile.gender}</td>
                    </tr>
                    <tr>
                        <td><h5>Mother Tounge</h5></td>
                        <td>{profile.mothertounge}</td>
                    </tr>
                    <tr>
                        <td><h5>Religion</h5></td>
                        <td>{profile.religion}</td>
                    </tr>
                    <tr>
                        <td><h5>Profile Created for</h5></td>
                        <td>{profile.createdfor}</td>
                    </tr>
                    <tr>
                        <td><h5>Joined on</h5></td>
                        <td>{`Joined ${new Date(profile.created).toDateString()}`}</td>
                    </tr>
                    <tr>
                        <td><h5>Profile Id</h5></td>
                        <td>{profile._id}</td>
                    </tr>
                    
                </tbody>
                </table>
                <br/>
                <h3 className="ui header">Religious Info</h3>
                <table class="ui very basic table">
                <thead>
                    <tr>
                    <th>Info</th>
                    <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h5>Caste</h5></td>
                        <td>{profile.caste}</td>                    
                    </tr>
                    <tr>
                        <td><h5>Willing to marry from  <br/> other Community also</h5></td>
                        <td>{profile.otherCommunity
                        }</td>                    
                    </tr>                    
                    <tr>
                        <td><h5>SubCaste</h5></td>
                        <td>{profile.subCaste}</td>                    
                    </tr>
                    <tr>
                        <td><h5>Gothram</h5></td>
                        <td>{profile.gothram}</td>
                    </tr>
                    <tr>
                        <td><h5>Dosham</h5></td>
                        <td>{profile.dosham}</td>
                    </tr>
                </tbody>
                </table>
                <br/>
                <h3 className="ui header">Personal Info</h3>
                <table class="ui very basic table">
                <thead>
                    <tr>
                    <th>Info</th>
                    <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h5>Marital Status</h5></td>
                        <td>{profile.maritalStatus}</td>                    
                    </tr>
                    <tr>
                        <td><h5>Height</h5></td>
                        <td>{profile.height} cms</td>                    
                    </tr>
                    <tr>
                        <td><h5>Family Status</h5></td>
                        <td>{profile.familyStatus}</td>
                    </tr>
                    <tr>
                        <td><h5>Family Type</h5></td>
                        <td>{profile.familyType}</td>
                    </tr>
                    <tr>
                        <td><h5>Family Values</h5></td>
                        <td>{profile.familyValues}</td>
                    </tr>
                    <tr>
                        <td><h5>Any Disablity</h5></td>
                        <td>{profile.disablity}</td>
                    </tr>
                </tbody>
                </table>
                <br/>
                <h3 className="ui header">Professional Info</h3>
                <table class="ui very basic table">
                <thead>
                    <tr>
                    <th>Info</th>
                    <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><h5>Highest Education</h5></td>
                    <td>{profile.education}</td>                    
                    </tr>
                    <tr>
                    <td><h5>Employed in</h5></td>
                    <td>{profile.employedIn}</td>                    
                    </tr>
                    <tr>
                        <td><h5>Occupation</h5></td>
                        <td>{profile.occupation}</td>
                    </tr>
                    <tr>
                        <td><h5>Annual Income</h5></td>
                        <td>{profile.income}</td>
                    </tr>
                    <tr>
                    <td><h5>Work Location</h5></td>
                    <td>{profile.workLocation}</td>                    
                    </tr>
                    <tr>
                        <td><h5>State</h5></td>
                        <td>{profile.state}</td>
                    </tr>
                    <tr>
                        <td><h5>City</h5></td>
                        <td>{profile.city}</td>
                    </tr>
                </tbody>
                </table>
                <br/>
                <br/>            

            </div>
            <div className="six wide column">
                <div className="image">
                  <img 
                    src={photoUrl} 
                    onError={i => (i.target.src = `${DefaultProfile}`)}
                    alt={`${profile.name}`} 
                    />
                </div>
                {isAuthenticated().user && isAuthenticated().user._id === profile._id &&(
                    <>
                      <Link to={`/signupform/${profile._id}`}>
                            <button className='ui orange button'>
                                <i class="edit icon"></i>
                                Fill profile Details
                            </button>
                      </Link>  
                      <Link to={`/user/avatar/${profile._id}`}>
                            <button className='ui teal button'>
                                <i class="user circle icon"></i>
                                    Upload Photos
                            </button>
                        </Link>      
                      {/* <Link to={`/user/edit/${profile._id}`}>
                        <button class="ui blue button">
                        <i class="edit icon"></i>
                            Edit Profile
                        </button>
                      </Link> */}

                      <DeleteUser userId={profile._id}/>
                    </>
                )}
            </div>
        </div>
    </div>
    <br/><br/>
    </Layout>
  )
}

export default Profile