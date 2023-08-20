import { useState } from 'react';
import { TableCell, TableRow, Divider } from '@material-ui/core';
import { MoreVert, EditOutlined, RemoveCircleOutlineOutlined } from '@mui/icons-material';
import { EmployeeType, Id } from '../helpers';

type CustomTableProps = {
  data: EmployeeType;
  deleteData: (id: Id) => void;
  editData: (id: Id) => void;
  classes: Record<string, string>;
  key: Id;
};

export const CustomTable = ({ key, data, deleteData, editData, classes }: CustomTableProps) => {
  const [open, setOpen] = useState(false);

  const handleDelete = (id: Id) => {
    deleteData(id);
    setOpen(false);
  };

  const handleEdit = (id: Id) => {
    editData(id);
    setOpen(false);
  };

  return (
    <TableRow className={classes.trow} key={key}>
      <TableCell>{data.id}</TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.department}</TableCell>
      <TableCell>
        <div>{data.contact.email}</div>
        <div>{data.contact.phoneNumber}</div>
      </TableCell>
      <TableCell>{data.dateOfHire}</TableCell>
      <TableCell>
        <div className="action-container">
          {open && (
            <div className="action-popper">
              <div className="action-button-container">
                <div className="action-button" onClick={() => handleEdit(data.id)}>
                  <EditOutlined className="icon" />
                  <span className="text">Edit</span>
                </div>
                <Divider style={{ width: '2px', backgroundColor: 'black' }} orientation="vertical" />
                <div className="action-button" onClick={() => handleDelete(data.id)}>
                  <RemoveCircleOutlineOutlined className="icon" />
                  <span className="text">Remove</span>
                </div>
              </div>
            </div>
          )}
          <div className="more-button" onClick={() => setOpen(!open)}>
            <MoreVert />
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
};
