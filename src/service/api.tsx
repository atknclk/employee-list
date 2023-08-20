import axios from 'axios';
import { EmployeeType, Id } from '../helpers';

const employees = 'http://localhost:3000/employees';
const departments = 'http://localhost:3000/departments';

export const getAllEmployees = async () => {
  return await axios.get(`${employees}`);
};

export const getAllDepartments = async () => {
  return await axios.get(`${departments}`);
};

export const addEmployee = async (employee: EmployeeType) => {
  return await axios.post(employees, employee);
};

export const editEmployee = async (employee: EmployeeType) => {
  return await axios.put(`${employees}/${employee.id}`, employee);
};

export const deleteEmployee = async (id: Id) => {
  return await axios.delete(`${employees}/${id}`);
};

export const addDepartment = async (department: any) => {
  return await axios.post(departments, department);
};

export const deleteDepartment = async (id: Id) => {
  return await axios.delete(`${departments}/${id}`);
};
