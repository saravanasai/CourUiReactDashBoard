import { CFormInput } from '@coreui/react'
import React from 'react'

const FileInput = (props) => {
  return (
    <span className="form-group has-float-label">
      <input className="form-control" id="email" type="file" placeholder="" />
      <label htmlFor="email">Upload Odometer</label>
    </span>
  )
}

export default FileInput
