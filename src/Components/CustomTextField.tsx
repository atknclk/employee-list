import { TextField, InputLabel, MenuItem } from '@mui/material';
import { DepartmentProps } from '../helpers';

type CustomTextFieldProps = {
  label: string;
  value: string;
  handleChange: (value: string) => void;
  type?: string;
  selectFields?: DepartmentProps;
};

export const CustomTextField = ({ label, value, handleChange, type = 'text', selectFields }: CustomTextFieldProps) => {
  return (
    <div className="input-container">
      <InputLabel className="label">{label}</InputLabel>
      <TextField
        required
        className="input"
        variant="outlined"
        color="secondary"
        select={!!selectFields}
        type={type}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        {selectFields?.map((field) => (
          <MenuItem key={field.id} value={field.value}>
            {field.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};
