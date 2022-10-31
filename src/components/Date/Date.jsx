import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import './date.css'
export default function BasicDateTimePicker() {
    const [value, setValue] = useState(dayjs('2022-04-07'));
    useEffect(() => {
        const someFun = () => {
            const dateNow = new Date();
            const year = dateNow.getFullYear();
            const month = dateNow.getMonth() + 1;
            const day = dateNow.getDate();
            setValue(dayjs(`${year}-${month}-${day}`))
        }
        return () => someFun()
    }, [dayjs])
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={(value) => setValue(value)}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
