import React, { createContext, useState, useEffect } from 'react';

export const dataContext = createContext();

const API_URL = 'https://api.myjson.online/v1/records/19cd9eb0-58f3-47e3-987a-e14f3da6ee4b';

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((result) => setData(result.data))
      .catch((error) => console.error('Failed to fetch portfolio data:', error));
  }, []);

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  );
};
