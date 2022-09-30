import React from 'react'

import './footer.styles.scss'
// import {Container} from '../../themes/utils'

const FooterNew = () => {
  return (
    <div className='footerSection'>
      <div className='container'>
        <div className='footerItemsAll'>
          <div className='footerItem'>
            <div className='heading'>Company</div>
            <div className='footerText'>Home</div>
            <div className='footerText'>About Us</div>
            <div className='footerText'>Contact Us</div>
          </div>
          <div className='footerItem'>
            <div className='heading'>Let's Talk</div>
            <div className='footerText'>Home</div>
            <div className='footerText'>About Us</div>
            <div className='footerText'>Contact Us</div>
          </div>
          <div className='footerItem'>
            <div className='heading'>Connect With Us</div>
            <div className='footerText'>Home</div>
            <div className='footerText'>About Us</div>
            <div className='footerText'>Contact Us</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FooterNew