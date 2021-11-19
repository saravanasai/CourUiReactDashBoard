import { CFormSelect } from '@coreui/react'
import React from 'react'

const Selectinput = (props) => {
  return (
    <>
      {/* <label className="form-group has-float-label">
        <select className="form-control" id="country">
          <option hidden>Choose the country</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Canada</option>
          <option>Canada</option>
          <option>Canada</option>
          <option>...</option>
        </select>
        <span>Email</span>
      </label> */}
      <div className="mb-3 floating-label">
        <select className="form-control" id="select-no-option">
          <option value="">hello</option>
          <option value="">hello</option>
          <option value="">hello</option>
        </select>
        <label htmlFor="select-no-option">select no option</label>
      </div>

      {/* <div className="mb-3 floating-label">
        <select className="form-select" id="form-select">
          <option hidden value=""></option>
          <option value="1">2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <label htmlFor="form-select">form-select</label>
      </div> */}
    </>
  )
}

export default Selectinput
