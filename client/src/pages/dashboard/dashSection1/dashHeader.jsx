import React from 'react'
import {Link} from 'react-router-dom';

import './dashHeader.styles.scss';

const DashHeader = () => {
  return (
    <div className='dashheader'>
        <h2>All Members</h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb ">
                <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">All Members</li>
            </ol>
        </nav>
    </div>
  )
}

export default DashHeader