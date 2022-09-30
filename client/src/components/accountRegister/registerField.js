import React from 'react'

const RegisterField = ({label,input, type}) => {
  return (
    <div>
        <label>{label}</label>
        <input {...input} placeholder={label} type={type} />
    </div>
  )
}

export default RegisterField