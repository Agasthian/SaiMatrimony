import React,{useState} from 'react'
import { Navigate,useParams} from 'react-router-dom'
import axios from 'axios'
import Message from './Message'
import ProgressBar from './Progress';
import {Helmet} from 'react-helmet'

import Layout from '../../components/layout/layout'
import SubHeader from '../../components/subHeader/subHeader.component'

const UploadPhoto = () => {

    //State
    const [file, setFile] = useState('');
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [uploadedPhoto, setUploadedPhoto] = useState({});
    const [message, setMessage]= useState('');
    const[uploadPercentage,setUploadPercentage] = useState(0);
    const [redirectToProfile, setredirectToProfile] = useState(false) //Redirect after successful update to profile page

    //use params gets the parameter from url - eg:user id
    const {userId} = useParams() 

    //URL
    //const API_URL =`${process.env.REACT_APP_API_URL}/upload`
    const API_URL =`${process.env.REACT_APP_API_URL}/user/avatar/${userId}`

    //Axios - POST
    const pushPhoto =  async() => {
        const formData = new FormData();
		formData.append('file', file);
        
        try {
            const response = await axios.post(API_URL, formData,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progressEvent =>{
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded *100)/progressEvent.total)))

                    setTimeout( ()=> setUploadPercentage(0), 10000)
                }
            })

            const{fileName, filePath} = response.data
            setUploadedPhoto({fileName, filePath })     
            setMessage('File Uploaded')
            setredirectToProfile(true)

            
        } catch (error) {
            if(error.response.status === 500){
              setMessage('There was as problem with the server');
            } else {
              setMessage(error.response.data.msg)
            }
          }

    }

    //HandleChange
	const onChangeHandler = (e) => {
		setFile(e.target.files[0]);
		setIsFilePicked(true);
	};

     //onHandleSubmit 
     const onHandleSubmit =  async e => {
        e.preventDefault();
        pushPhoto()
      }

    // Redirects to Profile after a successfull info updates
    if(redirectToProfile){ return( <Navigate to={`/user/${userId}`} /> )}

  return (
    <Layout>
      <Helmet>
          <title>TNEB Matrimony | Profile Photo | Sai Matrimony</title>
      </Helmet>
      <SubHeader heading='Profile Photo'/>
      <br/>
      <br/>
        <div className='ui container'>     
            <h2 className="ui header">Photo Upload section</h2>
            <div className="ui divider"></div>  

            <form className="ui form success" onSubmit={onHandleSubmit}>
                
                
                <div className="field">
                    <label htmlFor="customFile">Upload Profile Photo</label>
                    <input type="file" name='file' id='customFile' onChange={onChangeHandler}/>
                </div>
                <button className="ui button green" value='Upload' type="submit">Upload Profile Photo</button>

                {isFilePicked ? (
                    <div>
                        <h4>Image details</h4>
                        {message ? <Message msg={message}/> : null}
                        <ProgressBar percentage={uploadPercentage}/>
                        <p>Filename: {file.name}</p>
                        <p>Filetype: {file.type}</p>
                        <p>Size in bytes: {file.size}</p>
                        <p>
                            lastModifiedDate:{' '}
                            {file.lastModifiedDate.toLocaleDateString()}
                        </p>
                        <img style={{width: '100%'}} src={uploadedPhoto.filePath} alt="" />
                    </div>
                ) : (
                    <p>Select a file to show details</p>
                )}


                

                <br/><br/>
            </form>

            {/* {     isFilePicked ? 
                    <div className=''>
                        <h3>{uploadedPhoto.fileName}</h3>
                        <img style={{width: '100%'}} src={uploadedPhoto.filePath} alt="" />
                    </div> : null
            } */}
        </div>
    </Layout>
  )
}

export default UploadPhoto