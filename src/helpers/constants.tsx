import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core';

export const EmployeeInitialValues = {
  id: null,
  name: '',
  department: '',
  contact: {
    email: '',
    phoneNumber: '',
  },
  dateOfHire: '',
};

export const DepartmentInitialValues = {
  id: null,
  label: '',
  value: '',
};

export const theme = createTheme({
  palette: {
    secondary: {
      main: '#cf6565',
    },
  },
});

export const tableStyle = makeStyles({
  table: {
    width: '100%',
  },
  thead: {
    '& > *': {
      background: '#EBEBEB',
      color: '#black',
      fontSize: '16px',
    },
  },
  trow: {
    '& > *': {
      fontSize: '16px',
    },
  },
});
