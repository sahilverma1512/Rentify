import React, { useState } from 'react';

const RentProduct = ({ rentalPricePerDay }) => {
  const [days, setDays] = useState(1); // Default to 1 day
  const [totalCost, setTotalCost] = useState(rentalPricePerDay);

  const handleDayChange = (event) => {
    const selectedDays = parseInt(event.target.value, 10);
    setDays(selectedDays);
    setTotalCost(selectedDays * rentalPricePerDay);
  };

  return (
    <div style={styles.container}>
      <h3>Rent this Product</h3>
      <div style={styles.formGroup}>
        <label htmlFor="days">Select Days:</label>
        <input
          type="number"
          id="days"
          name="days"
          value={days}
          min="1"
          onChange={handleDayChange}
          style={styles.input}
        />
      </div>
      <div style={styles.costBox}>
        <p>Total Cost:</p>
        <strong>₹{totalCost}</strong>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    textAlign: 'center',
  },
  formGroup: {
    margin: '20px 0',
  },
  input: {
    marginLeft: '10px',
    padding: '5px',
    width: '60px',
  },
  costBox: {
    marginTop: '20px',
    backgroundColor: '#f9f9f9',
    padding: '10px',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
};

export default RentProduct;
