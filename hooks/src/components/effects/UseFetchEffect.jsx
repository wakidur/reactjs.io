import { useState, useEffect } from 'react';

const UseFetchEffect = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const dataArray = await res.json();
      setData(dataArray);
    };
    fatchData();
  });
  return data;
};

export default UseFetchEffect;
