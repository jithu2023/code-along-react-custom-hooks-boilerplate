import React, { useState } from 'react';
import './App.css';

const useStorage = (key, initialValue) => {
  const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;

  const [value, setValue] = useState(storedValue);

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
    sessionStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};

const App = () => {
  const [inputValue, setInputValue] = useStorage('myStoredValue', '');

  return (
    <div>
      <input className='inputbox'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default App;
