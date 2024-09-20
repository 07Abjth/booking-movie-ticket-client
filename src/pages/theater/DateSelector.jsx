 
 
 export const DateSelector = ({ selectedDate, onDateChange }) => {
    return (
      <div className="date-selector mb-4">
        <label htmlFor="date" className="font-semibold">Select Date: </label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          className="ml-2 border border-gray-300 p-2"
        />
      </div>
    );
  };
  