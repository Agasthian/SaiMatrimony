import React from 'react'
import {Link} from 'react-router-dom'
import './section3.styles.scss'

const Section3 = () => {
  return (
    <div className='section3'>
      <div className="section3_wrapper container">
        <div className="section3_wrapper-photo">
          
        </div>
        <div className="section3_wrapper-content">
          <h3>Sai Matimony finds the perfect one </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo rerum excepturi natus dignissimos nulla distinctio sed dolores culpa numquam, illo error similique consequatur ut ullam quos soluta eaque porro dolor.</p>
          <br />
          <h4>Why Choose Sai Matimony</h4>
          <ul>
            <li>Trusted service for all</li>
            <li>Verified phone numbers</li>
            <li>Large number of profiles</li>
          </ul>
          <Link to='/signin'>
            <button className='btn btn--orange'>Get Started - Register now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Section3