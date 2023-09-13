import { useState, useEffect } from "react";

// Retrieve previous books, return defaultValue if not found any
const getStorageData = (key, defaultValue) =>{
  const savedItem = localStorage.getItem(key);
return JSON.parse(savedItem) || defaultValue;
}

// Set initialValue to savedItem or defaultValue in localStorage
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getStorageData(key, initialValue);
  });

// Save new key-value pair to localStorage every time key or value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}

export default useLocalStorage;