import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { InputLabel } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../helpers';
import dayjs from 'dayjs';

type BasicDatePickerProps = {
  value: any;
  setEmployee: any;
  employee: any;
  label: string;
};

export const BasicDatePicker = ({ value, setEmployee, employee, label }: BasicDatePickerProps) => {
  return (
    <div className="input-container">
      <InputLabel className="label">{label}</InputLabel>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              className="input"
              orientation="portrait"
              value={dayjs(value)}
              onChange={(newValue) => {
                const formattedDate = dayjs(newValue).format('YYYY-MM-DD');
                setEmployee({ ...employee, dateOfHire: formattedDate });
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
};
