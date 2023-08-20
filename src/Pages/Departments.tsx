import { useEffect, useState } from 'react';
import { ContentTitle, DepartmentBox, CustomTextField } from '../Components';
import { getAllDepartments, addDepartment } from '../service/api';
import { DepartmentInitialValues, theme } from '../helpers';
import { Button, Divider, ThemeProvider } from '@mui/material';

export const Departments = () => {
  const [departments, setDepartments] = useState([DepartmentInitialValues]);
  const [department, setDepartment] = useState('');

  const getDepartments = async () => {
    const response = await getAllDepartments();
    setDepartments(response.data);
  };

  const capitalizeFirstLetter = (inputString: string) => {
    return inputString.replace(/^(.)|\s(.)/g, function ($1) {
      return $1.toUpperCase();
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addDepartment({ label: capitalizeFirstLetter(department), value: department.toLowerCase() });
    window.location.reload();
  };

  useEffect(() => {
    getDepartments();
  }, []);

  return (
    <div className="content-body">
      <ContentTitle title="Departments" />
      <div className="department-content-card">
        <div className="department-container">
          {departments.map((department) => (
            <DepartmentBox label={department.label} id={department.id} />
          ))}
        </div>
        <div className="add-department-container">
          <div className="add-department-title">Add Department</div>
          <Divider className="department-divider" />
          <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit}>
              <CustomTextField label="Department" value={department} handleChange={(value: string) => setDepartment(value)} />
              <Button type="submit" className="submit-button-container">
                <div className="submit-button">Submit</div>
              </Button>
            </form>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};
