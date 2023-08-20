import { useEffect, useState } from 'react';
import { getAllEmployees, deleteEmployee, addEmployee, editEmployee } from '../service/api';
import { Table, TableCell, TableRow, TableHead, TableBody } from '@material-ui/core';
import { CustomTable, ContentTitle } from '../Components';
import { SearchOutlined, Close } from '@mui/icons-material';
import { OutlinedInput, InputAdornment, Modal } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { EmployeeForm } from '../Components/EmployeeForm';
import { theme, EmployeeType, Id, EmployeeInitialValues, tableStyle } from '../helpers';

export const Employees = () => {
  const classes = tableStyle();
  const [employees, setEmployees] = useState([]);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [initialValues, setInitialValues] = useState<EmployeeType>(EmployeeInitialValues);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employees.filter((employee: EmployeeType) => employee.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const getEmployees = async () => {
    const response = await getAllEmployees();
    setEmployees(response.data);
  };

  const deleteData = async (id: Id) => {
    await deleteEmployee(id);
    getEmployees();
  };

  const editData = async (id: Id) => {
    const response = await getAllEmployees();
    const employee = response.data.find((data: any) => data.id === id);
    setInitialValues(employee);
    setEditModalOpen(true);
  };

  const handleAddEmployee = async (value: EmployeeType, e: any) => {
    e.preventDefault();
    await addEmployee(value);
    window.location.reload();
  };

  const handleEditEmployee = async (value: EmployeeType, e: any) => {
    e.preventDefault();
    await editEmployee(value);
    window.location.reload();
  };

  const handleClickAddEmployee = () => {
    setAddModalOpen(true);
    setInitialValues(EmployeeInitialValues);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="content-body">
      <ContentTitle title="Employees" />
      <div className="table-header">
        <ThemeProvider theme={theme}>
          <OutlinedInput
            id="outlined-adornment-password"
            type={'text'}
            className="search-input"
            endAdornment={
              <InputAdornment position="end">
                <SearchOutlined fontSize="medium" />
              </InputAdornment>
            }
            placeholder="Search Employee"
            color="secondary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </ThemeProvider>
        <div
          className="add-employee-button"
          onClick={() => {
            handleClickAddEmployee();
          }}
        >
          Add Employee
        </div>
      </div>
      <div className="table-container">
        <Table stickyHeader className={classes.table}>
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>DEPARTMENT</TableCell>
              <TableCell>CONTACT</TableCell>
              <TableCell>HIRE DATE</TableCell>
              <TableCell>ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees?.map((data: EmployeeType) => (
              <CustomTable key={data.id} data={data} deleteData={deleteData} editData={editData} classes={classes} />
            ))}
          </TableBody>
        </Table>
        <Modal open={addModalOpen}>
          <div className="modal-content">
            <div className="close-button">
              <Close onClick={() => setAddModalOpen(false)} />
            </div>
            <EmployeeForm title="Add Employee" initialValues={initialValues} handleSubmit={handleAddEmployee} />
          </div>
        </Modal>
        <Modal open={editModalOpen}>
          <div className="modal-content">
            <div className="close-button">
              <Close onClick={() => setEditModalOpen(false)} />
            </div>
            <EmployeeForm title="Edit Employee" initialValues={initialValues} handleSubmit={handleEditEmployee} />
          </div>
        </Modal>
      </div>
    </div>
  );
};
