import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './Table.css'

const columns = [
    { field: 'id', headerName: 'Tempelate', width: 200 },
    { field: 'firstName', headerName: 'File Type', width: 200 },
    { field: 'lastName', headerName: 'Users', width: 200 },
    {
      field: 'Files',
      headerName: 'Files',
      type: 'number',
      width: 200,
    },
    {
      field: 'Insights',
      headerName: 'Insights',
      type: 'number',
      width: 200,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  

const Table = () => {
  return (
    <>
     <div style={{ height: 400, width: '70%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
    </>
  )
}

export default Table