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
  CFormFloating,
} from '@coreui/react'

import { TextField } from '@mui/material'

import { React, useState } from 'react'
import CustomTable from '../customComponent/CustomTable'
import FileInput from '../inputFeilds/FileInput'
import Selectinput from '../inputFeilds/Selectinput'
import TextInput from '../inputFeilds/TextInput'

const Test = () => {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <>
      <CCard>
        {/* <CNav className="p-3 " variant="pills" size="sm" role="tablist">
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
        </CNav> */}
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
            <CForm className="row g-3 m-2 p-1">
              <CRow>
                <CCol md={3}>
                  <CFormLabel htmlFor="vehicleType">Vehicle Type</CFormLabel>
                  <CFormInput size="sm" id="vehicleType" placeholder=""/>

                </CCol>

                <CCol md={3}>
                  <CFormLabel htmlFor="inputAddress">Vehicle No</CFormLabel>
                  <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                    <option>Select Vehicle No</option>

                    <option value="1">TN45-AT-8614</option>

                    <option value="2">TN45-AT-8612</option>

                    <option value="3">TN45-AT-9687</option>
                  </CFormSelect>

                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Vehicle Capacity</CFormLabel>

                  <CFormInput
                    size="sm"
                    value={`25-ton`}
                    id="inputAddress"
                    placeholder="Vehicle Capacity"
                    readOnly
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Driver Name</CFormLabel>
                  <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                    <option>Select Driver</option>

                    <option value="1">TEST-1</option>

                    <option value="2">TEST-2</option>

                    <option value="3">TEST-3</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Driver Cell No</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" placeholder="7708454539" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Odometer Km</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" placeholder="Km on Odometer" />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="formFileSm">Odometer Photo</CFormLabel>
                  <CFormInput type="file" size="sm" id="formFileSm" />
                </CCol>
                <CCol xs={12} md={3} className="mt-3 pt-1" style={{display:'flex',justifyContent:'space-between'}}>
                {/* <CCol className="mt-3 offset-md-9 py-2" xs={12} sm={12} md={3}> */}
                 <CButton size="sm" color="warning" className="text-white" type="submit">
                    Wait OutSide
                  </CButton>
                  <CButton size="sm" color="warning" className="text-white" type="submit">
                    Gate In
                  </CButton>
                  {/* </CCol> */}
                </CCol>
              </CRow>
              {/* <CRow>
                <CCol className="mt-3 offset-md-9 py-2" xs={12} sm={12} md={3}>
                  <CButton size="sm" color="warning" className="mx-3 text-white" type="submit">
                    Wait OutSide
                  </CButton>
                  <CButton size="sm" color="warning" className="mx-3 text-white" type="submit">
                    Gate In
                  </CButton>
                </CCol>
              </CRow> */}
            </CForm>
          </CTabPane>
        </CTabContent>
      </CCard>
      <CCard className="mt-4">
        <CContainer className="mt-2">
          <CustomTable />
        </CContainer>
      </CCard>
    </>
  )
}

export default Test
