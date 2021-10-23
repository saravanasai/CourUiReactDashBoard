import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
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
} from '@coreui/react'
import React, { useState } from 'react'
import { DocsCallout, DocsExample } from '..'

const ParkingYardGate = () => {
  const [activeKey, setActiveKey] = useState(1)

  return (
    <CCard>
      <section className="p-2">
        <>
          <CNav variant="pills" size="sm" role="tablist">
            <CNavItem>
              <CNavLink
                className="btn btn-sm"
                href="javascript:void(0);"
                active={activeKey === 1}
                onClick={() => setActiveKey(1)}
              >
                Own & Contract
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink
                className="btn btn-sm"
                href="javascript:void(0);"
                active={activeKey === 2}
                onClick={() => setActiveKey(2)}
              >
                Hire
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent>
            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
              <CForm className="row g-3 mt-4 p-1">
                <CRow>
                  <CCol md={3}>
                    <CFormLabel htmlFor="inputAddress">Vehicle Type</CFormLabel>
                    <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                      <option>Select Vehicle Type</option>

                      <option value="1">own</option>

                      <option value="2">contract</option>

                      <option value="3">hire</option>
                    </CFormSelect>
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
                </CRow>
                <CRow className="mt-3 offset-md-8">
                  <CCol xs={12} sm={12} md={6}>
                    <CButton size="sm" className="mx-3" type="submit">
                      Wait OutSide
                    </CButton>
                    <CButton size="sm" className="mx-3" type="submit">
                      Gate In
                    </CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
              <CForm className="row g-3 p-1">
                <CCol md={3}>
                  <CFormLabel htmlFor="inputAddress">Vehicle Type</CFormLabel>
                  <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                    <option>Select Vehicle Type</option>

                    <option value="1">FULL BODY</option>

                    <option value="2">OPEN BODY</option>

                    <option value="3">HALF BODY</option>
                  </CFormSelect>
                </CCol>
                <CCol md={3}>
                  <CFormLabel htmlFor="inputAddress">Vehicle No</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" placeholder="Vehicle No" />
                </CCol>

                <CCol xs={3}>
                  <CFormLabel htmlFor="inputAddress">Vehicle Capacity</CFormLabel>

                  <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                    <option>Select Vehicle Capacity</option>

                    <option value="1">10-TON</option>

                    <option value="2">20-TON</option>

                    <option value="3">30-TON</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={3}>
                  <CFormLabel htmlFor="inputAddress">Driver Name</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" placeholder="Driver Name" />
                </CCol>
                <CCol xs={3}>
                  <CFormLabel htmlFor="inputAddress">Driver Cell No</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" placeholder="Phone Number" />
                </CCol>
                <CCol xs={3}>
                  <CFormLabel htmlFor="inputAddress">Vehicle Body</CFormLabel>
                  <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                    <option>Select Vehicle Body</option>
                    <option value="1">CLOSED BODY</option>
                    <option value="2">OPEN BODY</option>
                  </CFormSelect>
                </CCol>
                <CRow className="mt-4">
                  <CCol xs={12} md={2} className="offset-md-8">
                    <CButton size="sm" type="submit">
                      Wait OutSide
                    </CButton>
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CButton size="sm" type="submit">
                      Gate In
                    </CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CTabPane>
          </CTabContent>
        </>
      </section>
      <CContainer className="mt-2">
        <CTable responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>

              <CTableHeaderCell scope="col">Vehicle Type</CTableHeaderCell>

              <CTableHeaderCell scope="col">Vehicle No</CTableHeaderCell>

              <CTableHeaderCell scope="col">Vehicle Capacity</CTableHeaderCell>

              <CTableHeaderCell scope="col">Driver Name</CTableHeaderCell>

              <CTableHeaderCell scope="col">Phone Number</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>

              <CTableDataCell>Own</CTableDataCell>

              <CTableDataCell>TN45-AT-1985</CTableDataCell>

              <CTableDataCell>25-TON</CTableDataCell>

              <CTableDataCell>TEST-1</CTableDataCell>

              <CTableDataCell>7708454539</CTableDataCell>
              <CTableDataCell>
                <CBadge color="success">Gate In</CBadge>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>

              <CTableDataCell>Own</CTableDataCell>

              <CTableDataCell>TN45-AT-1985</CTableDataCell>

              <CTableDataCell>25-TON</CTableDataCell>

              <CTableDataCell>TEST-1</CTableDataCell>

              <CTableDataCell>7708454539</CTableDataCell>
              <CTableDataCell>
                <CBadge color="warning">Wait Outside</CBadge>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">3</CTableHeaderCell>

              <CTableDataCell>Own</CTableDataCell>

              <CTableDataCell>TN45-AT-1985</CTableDataCell>

              <CTableDataCell>25-TON</CTableDataCell>

              <CTableDataCell>TEST-1</CTableDataCell>

              <CTableDataCell>7708454539</CTableDataCell>
              <CTableDataCell>
                <CBadge color="danger">Rejected</CBadge>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">4</CTableHeaderCell>

              <CTableDataCell>Own</CTableDataCell>

              <CTableDataCell>TN45-AT-1985</CTableDataCell>

              <CTableDataCell>25-TON</CTableDataCell>

              <CTableDataCell>TEST-1</CTableDataCell>

              <CTableDataCell>7708454539</CTableDataCell>
              <CTableDataCell>
                <CBadge color="success">Gate In</CBadge>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CContainer>
    </CCard>
  )
}

export default ParkingYardGate
