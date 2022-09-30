import React from 'react'
import Register from '../../../components/accountRegister/register'
import './landingSection.scss'

const LandingSection1 = () => {
  return (
    // <div className='section1Wrapper'>
    //     <div className="section1Left"></div>
    //     <div className="section1Right">
    //         <div className="section1Right_register">
    //             <div className="section1Right_register-card">
    //                 <h3 className="heading">
    //                     Start Your Life
    //                 </h3>
    //                 <Register/>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className='section1Wrapper'>
        <div className="container">
            <div className="section1Wrapper__form">
                <div className="section1Wrapper__form_wrapper">
                    <h2>Find your happpy one </h2>
                    <Register/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingSection1