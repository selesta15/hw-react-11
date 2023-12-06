import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';

const columns = [
  {
    field: 'name',
    headerName: 'Name',
    width: 280,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={params.row.avatar} alt="Avatar" style={{ marginRight: 8 }} />
        {params.value}
      </div>
    ),
  },
  { field: 'company', headerName: 'Company', width: 400 },
  { field: 'role', headerName: 'Role', width: 400 },
  { field: 'verified', headerName: 'Verified', width: 100 },
  { field: 'status', headerName: 'Status', width: 130 }
];

function createData(id, name, company, role, verified, status, avatar) {
  return { id, name, company, role, verified, status, avatar };
}

const rows = [
  createData(1, 'Adrienne Morar', 'Runolfsson LLS', 'Beckend Developer ', 'No', 'Active', 'URL_TO_AVATAR_IMAGE'),
  createData(2, 'Becky Ernser', 'Fadel-Torp', 'Leader', 'No', 'Active', 'URL_TO_AVATAR_IMAGE'),
  createData(3, 'Colin Osinski', 'Spenser,Towne and Bogan', 'UI Designer', 'Yes', 'Banned', 'URL_TO_AVATAR_IMAGE'),
  createData(4, 'Dan Lindgren', 'Cummerata-Casper', 'Full Stack Designer', 'Yes', 'Active', 'URL_TO_AVATAR_IMAGE'),
  createData(5, 'Dennis O`Reilly', 'Auer,Watsika and Roberts', 'UI/UX Designer', 'Yes', 'Active', 'URL_TO_AVATAR_IMAGE'),
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

