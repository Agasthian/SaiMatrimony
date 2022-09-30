import React from 'react'
import {Link} from 'react-router-dom';

import './subheader.styles.scss';

const SubHeader = ({heading}) => {

  return (
    <div className='dashheader'>
        <h2>{heading}</h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb ">
                <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">{heading}</li>
            </ol>
        </nav>
    </div>
  )
}

export default SubHeader

