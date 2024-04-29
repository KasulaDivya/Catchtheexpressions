import React, { useState, useMemo } from 'react';

function ExampleComponent({ value }) {
  // Memoize the doubledValue
  const doubledValue = useMemo(() => {
    console.log('Calculating doubled value...');
    return value * 2;
  }, [value]); // Recompute doubledValue only if value changes

  return (
    <div>
      <h2>Original Value: {value}</h2>
      <h2>Doubled Value: {doubledValue}</h2>
    </div>
  );
}

function App() {
  const [number, setNumber] = useState(5);

  return (
    <div>
      <h1>useMemo Example</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <ExampleComponent value={number} />
    </div>
  );
}

export default App;

