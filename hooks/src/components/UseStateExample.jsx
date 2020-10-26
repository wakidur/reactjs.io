import React, { useState } from 'react';

export const UseStateExample = () => {
  const [name, setName] = useState('Wakidur');
  const [address, setAddress] = useState('Dhaka, Bangladesh');

  return (
    <div>
      <h1>{name}</h1>
      <h2>{address}</h2>
      <button onClick={() => setName('Rahman')}>Set Name to </button>
      <button onClick={() => setAddress('Canada')}>Set Address</button>
    </div>
  );
};
