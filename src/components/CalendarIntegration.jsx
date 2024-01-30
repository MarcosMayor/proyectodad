import React, { useState } from 'react';

const CalendarIntegration = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <p>Fecha Seleccionada: {selectedDate ? selectedDate.toLocaleDateString() : 'Ninguna'}</p>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => handleDateChange(new Date(e.target.value))}
      />
    </>
  );
};

export default CalendarIntegration;
