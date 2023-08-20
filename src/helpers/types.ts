export type Id = string | number | undefined | null;

export type EmployeeType = {
    id: Id;
    name: string;
    department: string;
    contact: {
      email: string;
      phoneNumber: string;
    };
    dateOfHire: string;
}

export type DepartmentProps = {
    id: Id;
    label: string;
    value: string;
}[]