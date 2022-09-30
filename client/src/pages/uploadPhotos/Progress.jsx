import React from 'react'
import PropTypes from 'prop-types'
import { Progress } from 'semantic-ui-react'

const ProgressBar = ({percentage}) => {
  return (
    <div >
         <Progress percent={percentage} indicating />
    </div>
  )
}

ProgressBar.propTypes = {
    percentage:PropTypes.number.isRequired
}

export default ProgressBar