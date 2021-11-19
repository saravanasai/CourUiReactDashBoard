import DataTable from 'react-data-table-component'
import React from 'react'
import { CButton } from '@coreui/react'
const CustomTable = () => {
  const columns = [
    {
      name: 'SNo',
      selector: (row) => row.sno,
      sortable: true,
      center: true,
    },
    {
      name: 'VA No',
      selector: (row) => row.VA_No,
      sortable: true,
      center: true,
    },
    {
      name: 'Tripsheet No',
      selector: (row) => row.Tripsheet_No,
      sortable: true,
      center: true,
    },
    {
      name: 'Vehicle Type',
      selector: (row) => row.Vehicle_Type,
      sortable: true,
      center: true,
    },
    {
      name: 'Vehicle No',
      selector: (row) => row.Vehicle_No,
      sortable: true,
      center: true,
    },
    {
      name: 'Driver Name',
      selector: (row) => row.Driver_Name,
      sortable: true,
      center: true,
    },
    {
      name: 'Waiting At',
      selector: (row) => row.Waiting_At,
      sortable: true,
      center: true,
    },
    {
      name: 'Screen Duration',
      selector: (row) => row.Screen_Duration,
      center: true,
    },
    {
      name: ' Overall Duration',
      selector: (row) => row.Overall_Duration,
      center: true,
    },
    {
      name: 'Action',
      selector: (row) => row.Action,
      center: true,
    },
  ]

  const data = [
    {
      id: 1,
      sno: 1,
      VA_No: 12000,
      Tripsheet_No: 102556,
      Vehicle_Type: 'own',
      Vehicle_No: 'TN45AT8417',
      Driver_Name: 'Saravana',
      Waiting_At: <span className="badge rounded-pill bg-info">DI Creation</span>,
      Screen_Duration: '0 Hrs 07 Mins',
      Overall_Duration: '0 Hrs 55 Mins',
      Action: (
        <CButton className="btn btn-sm text-white" color="warning">
          Vehicle Insp
        </CButton>
      ),
    },
    {
      id: 2,
      sno: 2,
      VA_No: 12070,
      Tripsheet_No: 102501,
      Vehicle_Type: 'contract',
      Vehicle_No: 'TN54AT8417',
      Driver_Name: 'David',
      Waiting_At: <span className="badge rounded-pill bg-info">Waiting</span>,
      Screen_Duration: '0 Hrs 07 Mins',
      Overall_Duration: '0 Hrs 55 Mins',
      Action: (
        <CButton className="btn btn-sm text-white" color="warning">
          Gate In
        </CButton>
      ),
    },
    {
      id: 3,
      sno: 3,
      VA_No: 12018,
      Tripsheet_No: 102501,
      Vehicle_Type: 'Hire',
      Vehicle_No: 'TN54CT8417',
      Driver_Name: 'Alvin',
      Waiting_At: <span className="badge rounded-pill bg-info">Ts Creation</span>,
      Screen_Duration: '1 Hrs 07 Mins',
      Overall_Duration: '2 Hrs 55 Mins',
      Action: (
        <CButton className="btn btn-sm text-white" color="warning">
          Gate Out
        </CButton>
      ),
    },
  ]
  const customStyles = {
    rows: {
      style: {
        minHeight: '50px', // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        backgroundColor: '#4d3227',
        color: '#fff',
        fontSize: '0.8rem',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
        textAlign: 'center',
      },
    },
  }
  return <DataTable columns={columns} data={data} customStyles={customStyles} />
}

export default CustomTable
