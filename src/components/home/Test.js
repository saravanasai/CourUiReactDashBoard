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
          <CustomTable />
        </CContainer>
      </CCard>
    </>
  )
}

export default Test
