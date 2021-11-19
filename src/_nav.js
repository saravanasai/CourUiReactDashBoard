import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilApplications,
  cilBell,
  cilBrowser,
  cilCalculator,
  cilChartPie,
  cilCheck,
  cilCursor,
  cilDrop,
  cilGauge,
  cilInput,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Yard Gate-In',
    to: '/test',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vehicle Inspection',
    to: '/dashboard',
    icon: <CIcon icon={cilCheck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vehicle Maintain',
    to: '/base/breadcrumbs',
    icon: <CIcon icon={cilGauge} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Docs. Verification',
    to: '/base/accordion',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vendor Create Req.',
    to: '/base',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Vendor Create App.',
  //   to: '/base/breadcrumbs',
  //   icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Sub Menu',
  //   to: '/base',
  //   icon: <CIcon icon={cilBrowser} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Accordion',
  //       to: '/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //   ],
  // },
  
]

export default _nav
