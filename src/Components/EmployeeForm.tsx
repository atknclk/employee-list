import { useState, useEffect } from 'react';
import { ContentTitle, BasicDatePicker, CustomTextField } from '.';
import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { getAllDepartments } from '../service/api';
import { theme, EmployeeType, DepartmentInitialValues } from '../helpers';

type EmployeeFormProps = {
  initialValues: EmployeeType;
  title: string;
  handleSubmit: (employee: EmployeeType, e: React.FormEvent<HTMLFormElement>) => void;
};

export const EmployeeForm = ({ initialValues, handleSubmit, title }: EmployeeFormProps) => {
  const [employee, setEmployee] = useState(initialValues);
  const [departments, setDepartments] = useState([DepartmentInitialValues]);

  const getDepartments = async () => {
    const response = await getAllDepartments();
    setDepartments(response.data);
  };

  useEffect(() => {
    getDepartments();
  }, []);

  return (
    <div className="modal-container">
      <form onSubmit={(e) => handleSubmit(employee, e)}>
        <ContentTitle title={title} />
        <ThemeProvider theme={theme}>
          <div className="form-container">
            <CustomTextField label="Name" value={employee?.name} handleChange={(value: string) => setEmployee({ ...employee, name: value })} />
            <CustomTextField
              label="Phone Number"
              value={employee?.contact?.phoneNumber}
              handleChange={(value: string) => setEmployee({ ...employee, contact: { ...employee.contact, phoneNumber: value } })}
              type="number"
            />
            <CustomTextField
              label="E-mail"
              value={employee?.contact?.email}
              handleChange={(value: string) => setEmployee({ ...employee, contact: { ...employee.contact, email: value } })}
              type="email"
            />
            <CustomTextField
              label="Department"
              value={employee?.department}
              handleChange={(value: string) => setEmployee({ ...employee, department: value })}
              selectFields={departments}
            />

            <BasicDatePicker value={employee?.dateOfHire} setEmployee={setEmployee} employee={employee} label="Date of Hire" />
          </div>
        </ThemeProvider>
        <Button type="submit" className="submit-button-container">
          <div className="submit-button">Submit</div>
        </Button>
      </form>
    </div>
  );
};
