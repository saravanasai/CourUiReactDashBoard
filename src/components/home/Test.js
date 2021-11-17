/* eslint-disable prettier/prettier */
import {
  CButton,
  CCard,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTabPane,
  CFormFloating
} from '@coreui/react'

import TextField from '@mui/material/TextField';


import React, { useState } from 'react'

const Test = () => {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <>
      <CCard>
        <CNav className="p-3 " variant="pills" size="sm" role="tablist">
          <CNavItem>
            <CNavLink
              className="btn btn-sm"
              href="javascript:void(0);"
              active={activeKey === 1}
              onClick={() => setActiveKey(1)}
            >
              Security Yard Gate
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
            <CForm className="row g-3 mt-4 p-1">
              <CRow>
                <CCol md={3}>
                  <input id="vehicleType" type="text" required />
                  <label htmlFor="vehicleType" placeholder="Vehicle Type"></label>
                </CCol>

                <CCol md={3}>

                  <select id="vehicleNo">
                    <option>Select Vehicle No.</option>

                    <option value="1">TN45-AT-8614</option>

                    <option value="2">TN45-AT-8612</option>

                    <option value="3">TN45-AT-9687</option>
                  </select>
                  {/* <label htmlFor="vehicleNo" placeholder="Vehicle No"></label> */}
                  {/* <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                      <option>Select Vehicle No</option>

                      <option value="1">TN45-AT-8614</option>

                      <option value="2">TN45-AT-8612</option>

                      <option value="3">TN45-AT-9687</option>
                    </CFormSelect>
                    <CFormLabel htmlFor="inputAddress">Vehicle No</CFormLabel> */}
                </CCol>

                <CCol xs={12} md={3}>
                  {/* <CFormLabel htmlFor="inputAddress">Vehicle Capacity</CFormLabel>

                  <CFormInput
                    size="sm"
                    value={`25-ton`}
                    id="inputAddress"
                    placeholder="Vehicle Capacity"
                    readOnly
                  /> */}
                  <input id="vehicleCapacity" type="text" required />
                  <label htmlFor="vehicleCapacity" placeholder="Vehicle Capacity"></label>
                </CCol>
                <CCol xs={12} md={3}>
                  {/* <CFormLabel htmlFor="inputAddress">Driver Name</CFormLabel>
                  <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                    <option>Select Driver</option>

                    <option value="1">TEST-1</option>

                    <option value="2">TEST-2</option>

                    <option value="3">TEST-3</option>
                  </CFormSelect> */}

                  <select id="vehicleNo">
                    <option>Select Driver</option>

                    <option value="1">TEST-1</option>

                    <option value="2">TEST-1</option>

                    <option value="3">TEST-1</option>
                  </select>
                  {/* <label htmlFor="vehicleNo" placeholder="Vehicle No"></label> */}
                </CCol>
              </CRow>
              <CRow>
                <CCol xs={12} md={3}>
                  {/* <CFormLabel htmlFor="inputAddress">Driver Cell No</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" placeholder="7708454539" readOnly /> */}

                  <input id="inputAddress" type="text" value="7708454539" required />
                  <label htmlFor="inputAddress" placeholder="Driver Cell No"></label>
                </CCol>

                <CCol xs={12} md={3}>
                  {/* <CFormLabel htmlFor="inputAddress">Odometer Km</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" placeholder="Km on Odometer" /> */}
                  <input id="inputAddress" type="text" required />
                  <label htmlFor="inputAddress" placeholder="Km on Odometer"></label>
                </CCol>

                <CCol xs={12} md={3}>
                  {/* <CFormLabel htmlFor="formFileSm">Odometer Photo</CFormLabel>
                  <CFormInput type="file" size="sm" id="formFileSm" /> */}

                  {/* <input id="formFileSm" type="file" required />
                  <label htmlFor="formFileSm" placeholder="Odometer Photo"></label> */}


                </CCol>
              </CRow>
              <CRow>
                <CCol className="mt-3 offset-md-9 py-2" xs={12} sm={12} md={3}>
                  <CButton size="sm" color="primary" className="mx-3 text-white" type="submit">
                    Wait OutSide
                  </CButton>
                  <CButton size="sm" className="mx-3 text-white" type="submit">
                    Gate In
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CTabPane>
        </CTabContent>
      </CCard>
      <CCard className="mt-4">
        <CContainer className="mt-2">
          <CTable responsive className="table table-sm">
            <CTableHead>
              <CTableRow>
                {/* <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Vehicle Type</CTableHeaderCell>
                <CTableHeaderCell scope="col">Vehicle No</CTableHeaderCell>
                <CTableHeaderCell scope="col">Vehicle Capacity</CTableHeaderCell>
                <CTableHeaderCell scope="col">Driver Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Phone Number</CTableHeaderCell>
                <CTableHeaderCell scope="col">Status</CTableHeaderCell> */}

                <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                <CTableHeaderCell scope="col">VA No</CTableHeaderCell>
                <CTableHeaderCell scope="col">Tripsheet No</CTableHeaderCell>
                <CTableHeaderCell scope="col">Vehicle Type</CTableHeaderCell>
                <CTableHeaderCell scope="col">Vehicle No</CTableHeaderCell>
                <CTableHeaderCell scope="col">Driver Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Driver Cell No</CTableHeaderCell>
                <CTableHeaderCell scope="col">Waiting At</CTableHeaderCell>
                <CTableHeaderCell scope="col">Screen Duration</CTableHeaderCell>
                <CTableHeaderCell scope="col">Overall Duration</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                {/* <CTableHeaderCell scope="row">1</CTableHeaderCell>

                <CTableDataCell>Own</CTableDataCell>

                <CTableDataCell>TN45-AT-1985</CTableDataCell>

                <CTableDataCell>25-TON</CTableDataCell>

                <CTableDataCell>TEST-1</CTableDataCell>

                <CTableDataCell>7708454539</CTableDataCell>
                <CTableDataCell>
                  <CBadge className="p-2" color="primary">
                    Gate In
                  </CBadge>
                </CTableDataCell> */}

                <CTableDataCell scope="row">1</CTableDataCell>
                <CTableDataCell>11110</CTableDataCell>
                <CTableDataCell>70001</CTableDataCell>
                <CTableDataCell>Own</CTableDataCell>
                <CTableDataCell>TN39CG9901</CTableDataCell>
                <CTableDataCell>GOBI</CTableDataCell>
                <CTableDataCell>8525097921</CTableDataCell>
                <CTableDataCell>
                  <span className="badge rounded-pill bg-info">DI Creation</span>
                </CTableDataCell>
                <CTableDataCell>0 Hrs 07 Mins</CTableDataCell>
                <CTableDataCell>0 Hrs 55 Mins</CTableDataCell>
                <CTableDataCell>
                  <CButton className="btn btn-sm" color="primary">
                    Gate In
                  </CButton>
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell scope="row">2</CTableDataCell>
                <CTableDataCell>11110</CTableDataCell>
                <CTableDataCell>70001</CTableDataCell>
                <CTableDataCell>Own</CTableDataCell>
                <CTableDataCell>TN39CG9901</CTableDataCell>
                <CTableDataCell>GOBI</CTableDataCell>
                <CTableDataCell>8525097921</CTableDataCell>
                <CTableDataCell>
                  <span className="badge rounded-pill bg-info">DI Creation</span>
                </CTableDataCell>
                <CTableDataCell>0 Hrs 07 Mins</CTableDataCell>
                <CTableDataCell>0 Hrs 55 Mins</CTableDataCell>
                <CTableDataCell>
                  <CButton className="btn btn-sm" color="primary">
                    Gate In
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell scope="row">3</CTableDataCell>
                <CTableDataCell>11110</CTableDataCell>
                <CTableDataCell>70001</CTableDataCell>
                <CTableDataCell>Own</CTableDataCell>
                <CTableDataCell>TN39CG9901</CTableDataCell>
                <CTableDataCell>GOBI</CTableDataCell>
                <CTableDataCell>8525097921</CTableDataCell>
                <CTableDataCell>
                  <span className="badge rounded-pill bg-info">DI Creation</span>
                </CTableDataCell>
                <CTableDataCell>0 Hrs 07 Mins</CTableDataCell>
                <CTableDataCell>0 Hrs 55 Mins</CTableDataCell>
                <CTableDataCell>
                  <CButton className="btn btn-sm" color="primary">
                    Gate In
                  </CButton>
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell scope="row">4</CTableDataCell>
                <CTableDataCell>11110</CTableDataCell>
                <CTableDataCell>70001</CTableDataCell>
                <CTableDataCell>Own</CTableDataCell>
                <CTableDataCell>TN39CG9901</CTableDataCell>
                <CTableDataCell>GOBI</CTableDataCell>
                <CTableDataCell>8525097921</CTableDataCell>
                <CTableDataCell>
                  <span className="badge rounded-pill bg-info">DI Creation</span>
                </CTableDataCell>
                <CTableDataCell>0 Hrs 07 Mins</CTableDataCell>
                <CTableDataCell>0 Hrs 55 Mins</CTableDataCell>
                <CTableDataCell>
                  <CButton className="btn btn-sm" color="primary">
                    Gate In
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CContainer>
      </CCard>
    </>
  )
}

export default Test
