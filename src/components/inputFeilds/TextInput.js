import { CFormInput } from '@coreui/react'
import PropTypes from 'prop-types'
import React from 'react'

const TextInput = (props) => {
  return (
    // <span className="form-group has-float-label">
    //   <input className="form-control" id="email" type="text" placeholder="" />
    //   <label className="customer_lable" htmlFor="email">
    //     date
    //   </label>
    // </span>
    <div className="floating-label">
      <input type="email" id="email" className="form-control" placeholder="" />
      <label htmlFor="email">Email</label>
    </div>
  )
}

export default TextInput
