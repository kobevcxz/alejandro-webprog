import { DataGrid } from '@mui/x-data-grid';
import { Typography, Box } from '@mui/material';

const rows = [
  { id: 1, firstName: 'Dirk', lastName: 'Alejandro', age: 22 },
  { id: 2, firstName: 'Lem', lastName: 'Bernardo', age: 21 },
  { id: 3, firstName: 'Elijah', lastName: 'Bautista', age: 20 },
  { id: 4, firstName: 'Anna', lastName: 'Waters', age: 23 },
  { id: 5, firstName: 'David', lastName: 'Gonzales', age: 24 },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'age', headerName: 'Age', width: 90 },
];

const UsersPage = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      <Box sx={{ height: 400 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5]}
          checkboxSelection
        />
      </Box>
    </>
  );
};

export default UsersPage;