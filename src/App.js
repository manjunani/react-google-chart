import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from './components/Chart';
import response from '../src/data.json';

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    if (show) {
      setData(response);
    }
  }, [show]);
  return (
    <div className='App'>
      {show ? (
        <span>
          <h2>Available Charts are </h2>
          <h3>Charts will be shown here</h3>
          {show &&
            data &&
            data.charts.map((chartData, i) => (
              <Chart chart={chartData} key={i} />
            ))}
        </span>
      ) : (
        <h2>No Charts Available</h2>
      )}
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide Data' : 'Fetch Data'}
      </button>
    </div>
  );
}

export default App;
