import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilApplications,
  cilBell,
  cilBrowser,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
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
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Menu',
    to: '/dashboard',
    icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Sub Menu',
    to: '/base',
    icon: <CIcon icon={cilBrowser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'TEST',
    to: '/test',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Security',
    to: '/security',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
]

export default _nav
