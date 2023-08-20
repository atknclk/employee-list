import { Close } from '@mui/icons-material';
import { Id } from '../helpers';
import { deleteDepartment } from '../service/api';

type DepartmentBoxProps = {
  label: string;
  id: Id;
};

export const DepartmentBox = ({ label, id }: DepartmentBoxProps) => {
  const handleDeleteDepartment = async (id: Id) => {
    console.log(id);
    await deleteDepartment(id);
    window.location.reload();
  };

  return (
    <div className="department-card">
      <div className="close-button">
        <Close onClick={() => handleDeleteDepartment(id)} />
      </div>
      <div className="department-card-title">{label}</div>
    </div>
  );
};
