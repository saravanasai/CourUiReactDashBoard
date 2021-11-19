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
                <CCol xs={12} md={3}>
                  <TextInput lableName={'Name'} inputType={'date'} />
                </CCol>
                <CCol xs={12} md={3}>
                  <Selectinput lableName={'Select Drivers'}></Selectinput>
                </CCol>
                <CCol xs={12} md={3}>
                  <FileInput lableName={'OdoMeter'} />
                </CCol>
                <CCol xs={12} md={3}>
                  {/* <TextField label={'hello'} variant={'outlined'} /> */}
                </CCol>
              </CRow>

              <CRow>
                <CCol className="mt-3 offset-md-9 py-2" xs={12} sm={12} md={3}>
                  <CButton size="sm" color="primary" className="mx-3 text-white" type="submit">
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
          <CTable responsive className="table table-sm">
            <CTableHead>
              <CTableRow>
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
                  <CButton className="badge text-white" color="warning">
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
                  <CButton className="badge text-white" color="warning">
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
                  {/* <CButton className="btn btn-sm rounded-pill text-white" color="warning"> */}
                  <CButton className="badge text-white" color="warning">
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
                  <CButton className="badge text-white" color="warning">
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
