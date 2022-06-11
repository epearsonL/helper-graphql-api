import React, {useState} from 'react'
import DatePicker from 'react-datepicker'

export const GeneralDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
}