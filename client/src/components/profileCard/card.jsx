import React from 'react'
import {Link} from 'react-router-dom';

import './card.styles.scss';
import DefaultProfile from '../../assets/defaultUser.png';

const Card = ({user}) => {
  
  return (
    <div className='cardWrapper'>
      <div className="cardWrapper_imgclass">
        <img 
            className='cardWrapper_img' 
            src={`${process.env.REACT_APP_API_URL}/user/avatar/${user._id}`}   
            onError={i => (i.target.src = `${DefaultProfile}`)}
            alt={user.name} 
          />    
      </div>
      <div className="cardWrapper_info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        
      <button className='btn btn--orange'>
        <Link to={`/user/${user._id}`}>View Profile</Link>
      </button>

      </div>
      
      
    </div>
  )
}

export default Card 