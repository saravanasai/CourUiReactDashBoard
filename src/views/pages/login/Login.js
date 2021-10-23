import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch } from 'react-redux'
import loginRequest from 'src/redux/Auth/AuthAction'

const Login = () => {
  const [LoginForm, setLoginForm] = useState({
    username: '',
    password: '',
    department: 0,
  })
  const navigation = useHistory()
  const dispatch = useDispatch()
  const handleLogin = () => {
    console.log(LoginForm.department)
    dispatch(loginRequest(LoginForm.department))
    if (LoginForm.username === 'test' && LoginForm.password === '1234') {
      switch (LoginForm.department) {
        case '1': {
          navigation.push('/security')
          break
        }
        case '2':
          navigation.push('')
          break
        case '3':
          navigation.push('')
          break
        default:
          console.log('not matched')
      }
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm className="text-center">
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">LOGISTICS PRO</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>

                      <CFormInput
                        placeholder="Username"
                        value={LoginForm.username}
                        onChange={(e) => setLoginForm({ ...LoginForm, username: e.target.value })}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        value={LoginForm.password}
                        onChange={(e) => setLoginForm({ ...LoginForm, password: e.target.value })}
                      />
                    </CInputGroup>
                    <CFormSelect
                      value={LoginForm.department}
                      onChange={(e) => setLoginForm({ ...LoginForm, department: e.target.value })}
                      className="my-3"
                      aria-label="Default select example"
                    >
                      <option>Choose Department</option>
                      <option value="1">Security</option>
                      <option value="2">Sourcing</option>
                      <option value="3">Accounts</option>
                    </CFormSelect>
                    <CRow>
                      <CCol xs={6}>
                        <div className="float-right">
                          <CButton onClick={handleLogin} color="primary" className="px-4">
                            Login
                          </CButton>
                        </div>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
