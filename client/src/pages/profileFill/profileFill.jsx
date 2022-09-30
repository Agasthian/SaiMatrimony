import React,{useState, useEffect} from 'react'
import axios from 'axios'
import * as Yup from 'yup';
import {Helmet} from 'react-helmet'
import { Navigate, useParams} from 'react-router-dom'
import { Formik ,Field, Form, ErrorMessage } from 'formik'

import {isAuthenticated} from '../../auth'
import Layout from '../../components/layout/layout'
import SubHeader from '../../components/subHeader/subHeader.component'

const ProfileFill = () => {
//State
const [profile, setProfile] = useState([]);
const [redirectToProfile, setredirectToProfile] = useState(false) //Redirect after successful update to profile page
const [redirectToSignIn, setRedirectToSignin] = useState(false) //Redirect to signin page if no autherization

 // console.log(useParams().userId);
 const {userId} = useParams()

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
          console.log('response - Fetch data :>>',response.data)
         setProfile(response.data)
    } catch (error) {
        console.log(error.response)
        setRedirectToSignin(true)
        
    }
}    

//UPDATE user info to DB
const postData = async (value) => {
    //console.log('postdata b4 :>> ', value);
    // const token = isAuthenticated().token
    // console.log('token', token )
    // console.log('API', API_URL_POST )
    try{
      const postResponse = await axios.put(API_URL_POST,value)
      console.log('Post Response',postResponse.data)
      setredirectToProfile(true)

    }catch(error){
      console.log('post error->',error.response.data.error)
      //setError(error.response.data.error)
    }
  }      

  // Use Effect - fetch the user info on page rendering
  useEffect( ()=>{
      //  console.log('userId', userId)
      fetchData()
      },[userId])      

     //Formik forms - inital values
     const initialValues ={
      name:'', 
      email:'',
      password:'',
      about:'',
      mobile:'',
      dob:'',
      gender:'',
      mothertounge:'',
      religion:'',
      createdfor:'',
      caste:'',
      subCaste:'',
      gothram:'',
      dosham:'',
      maritalStatus:'',
      height:'',
      familyStatus:'',
      familyType:'',
      familyValues:'',
      disablity:'',
      education:'',
      employedIn:'',
      occupation:'',
      income:'',
      workLocation:'',
      state:'',
      city:'',
      otherCommunity: false,
  }


  const validationSchema = Yup.object({
      name: Yup.string().max(15, 'Must be 15 char or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.number().required('Required'),
      
  })

    //Redirecttosign in state is true we naviagte to this route.
    if(redirectToSignIn) return <Navigate to='/signin' />
    // Redirects to Profile after a successfull info updates
    if(redirectToProfile){ return( <Navigate to={`/user/${userId}`} /> )}

  return (
    <Layout>
      <Helmet>
          <title>TNEB Matrimony | Profile Edit | Sai Matrimony</title>
      </Helmet>
      <SubHeader heading='Profile'/>
      <br/>
      <br/>
        <div className='ui container'>
            <h2 className="ui header">Profile Details </h2>
            <div className="ui divider"></div> 


            <Formik
        initialValues={profile || initialValues}
        enableReinitialize
        onSubmit= {(values) => {
            console.log('values on submit :>> ', values);
            postData(values)
            
          }}
    
        >
            {formik => (
                <Form className='ui form' onSubmit={formik.handleSubmit}>
                    {/* Name  */}
                    <div className="field"> 
                        <label htmlFor="name">Name</label>
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" />     
                    </div>
                    {/* Email */}
                    <div className="field">
                        <label htmlFor="email">Email address</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" />        
                    </div>            
                    {/* Password */}
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" />
                        <ErrorMessage name="password" />     
                    </div>
                    {/* About Me -txt box */}
                    <div className="field">
                        <label htmlFor="about">About</label>
                        <Field name="about" as='textarea' />
                        <ErrorMessage name="about" />     
                    </div>                     
                    {/* Phone */}
                    <div className="field">
                        <label htmlFor="mobile">Phone</label>
                        <Field name="mobile" type="number" />
                        <ErrorMessage name="mobile" />     
                    </div>   
                    {/* Date of birth */}
                    <div className="field">
                      <label htmlFor="dateofbirth">Date of Birth</label>
                      <Field name="dateofbirth" type="text" placeholder='dd/mm/yyyy' />
                    </div>
                    {/* Gender */}
                    <div className="field">
                      <label htmlFor="gender">Gender</label>
                          <Field type="radio" name="gender" value="Male" />
                          Male
                          <Field type="radio" name="gender" value="Female" />
                          Female
                    </div>
                    {/* Mother Tounge */}
                    <div className="field">
                        <label htmlFor="mothertounge">Mother Tounge</label>
                        <Field name="mothertounge" as="select" className="my-select">
                            <option >Select One</option>
                            <option value="Tamil">Tamil</option>
                            <option value='Telugu'>Telugu</option>
                            <option value='Malayalam'>Malayam</option>
                            <option value='Kanndiga'>Kannadiga</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Marathi">Marathi</option>
                            <option value="Gujarathi">Gujarathi</option>
                            <option value="Urudu">Urudu</option>
                            <option value="English">English</option>
                             
                        </Field>
                    </div>
                    {/* Religion */}
                    <div className="field">
                        <label htmlFor="religion">Religion</label>
                        <Field name="religion" as="select" className="my-select">
                            <option >Select One</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Islam">Islam</option>
                            <option value="Christianity">Christianity</option>
                            <option value="Sikhism">Sikhism</option>
                            <option value="Buddhism">Buddhism</option>
                            <option value="Jainism">Jainism</option>
                            <option value="NoReligion">No Religion</option>
                        </Field>
                    </div>
                    {/* Created for */}
                    <div className="field">
                        <label htmlFor="createdfor">Profile created for</label>
                        <Field name="createdfor" as="select" className="my-select">
                            <option >Select One</option>
                            <option value="myself">Myself</option>
                            <option value='daughter'>Daughter</option>
                            <option value='son'>Son</option>
                            <option value='relative'>Relative</option>
                            <option value="brother">Brother</option>
                            <option value="sister">Sister</option>
                            <option value='friend'>Friend</option>
                        </Field>
                    </div>
                    <br/>
                    <h3 className="ui header">Religious Info</h3>
                    {/* Caste */}
                    <div className="field">
                        <label htmlFor="caste">Caste</label>
                        <Field name="caste" as="select" className="my-select">
                            <option >Select One</option>                            
                            <option value="Adaviyar">Adaviyar</option>
                            <option value="Agamudayar">Agamudayar</option>
                            <option value="Arunattu Vellalar">Arunattu Vellalar</option>
                            <option value="Arya Vaishya">Arya Vaishya</option>
                            <option value="Badagas">Badagas</option>
                            <option value="Boya">Boya</option>
                            <option value="Chettiar">Chettiar</option>
                            <option value="Chozhia Vellalar">Chozhia Vellalar</option>
                            <option value="Devendrakula Velalar">Devendrakula Velalar</option>
                            <option value="Elur Chetty">Elur Chetty</option>
                            <option value="Gounder">Gounder</option>
                            <option value="Iyer">Iyer</option>
                            <option value="Kallar">Kallar</option>
                            <option value="Konar">Konar</option>
                            <option value="Kongu Vellalar">Kongu Vellalar</option>
                            <option value="Koravar">Koravar</option>
                            <option value="Kurumba Gounder">Kurumba Gounder</option>
                            <option value="Maravar">Maravar</option>
                            <option value="Mazhavaraayas">Mazhavaraayas</option>
                            <option value="Mudaliar">Mudaliar</option>
                            <option value="Nadar">Nadar</option>
                            <option value="Palayakkara Naicker">Palayakkara Naicker</option>
                            <option value="Paravar">Paravar</option>
                            <option value="Sembadavar">Sembadavar</option>
                            <option value="Udayar">Udayar</option>
                            <option value="Vallanattu Chettiar">Vallanattu Chettiar</option>
                            <option value="Vannar">Vannar</option>
                            <option value="Vanniyar">Vanniyar</option>
                            <option value="Vellalar">Vellalar</option>
                        </Field>
                    </div>
                    {/* other Community */}
                    <div className="field">
                        <label htmlFor='otherCommunity'>
                            <Field type="checkbox" name="otherCommunity" /> Willing to marry from other community also
                        </label>
                    </div>
                     {/*Sub Caste  */}
                    <div className="field"> 
                        <label htmlFor="subCaste">Sub Caste</label>
                        <Field name="subCaste" type="text" />
                    </div>                   
                     {/*Gothram*/}
                    <div className="field"> 
                        <label htmlFor="gothram">Gothram</label>
                        <Field name="gothram" type="text" />
                    </div>                   
                     {/*Dosham*/}
                    <div className="field"> 
                        <label htmlFor="dosham">Dosham</label>
                        <Field name="dosham" type="text" />
                    </div>                   

                    <br/>
                    <h3 className="ui header">Personal Info</h3>
                    {/* Marital Status */}
                    <div className="field">
                        <label htmlFor="maritalStatus">Marital Status</label>
                        <Field name="maritalStatus" as="select" className="my-select">
                            <option >Select One</option>                            
                            <option value="Never Married">Never Married</option>
                            <option value="Widowed">Widowed</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Awaiting divorce">Awaiting divorce</option>
                        </Field>
                    </div>
                    {/* Height */}
                    <div className="field">
                        <label htmlFor="height">Height</label>
                        <Field name="height" type="number" placeholder='175 cms'/>   
                    </div>
                      {/* Family Status */}
                    <div className="field">
                        <label htmlFor="familyStatus">Family Status</label>                  
                            <Field type="radio" name="familyStatus" value="Middle Class"/>Middle Class
                            <Field type="radio" name="familyStatus" value="Upper Middle Class"/>Upper Middle Class 
                            <Field type="radio" name="familyStatus" value="Rich"/> Rich 
                            <Field type="radio" name="familyStatus" value="Affluent"/>Affluent 
                    </div> 
                    {/* Family Type */}
                    <div className="field">
                        <label htmlFor="familyType">Family Type</label>
                            <Field type="radio" name="familyType" value="Joint" />Joint
                            <Field type="radio" name="familyType" value="Nuclear" />Nuclear 
                    </div> 
                    {/* Family Values */}
                    <div className="field">
                        <label htmlFor="familyValues">Family Values</label>
                        <Field type="radio" name="familyValues" value="Orthodox" />Orthodox
                        <Field type="radio" name="familyValues" value="Traditional" />Traditional
                        <Field type="radio" name="familyValues" value="Moderate" />Moderate
                        <Field type="radio" name="familyValues" value="Liberal" />Liberal
                    </div>                                         
                    {/* Any Disablity */}
                    <div className="field">
                      <label htmlFor="disablity">Any Disablity</label>
                          <Field type="radio" name="disablity" value="None" />
                          None
                          <Field type="radio" name="disablity" value="Physically Challenged" />
                          Physically Challenged
                    </div>

                    <br/>
                    <h3 className="ui header">Professional Info</h3>

                    {/* Education */}
                    <div className="field">
                        <label htmlFor="education">Highest Education</label>
                        <Field name="education" as="select" className="my-select">
                            <option >Select One</option>          
                            <option value="B.Tech/B.E">B.Tech / B.E</option>
                            <option value="MBBS">MBBS</option>
                            <option value="B.L / M.L">B.L / M.L</option>
                            <option value="B.Sc / Arts">B.Sc / Arts</option>
                            <option value="10/ +2">10/ +2</option>
                        </Field>
                    </div>  
                    {/* Employed in */}
                    <div className="field">
                      <label htmlFor="employedIn">Employed In</label>
                          <Field type="radio" name="employedIn" value="Goverment/PSU"/> Goverment/PSU 
                          <Field type="radio" name="employedIn" value="Private"/> Private 
                          <Field type="radio" name="employedIn" value="Business"/> Business
                          <Field type="radio" name="employedIn" value="Defence"/> Defence
                          <Field type="radio" name="employedIn" value="Self Employeed"/> Self Employeed
                          <Field type="radio" name="employedIn" value="Not working"/> Not working    
                    </div>                    
                    {/* Occupation */}
                    <div className="field">
                        <label htmlFor="occupation">Occupation</label>
                        <Field name="occupation" as="select" className="my-select">
                            <option >Select One</option>          
                            <option value="Engineer">Engineer</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Lawyer">Lawyer</option>
                            <option value="Software Engineer">Software Engineer</option>
                            <option value="Sales/Marketing">Sales/Marketing</option>
                            <option value="Business Owner / Entrepreneur">Business Owner / Entrepreneur</option>
                            <option value="Mechanic/Specialist">Mechanic/Specialist</option>
                        </Field>
                    </div>   
                    {/* Annual Income */}
                    <div className="field">
                        <label htmlFor="income">Annual Income</label>
                        <Field name="income" as="select" className="my-select">
                            <option >Select One</option>          
                            <option value="0-5 Lakhs">0-5 Lakhs</option>
                            <option value="5-10 Lakhs">5-10 Lakhs</option>
                            <option value="11-20 Lakhs">11-20 Lakhs</option>
                            <option value="20 Lakhs Above">20 Lakhs Above</option>
                        </Field>
                    </div>   
                    {/* Work location */}
                    <div className="field"> 
                        <label htmlFor="workLocation">Work Location</label>
                        <Field name="workLocation" type="text" />
                    </div>                          
                    {/* State */}
                    <div className="field"> 
                        <label htmlFor="state">State</label>
                        <Field name="state" type="text" />
                    </div>                          
                    {/* City */}
                    <div className="field"> 
                        <label htmlFor="city">City</label>
                        <Field name="city" type="text" />
                    </div>                          
 

                <button type='submit' className='ui button'>Submit</button>
            </Form>
            )}
        </Formik>   
            


            <br/><br/>
        </div>
    </Layout>    
  )
}

export default ProfileFill