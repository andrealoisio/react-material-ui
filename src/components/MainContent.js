import styles from './MainContent.module.css';
import Button from '@material-ui/core/Button';
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';

const MainContent = () => {
  const [selectedDate, handleDateChange] = React.useState(new Date());
  return (
    <div className={styles['main-content']}>
      <h3>Buttons</h3>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary" style={{ marginLeft: 5 }}>
        Primary
      </Button>
      <h3>Date Pickers</h3>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker value={selectedDate} onChange={handleDateChange} />
        <TimePicker value={selectedDate} onChange={handleDateChange} />
        <DateTimePicker value={selectedDate} onChange={handleDateChange} />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default MainContent;
