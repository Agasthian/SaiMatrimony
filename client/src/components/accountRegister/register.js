// import _ from 'lodash'
import React from 'react'
import {Link} from 'react-router-dom'
import {reduxForm, Field} from 'redux-form'

import './register.styles.scss'

  
  const profiles = ['Myself', 'Daughter', 'Son', 'Sister', 'Brother', 'Relative', 'Friend']
  

  const renderProfileSelector = ({ input, meta: { touched, error } }) => (
    <div>
      <select className='form_select' {...input}>
        <option value="">Myself...</option>
        {profiles.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  )

const Register = (props) => {

    const {handleSubmit} = props;
    //handle submit comes from redux-form wrapped at the bottom

    const renderFields = ()=> {
        return (
          <>

            <div className='form_group'>
              <Field className='form_input' name='name' component='input' type='text' placeholder='Name'/>
              <label className='form_label'>Name</label>
            </div>

            <div className='form_group'>
              <Field className='form_input' name='phone number' component='input' type='text' placeholder='Phone Number' />
              <label className='form_label'>Phone Number</label>
            </div>

            <div className='form_group'>
              <Field name="profile for" component={renderProfileSelector} />
              <label className='form_label'>Matrimony Profile For</label>
            </div>
          
            <div className='form_group'>
              <div>
                <label>
                <Field className='form_input' name="sex" component="input" type="radio" value="male" />{' '}
                  Male
                </label>
                <label>
                  <Field className='form_input' name="sex" component="input" type="radio" value="female" />{' '}
                  Female
                </label>
              
              </div>
              <label className='form_label'>Gender</label>
            </div>


          </>
        ) 
    }

  return (
    <div className=''>
        <form onSubmit={handleSubmit(values => console.log(values))}>
            {renderFields()}
            <Link to='/signin'>
              <button type='submit' className='btn btn--orange'>Register Free</button>
            </Link>
        </form>
    </div>
  )
}

export default reduxForm({
    form : 'registration'
}) (Register)