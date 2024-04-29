import React, { useState, useMemo } from 'react';

function FibonacciCalculator() {
  const [number, setNumber] = useState(0);

  const fibonacci = useMemo(() => {
    console.log('Calculating Fibonacci sequence...');
    const sequence = [0, 1];
    for (let i = 2; i <= number; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence[number];
  }, [number]);

  const isEven = useMemo(() => {
    console.log('Checking if the number is even...');
    return number % 2 === 0;
  }, [number]);

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    setNumber(value);
  };

  return (
    <div>
      <h2>Fibonacci Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <p>Fibonacci of {number} is: {fibonacci}</p>
      <p>{number} is {isEven ? 'even' : 'odd'}</p>
    </div>
  );
}

export default FibonacciCalculator;
